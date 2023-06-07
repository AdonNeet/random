const database = []

// the default coloumn in this database
const [id, name, age, gender, address] = ['id', 'name', 'age', 'gender', 'address'];
const ALL = ['id', 'name', 'age', 'gender', 'address'];


const varToStr = varObj => Object.keys(varObj); // to get list key of array

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

// remove funct done
function remove(condition){ 
    // find the index of object with condition
    var index = [];
    var kondisi = varToStr(condition);
    const trueCount = kondisi.length;
    // check area=========================
    console.log(kondisi, "kondisi ditemukan"); // check the kondisi, it founded, also check the database inside
    /*
    for (let i = 0;i<kondisi.length;i++){   // for checking
        console.log(condition[kondisi[i]]);
        console.log(database[1][kondisi[i]]);

        for (let j = 0;j<database.length;j++) {
            if (database[j][kondisi[i]] === condition[kondisi[i]]) {
                console.log(j, "found");
                continue;
            }
        }
    }
    */
    // ==================================

    for (let i = 0;i<database.length;i++) {
        var count = 0;
        for(let j = 0;j<trueCount;j++) {
            if(database[i][kondisi[j]] === condition[kondisi[j]]) { // it can, but idk why cant get it
                count++;
                console.log(i, j, "Found");   // checking :D
            } else {
                break;
            }
            if(count === trueCount) {  
                index.push(i);
                break;
            } else {
                continue;
            }
        }
    }
    // purge with splice, it works pretty well
    console.log(index, "index that will purged");
    if (index.length >= 1) {
        var count = 0;
        for (let idx = 0;idx<index.length;idx++){
            database.splice(index[idx]-count, 1);
            count = count + 1;
        }
    }
    
}


// get funct, undone, sike
function get(property, condition){   // only for one user (?)
    // find the index of obj with condition
    var index = [];
    var kondisi = varToStr(condition);
    const trueCount = kondisi.length;
    for (let i = 0;i<database.length;i++) {
        var count = 0;
        for(let j = 0;j<trueCount;j++) {
            if(database[i][kondisi[j]] === condition[kondisi[j]]) { 
                count++;
            } else {
                break;
            }
            if(count === trueCount) {  // if count same with trueCount, push i to index
                index.push(i);
                break;
            } else {
                continue;
            }
        }
    }
    console.log(index, "index that will get-ed");

    // the kind of subdata that want to get-ed, the output promises like a table, i think
    console.log(property, "property that want get-ed"); // check the stdin
    /*
    for (let idx = 0;idx<index.length;idx++) {      // yeah, it work, but didnt like table
        for (let i =0;i<property.length;i++) {
            console.log((database[idx][property[i]]));
        }
    }
    */
    // to find a length of each column
    var headCount = property.length; 
    var lengtHead = [];     // it minim length, depend on head and value length, then add 2 or 3 space when do stdout
    var borderIdx = [];
    var lenCount = 0;
    for (let i = 0;i<headCount;i++) {
        var bigLen = 0;
        for (let idx = 0;idx<index.length;idx++) {
            if (database[idx][property[i]].length > bigLen) {   // check the bigLen of value
                bigLen = database[idx][property[i]].length;
            }
        }
        if (bigLen > property[i].length) {
            lengtHead.push(bigLen);
            lenCount = lenCount + bigLen + 2; // add 3 to make the table doesnt look cramped
        } else {
            lengtHead.push(property[i].length);
            borderIdx.push(property[i].length+1);
            lenCount = lenCount + property[i].length + 3;
        }
    }
    console.log(lengtHead, "that is the length every head", lenCount, "is the length total")
    // to stdout the table, and the content
    var aCount = 0;
    var aPost = 0;
    var headRest = '';
    for (let i = 0;i<lenCount;i++) {
        if (i === borderIdx[aPost]){
            headRest = headRest + "|";
        } else { // stuck in there, idk how to make the itteration

        }
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


// below is the main code

// add(user1); add(user2); add(user3);
add([user1, user2, user3, user4, user5]);
add({id: "6", name: "Ran", age: "25", gender: "Male", address: "World"})

console.log(database.length, "user was added");

/*
for (let i = 0;i<database.length;i++) { // to check the content of database
    console.log(database[i]);
}
*/

// var idx = database.map(function(e) { return e['name']; }).indexOf('Kari');
// console.log(idx);
// console.log(findIndex('name', 'Kari'));

get([id, name, gender], {id: '1'}); // to stdout the id, name, gender in like table condition

/*
remove({gender: "Female"}); // to remove the Female user
console.log(database)
*/
