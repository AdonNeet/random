const database = []

// the default coloumn in this database
const [id, name, age, gender, address] = ['id', 'name', 'age', 'gender', 'address'];
const ALL = ['id', 'name', 'age', 'gender', 'address'];





const varToStr = varObj => Object.keys(varObj)[0];

function findIndex(prop, value) { // only one condition
    let index = database.map(function(e) {return e[prop]; }).indexOf(value);
    return index;
}

// add funct done, yey
function add(data) {
    if (Array.isArray(data) === true) {
        for (let i = 0;i<data.length;i++){
            database.push(data[i]);
        }
    } else {
        database.push(data);   
    }
}

// remove funct (undone), index finder goes wrong for the remove and get funct
function remove(condition){ 
    // find the index of object with condition
    var index = [];
    if (Array.isArray(condition) === true) {    // the stdin is array, why you check it, fck!
        for (let i = 0;i<database.length;i++) {
            const trueCount = condition.length;
            var found = false;
            var count = 0;
            for(let j = 0;j<condition.length;j++){
                if(database[i][varToStr(condition[j])] === condition[varToStr(condition[j])]) { // the problem in there, it cant compare, the pointer for condition goes wrong
                    count++;   
                } else {
                    break;
                }
                if(count === trueCount) {  
                    found = true;
                    break;
                } else {
                    continue;
                }
            }
            if (found === true) {
                index.push(i);
            }
        }
    } else {
        for (let i = 0;i<database.length;i++) { // same like in that, can delete in specific object
            if(database[i][varToStr(condition)] === condition[varToStr(condition)]) {
                index.push(i);
            }
        }
    }
    // purge with splice, it works pretty well
    console.log(index);
    if (index.length > 1) {
        var count = 0;
        for (let idx = 0;idx<index.length;idx++){
            database.splice(idx-count, 1);
            count = count + 1;
        }
    }
    
}


// get funct, undone, sike
function get(subdata, condition){   // only for one user (?)
    // find the index of obj with condition, done
    var index = [];
    if (Array.isArray(condition === true)) {
        for (let i = 0;i<database.length;i++) {
            const trueCount = condition.length;
            var found = false;
            for(let j = 0;j<condition.length;j++){
                var count = 0;
                if(database[i][varToStr(condition[j])] === condition[j]) {
                    count++;
                    if(count === trueCount) {
                        found = true;
                        break;
                    } else {
                        continue;   
                    }
                } else {
                    break;
                }
            }
            if (found === true) {
                index.push(i);
            }
        }
    } else {
        for (let i = 0;i<database.length;i++) {
            var found = false;
            if(database[i][varToStr(condition)] === condition) {
                found = true;
            }
            if (found === true) {
                index.push(i);
            }
        }
    }
    // the kind of subdata that want to get-ed, the output promises like a table, i think
    if (Array.isArray(subdata) === true) {
        if (varToStr(subdata) === 'ALL') {
         
            return;   
        }
    } else {
        
    }
}




// user data that will inputed
const user1 = {     // 0
    id: "1",
    name: "Adon",
    age: "21",
    gender: "Male",
    address: "World",
}

const user2 = {     // 1
    id: "2",
    name: "Neet",
    age: "21",
    gender: "Male",
    address: "Isekai",
}

const user3 = {     // 2
    id: "3",
    name: "Kari",
    age: "23",
    gender: "Female",
    address: "Isekai",
}

const user4 = {     // 3
    id: "4",
    name: "Weebs",
    age: "21",
    gender: "Male",
    address: "Isekai",
}

const user5 = {     // 4
    id: "5",
    name: "Basi",
    age: "21",
    gender: "Female",
    address: "Isekai",
}

// add(user1); add(user2); add(user3);
add([user1, user2, user3, user4, user5]);
add({id: "6", name: "Ran", age: "25", gender: "Male", address: "World"})

console.log(database);

for (let i = 0;i<database.length;i++) {
    console.log(database[i]);
}

var idx = database.map(function(e) { return e['name']; }).indexOf('Kari');
console.log(idx);
console.log(findIndex('name', 'Kari'));

remove({gender: "Female"}); // because the stdin is array with flag, yeah fck it
console.log(database)