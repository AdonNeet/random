/* 
 
    Author : adon_neet
    Github : https://github.com/AdonNeet/Random/blob/main/javascript/FOSSCLASS/day3/db_work.js
    Date   : M6/D5/Y2023 (created)

*/

const database = [];

// var to string, to get the name key of array, it also can get used in object orientated (to get the key name of property)
const varToStr = varObj => Object.keys(varObj)[0];

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
    }
}

// get function
function get(data, condition) {
    // get the index of object, with the condition
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
    // get all data that want to stdout, i think the output promises such as a table

}

// update function
function update(values, condition) {
    // get the index of object, with the condition
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
    // update property (known as subdata), i think it must can update many property in there :D

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