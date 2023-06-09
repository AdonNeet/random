/* 

    Author : adon_neet
    Github : https://github.com/AdonNeet/Random/blob/main/javascript/FOSSCLASS/day3/db_work.js
    Date   : M6/D5/Y2023 (created), M6/D9/Y2023 (stopped before deadline)
    Note   : 
        - its just a basic dbms system replicate, it didnt have something like "order by", "join", and something else that complicated
        - i didnt make a sorting object mechanism, because i didnt have time left before the deadline
        - the task is simple, but myself make it more diff by adding some feature (like Or statement, And statement, range, undefined thing, etc) :v
    ToDo   : write the main code (to use the function) in the bottom line, or you can make it interactive in the shell, i didnt make it in that way :)
*/

const database = [];    // just one database for one entity

// the default coloumn in this database
const [id, name, age, gender, address] = ['id', 'name', 'age', 'gender', 'address'];
const ALL = ['id', 'name', 'age', 'gender', 'address'];
const NOTHING = 'nothing';

// var to string, to get the name key of array, it also can get used in object orientated (to get the key name of property)
const varToStr = varObj => Object.keys(varObj);

// range function, integer nor number range purpose
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

// find index with condition
function findIndex(condition) {
    // find the index of obj with condition
    var index = [];
    var kondisi = varToStr(condition);
    const trueCount = kondisi.length;
    if (condition === NOTHING) {
        index = range(0, database.length-1);
    } else {
        for (let i = 0;i<database.length;i++) {
            var count = 0;
            for(let j = 0;j<trueCount;j++) {
                if (Array.isArray(condition[kondisi[j]]) === true) {    // Or Statement
                    for (let k = 0;k<condition[kondisi[j]].length;k++) {
                        if (condition[kondisi[j]][k] === undefined) {
                            if (database[i][kondisi[j]] === undefined) {
                                count++;
                            }
                        } else {
                            if (database[i][kondisi[j]] === undefined) {
                                continue;
                            } else {
                                if(database[i][kondisi[j]].toString() === condition[kondisi[j]][k].toString()) { 
                                    count++;
                                } else if(k === condition[kondisi[j]].length - 1) {
                                    break;
                                } else {
                                    continue;
                                }
                            }
                        }
                    }
                } else {
                    if (condition[kondisi[j]] === undefined) {
                        if (database[i][kondisi[j]] === undefined) {
                            count++;
                        }
                    } else {
                        if (database[i][kondisi[j]] === undefined) {
                            break;
                        } else {
                            if(database[i][kondisi[j]].toString() === condition[kondisi[j]].toString()) {     // And statement
                                count++;
                            } else {
                                break;
                            }
                        }
                    }
                }
                if(count === trueCount) {  // if count same with trueCount, push i to index
                    index.push(i);
                    break;
                } else {
                    continue;
                }   
            }
        }
    }
    return index;  // dont dorget to return the ans (index)
}

// add function (done, just throw them into database)
function add(data=null) {
    if (Array.isArray(data) === true) {
        for (let i = 0;i<data.length;i++){
            database.push(data[i]);
        }
        console.log((data.length).toString(), "data added in database\n");
    } else if (data ===  null) {
        console.log("Nothing added in database\n");
    } else {
        database.push(data);   
        console.log("1 data added in database\n");
    }
}

// remove function, to delete user in database (done, its killing many time to find the solution for all function main problem, that is find the index of object with the condition)
function remove(condition) {
    // find the index of obj with condition
    var index = findIndex(condition);
    // purge object with splice()
    // console.log(index, "index that will purged");    // optional, if you want to know the index
    if (index.length >= 1) {
        var count = 0;
        for (let idx = 0;idx<index.length;idx++){
            database.splice(index[idx]-count, 1);
            count = count + 1;
        }
        console.log((index.length).toString(), "data deleted in database\n");
    } else {
        console.log("None data deleted in database");
    }
}

// get function
function get(property, condition) {
    // find the index of obj with condition
    var index = findIndex(condition);
    // console.log(index, "index that will get-ed");    // optional, if you want to know the index
    // to find a length of each column
    var headCount = property.length; 
    var lengtHead = [];     // it minim length, depend on head and value length, then add 2 or 3 space when do stdout
    var borderIdx = [];
    var lenCount = 1;
    for (let i = 0;i<headCount;i++) {
        var strLen = 0;
        for (let idx = 0;idx<index.length;idx++) {
            if (database[index[idx]][property[i]] === undefined) {
                strLen = "undefined".length;
            } else {
                if ((database[index[idx]][property[i]].toString()).length > strLen) {   // check the bigLen of value
                    strLen = (database[index[idx]][property[i]].toString()).length;
                }
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
    // var to stdout the table, and the content
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
            aCount = aCount + property[bPost].length;
            bPost++;
        } else { 
            rest = rest + " ";
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
                    if (database[index[idx]][property[bPost]] === undefined) {
                        rest += "undefined";
                        aCount += "undefined".length; 
                    } else {
                        rest += database[index[idx]][property[bPost]].toString();
                        aCount += (database[index[idx]][property[bPost]].toString()).length;
                        bPost++;
                    }
                } else {
                    rest = rest + " ";
                    aCount++;
                }
                if (aCount === lenCount) {
                    console.log(rest);  // stdout content on that index
                }
            }
            rest = ''; // reset
            aCount = aPost = bPost = 0; // reset
        }
        console.log(""); // endline, traditional way
        console.log((index.length).toString(), "data founded in database\n");
    } else {
        console.log("\nNone data founded in database\n");
    }
}

// update function
function update(property, condition) {
    // find the index of obj with condition
    var index = findIndex(condition);
    // then change the value of property
    if (index.length >= 1) {
        var prop = varToStr(property);
        for (let idx = 0;idx<index.length;idx++) {
            for (let valIdx = 0;valIdx<prop.length;valIdx++) {
                database[index[idx]][prop[valIdx]] = property[prop[valIdx]];
            }
        }
        console.log((index.length).toString(), "data was changed in database\n");
    } else {
        console.log("Nothing changed");
    }
}




// there is default data that will inputed in database, templated condition
const user1 = {     // 0
    id: 1,
    name: "Adon",
    age: 18,
    gender: "Male",
    address: "World",
}

const user2 = {     // 1
    id: 2,
    name: "Neet",
    age: 21,
    gender: "Male",
    address: "Isekai",
}

const user3 = {     // 2
    id: 3,
    name: "Kari",
    age: 23,
    gender: "Female",
    address: "Isekai",
}

const user4 = {     // 3
    id: 4,
    name: "Weebs",
    age: 21,
    gender: "Male",
    address: "Isekai",
}

const user5 = {     // 4
    id: 5,
    name: "Basi",
    age: 21,
    gender: "Female",
    address: "Isekai",
}










































// there is the main code to proceed all function and data above
add([user1, user2, user3, user4, user5]); // its from templated user
add({   // intruder in id order, i didnt make a sorting system which is compare the id between object (like "order by" function in MySQL)               
    id: 1000, 
    name: "Ran", 
    age: 25, 
    gender: "Male", 
});
add([
    {
        id: 7,
        name: "KaoruSuga",
        age: 19,
        gender: "Male",
// address undefined
    },
    {
        id: 8,
        name: "Elaina",
        age: 18,
        gender: "Female",
        address: "Isekai"
    },
    {
        id: 9,
        name: "Watson Amelia",
        age: 20,
        gender: "Female",
        address: "live2d"
    },
    {
        id: 10,
        name: "Weebs",
        age: 18,
        gender: "Female",
        address: "Isekai"
    }
])


// get all information about user
get(ALL, NOTHING);

// then we remove the intruder, i didnt make the dynamicSort to sort tha array of object :D
remove({id: 1000});
get(ALL, NOTHING);

// then Weebs (male) turn out into 22 today
update({age: 22}, {name: "Weebs", gender: "Male"});
get([name, age], {name: "Weebs", gender: "Male"});

// i want know the name someone that she is 18 to 21
get([name, age], {gender: "Female", age: range(18,21)});

// i want know the name of someone that is Female, in live2d
get([name], {address: "live2d"});

// they all from undefined, isekai, and live2d become real :v
update({address: "World"}, {address: [undefined, "Isekai", "live2d"]});
get(ALL, {address: "World"});