"use strict";
class device {
    name = "Smartphone";
    brand = "lg";
    price = 999.99;
    type = "Electronics";
}
let d1 = new device();
class HumanMaker {
    name;
    email;
    isAdmin;
    age = 0;
    constructor(name, email, isAdmin) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}
let h1 = new HumanMaker("Alice", "alice@example.com", true);
