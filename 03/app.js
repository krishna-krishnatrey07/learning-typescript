"use strict";
function getuserdata(obj) {
    console.log(`Name: ${obj.name}`);
    console.log(`Age: ${obj.age}`);
    console.log(`Email: ${obj.email}`);
    console.log(`Is Admin: ${obj.isAdmin}`);
}
const user1 = {
    name: "John Doe",
    age: 30,
    email: "johndoe.example.com",
    isAdmin: true
};
getuserdata(user1);
