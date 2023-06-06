const database = []

// the default coloumn in this database
const ALL = ['id', 'name', 'age', 'gender', 'address'];
const [id, name, age, gender, address] = ['id', 'name', 'age', 'gender', 'address'];




const varToStr = varObj => Object.keys(varObj)[0];

function findIndex(prop, value) { // only one condition
    var index = database.map(function(e) {return e[prop]; }).indexOf(value);
    return index;
}

// add funct done
function add(data) {
    if (Array.isArray(data) === true) {
        for (let i = 0;i<data.length;i++){
            database.push(data[i]);
        }
    } else {
        database.push(data);   
    }
}

// get funct
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
    // the kind of subdata that want to get-ed
    if (Array.isArray(subdata) === true) {
        if (varToStr(subdata) === 'ALL') {
         
            return;   
        }
    } else {
        
    }
}




// user data that will inputed
const user1 = {
    id: "1",
    name: "Adon",
    age: "18",
    gender: "Male",
    address: "World",
}

const user2 = {
    id: "2",
    name: "Neet",
    age: "21",
    gender: "Male",
    address: "Isekai",
}

const user3 = {
    id: "3",
    name: "Kari",
    age: "23",
    gender: "Female",
    address: "Isekai",
}

// add(user1); add(user2); add(user3);
add([user1, user2, user3]);

console.log(database);

for (let i = 0;i<database.length;i++) {
    console.log(Object.values(database[i]));
}

var idx = database.map(function(e) { return e['name']; }).indexOf('Kari');
console.log(idx);
console.log(findIndex('name', 'Kari'));