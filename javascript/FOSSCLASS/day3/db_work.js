const order = [];
const database = [];

// var to string
const varToStr = varObj => Object.keys(varObj)[0];

// add function
function add(data) {
    database.push(varToStr(data));  // obj orientated sequence
    database.push(data);    
}

// get function
function get(data) {
    for (obj in order) {
        if (data === obj) {
            // get index

            // get all data, i think the output want to be like in squirel

        }
    }
}

// update function
function update(/* what dou you want update? */) {
    ;
}

// delete function, to delete user in database
function remove(data) {
    ;
}






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