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
    } else {
        console.log("None deleted");
    }
    
}


// get funct, done, sike
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
    console.log(index, "index that will get-ed,", index.length, "is index length");

    // the kind of subdata that want to get-ed, the output promises like a table, i think
    console.log(property, "property that want get-ed"); // check the stdin
    // to find a length of each column
    var headCount = property.length; 
    var lengtHead = [];     // it minim length, depend on head and value length, then add 2 or 3 space when do stdout
    var borderIdx = [];
    var lenCount = 1;
    for (let i = 0;i<headCount;i++) {
        var strLen = 0;
        for (let idx = 0;idx<index.length;idx++) {
            if (database[idx][property[i]].length > strLen) {   // check the bigLen of value
                strLen = database[idx][property[i]].length;
            }
        }
        if (strLen > property[i].length) {
            lengtHead.push(strLen);
            lenCount = lenCount + strLen + 3; // add 3 to make the table doesnt look cramped
            borderIdx.push(lenCount-1);
        } else {
            lengtHead.push(property[i].length);
            lenCount = lenCount + property[i].length + 3;
            borderIdx.push(lenCount-1);
        }
    }
    console.log(lengtHead, "that is the length every head", lenCount, "is the length total");
    console.log(borderIdx, "index for border");
    // to stdout the table, and the content
    var aCount = 0;
    var aPost = 0;
    var bPost = 0;
    var rest = '';
    // stdout header
    while (aCount < lenCount) { // the indexing not from 0, but normal decimal, it depended on aCount (it start from 0)
        if (aCount === 0 || aCount === borderIdx[aPost]){
           rest += "|";
            aCount++;
            if (aCount === 1) {
                continue;
            } else {
                aPost++;
            }
        } else if (aCount === 1 || aCount === borderIdx[aPost-1]+1) { 
            rest += property[bPost];
            // console.log(rest);  // check
            aCount = aCount + lengtHead[bPost];
            bPost++;
        } else {
            rest = rest+ " ";
            aCount++;
        }
        if (aCount === lenCount) {
            console.log(rest);  // stdout head
            rest = ''; // reset
        }
    }
    aCount = aPost = bPost = 0; // reset
    // stdout line between header and content
    for (let i = 0;i<lenCount;i++) {
        rest += '-';
        if (i === lenCount-1) {
            console.log(rest); // stdout the line
            rest = ''; // reset
        }
    }
    // now is the content
    if (index.length >= 1) {
        for (let idx = 0;idx<index.length;idx++){
            // console.log(idx);
            while (aCount < lenCount) { // the indexing not from 0, but normal decimal, it depended on aCount 
                if (aCount === 0 || aCount === borderIdx[aPost]){
                   rest += "|";
                    aCount++;
                    if (aCount === 1) {
                        continue;
                    } else {
                        aPost++;
                    }
                } else if (aCount === 1 || aCount === borderIdx[aPost-1]+1) { 
                    rest += database[index[idx]][property[bPost]];
                    // console.log(rest);  // check
                    aCount = aCount + database[index[idx]][property[bPost]].length;
                    bPost++;
                } else {
                    rest = rest+ " ";
                    aCount++;
                }
                if (aCount === lenCount) {
                    console.log(rest);  // stdout content on that index
                }
            }
            rest = ''; // reset
            aCount = aPost = bPost = 0; // reset
        }
    } else {
        console.log("\nNone found");
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

get([id, name, gender], {id : ("1", "2","3")}) // to stdout the id, name, gender in like table condition

/*
remove({gender: "Female"}); // to remove the Female user
console.log(database)
*/
