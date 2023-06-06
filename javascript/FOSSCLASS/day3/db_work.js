/*  
    Author : adon_neet
    Github : https://github.com/AdonNeet/Random/blob/main/javascript/FOSSCLASS/day3/db_work.js
    Date   : M6/D5/Y2023 (created)

*/

const database = [];

// var to string, to get the name of variable, it also can get used in object orientated
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

// get function
function get(data, condition) {
    // get the index of object, with the condition
    const propName = varToStr(condition);
    //var index = Data.map(function(e) { return e.name; }).indexOf('Nick');
    // get all data, i think the output promises such as a table
    // Object.values(object);

}

// update function
function update(values, condition) {
    // get the index of object, with the condition

    // update property (known as subdata), i think it must can update many property in there :D
    // now check the type data, if array do some looping
    if(Array.isArray(values) === true ) {
        for (value in values) {
            const asset = varToStr(value);
            // now, update the property :D, do not use eval in the future
            eval(`data[index].${asset} = value`);
        }
    } else {
        eval(`data[index].${asset} = value`);
    }
}

// delete function, to delete user in database
function remove(condition) {
    // get the index of object, with condition
    
    // remove object with splice()
    
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