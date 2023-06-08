/* 

    Author : adon_neet
    Github : https://github.com/AdonNeet/Random/blob/main/javascript/FOSSCLASS/day3/db_work.js
    Date   : M6/D5/Y2023 (created)
    Note   : the condition just "And" condition, i didnt make the "Or" condition because the time remaining just killed by "And" conidtion

*/

const database = [];

// the default coloumn in this database
const [id, name, age, gender, address] = ['id', 'name', 'age', 'gender', 'address'];
const ALL = ['id', 'name', 'age', 'gender', 'address'];

// var to string, to get the name key of array, it also can get used in object orientated (to get the key name of property)
const varToStr = varObj => Object.keys(varObj);

// add function (done, just throw them into database)
function add(data) {
    if (Array.isArray(data) === true) {
        for (let i = 0;i<data.length;i++){
            database.push(data[i]);
        }
    } else {
        database.push(data);   
    }
}

// delete function, to delete user in database (done, its killing many time to find the solution for all function main problem, that is find the index of object with the condition)
function remove(condition) {
    // get the index of object, with condition
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
    // purge object with splice()
    // console.log(index, "index that will purged");    // optional, if you want to know the index that will purged
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

// get function
function get(property, condition) {
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










// there is data that will inputed in database
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

// there is the main code to proceed all function and data above
add([user1, user2, user3]);
get([id, name, gender], {gender: "Male"})