/*  
    Author : adon_neet
    Github : https://github.com/AdonNeet
    Date   : M6/D5/Y2023 (created)

*/

const order = [];
const database = [];

// var to string, to get the name of variable
const varToStr = varObj => Object.keys(varObj)[0];

// add function
function add(data) {
    database.push(varToStr(data));  // obj orientated sequence
    database.push(data);    
}

// get function
function get(data) {
    // get the index of object
    const index = order.indexOf(data);
    // get all data, i think the output promises such as a table

}

// update function
function update(property=null, values=null) {
    // update property (known as data), i think it must can update many property in there :D
    if(property != null && values != null) {
        ;
    }
}

// delete function, to delete user in database
function remove(data) {
    // get the index of object
    const index = order.indexOf(data);
    // remove object with splice()
    if (index > -1) {
        order.splice(index, 1);
        database.splice(index, 1);
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