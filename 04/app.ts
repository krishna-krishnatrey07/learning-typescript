class device {
    name = "Smartphone";
    brand = "lg";
    price = 999.99;
    type = "Electronics"; 
}

let d1 = new device();

class HumanMaker {
    age = 0;
    constructor(public name: string, public email: string, public isAdmin: boolean) {

    }
}

let h1 = new HumanMaker("Alice", "alice@example.com", true);