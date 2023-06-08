/* 

    Author : adon_neet
    Github : https://github.com/AdonNeet/Random/blob/main/javascript/FOSSCLASS/day3/db_work.js
    Date   : M6/D5/Y2023 (created)
    Note   : its just a basic dbms system replicate, it didnt have something like "order by", "join", and something else that complicated
    ToDo   : write the main code (to use the function) in the bottom line, or you can make it interactive in the shell, i didnt make it in that way :)
*/

const database = [];

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
    var index = [];
    var kondisi = varToStr(condition);
    const trueCount = kondisi.length;
    if (condition === NOTHING) {
        for (let i = 0;i<database.length;i++) {
            index.push(i);
        }
    } else {
        for (let i = 0;i<database.length;i++) {
            var count = 0;
            for(let j = 0;j<trueCount;j++) {
                if (Array.isArray(condition[kondisi[j]]) === true) {    // Or Statement
                    for (let k = 0;k<condition[kondisi[j]].length;k++) {
                        if(database[i][kondisi[j]].toString() === condition[kondisi[j]][k].toString()) { 
                            count++;
                        } else if(k === condition[kondisi[j]].length - 1) {
                            break;
                        } else {
                            continue;
                        }
                    }
    
                } else {
                    if(database[i][kondisi[j]].toString() === condition[kondisi[j]].toString()) {     // And statement
                        count++;
                    } else {
                        break;
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
    var index = [];
    var kondisi = varToStr(condition);
    const trueCount = kondisi.length;
    if (condition === NOTHING) {
        for (let i = 0;i<database.length;i++) {
            index.push(i);
        }
    } else {
        for (let i = 0;i<database.length;i++) {
            var count = 0;
            for(let j = 0;j<trueCount;j++) {
                if (Array.isArray(condition[kondisi[j]]) === true) {    // Or Statement
                    for (let k = 0;k<condition[kondisi[j]].length;k++) {
                        if(database[i][kondisi[j]].toString() === condition[kondisi[j]][k].toString()) { 
                            count++;
                        } else if(k === condition[kondisi[j]].length - 1) {
                            break;
                        } else {
                            continue;
                        }
                    }
    
                } else {
                    if(database[i][kondisi[j]].toString() === condition[kondisi[j]].toString()) {     // And statement
                        count++;
                    } else {
                        break;
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
    // console.log(index, "index that will get-ed");    // optional, if you want to know the index
    // to find a length of each column
    var headCount = property.length; 
    var lengtHead = [];     // it minim length, depend on head and value length, then add 2 or 3 space when do stdout
    var borderIdx = [];
    var lenCount = 1;
    for (let i = 0;i<headCount;i++) {
        var strLen = 0;
        for (let idx = 0;idx<index.length;idx++) {
            if (database[index[idx]][property[i]].length > strLen) {   // check the bigLen of value
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
                    rest += database[index[idx]][property[bPost]].toString();
                    // console.log(rest);  // check
                    aCount = aCount + (database[index[idx]][property[bPost]].toString()).length;
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
        console.log(""); // endline, traditional way
        console.log((index.length).toString(), "data founded in database\n");
    } else {
        console.log("\nNone data founded in database\n");
    }
}







// there is data that will inputed in database, templated condition
const user1 = {     // 0
    id: 1,
    name: "Adon",
    age: "18",
    gender: "Male",
    address: "World",
}

const user2 = {     // 1
    id: 2,
    name: "Neet",
    age: "21",
    gender: "Male",
    address: "Isekai",
}

const user3 = {     // 2
    id: 3,
    name: "Kari",
    age: "23",
    gender: "Female",
    address: "Isekai",
}

const user4 = {     // 3
    id: 4,
    name: "Weebs",
    age: "21",
    gender: "Male",
    address: "Isekai",
}

const user5 = {     // 4
    id: 5,
    name: "Basi",
    age: "21",
    gender: "Female",
    address: "Isekai",
}

// there is the main code to proceed all function and data above
add([user1, user2, user3, user4, user5]);
add({
    id: 6, 
    name: "Ran", 
    age: "25", 
    gender: "Male", 
    address: "World"
})


get([id, name, gender], NOTHING);
remove({id: range(1,2)});
get(ALL, NOTHING);
get([name, address], {id: range(5,6)});