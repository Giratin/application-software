class User {
    constructor(firstName, lastName, age, email){
        this.id = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        //this.ref = null;
    }
}

module.exports = { User }