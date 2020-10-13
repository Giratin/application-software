const {User} = require('../models/user');

var users = [
    {
        "id": 1,
        "firstName": "foulen",
        "lastName": "benFoulen",
        "age": 23,
        "email": "foulen.benfoulen@esprit.tn"
    }
];

function uniqueEmail(email) {
    if(users.length > 0){
        let userExist = users.find((user)=>{
            return user.email == email;
        })

        if(userExist){
            return true;
        }
        return false;
    }
    return false;
}


module.exports = {
    createUser : (req,res) => {
        var {firstName} = req.body;
        var lastName = req.body.lastName;
        var age = req.body.age;
        var email = req.body.email;

        if(!email || !firstName || !lastName || !age){
            return res.json({ error : "All fields are required!" })
        }

        if(uniqueEmail(email)){
            return res.json({ error : "Email already exist" })
        }
        
        let user = new User(firstName,lastName,age,email);
        user.id= users.length +1;
        //user.ref = users[users.length -1];
        users.push(user);
        res.json(users)
    },
    updateUser : async (req,res)=> {

        const id = +req.params.id;

        let user = users.find(function(element) {
            return element.id === id;
        });


        if(!user){
            return res.status(404).json({ error : "User not found", id : id});
        }

        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var age = req.body.age;
        var email = req.body.email;

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;

        res.json(user);
    },
    deleteUser : async (req,res) =>{
        const id = req.params.id;
        let position = -1;
        let user = users.find(function(element,index) {
            position = index;
            return element.id == id;
        });

        if(!user){
            return res.status(404).json({ error : "User not found", id : id});
        }

        users.splice(position,1);
        res.json(users)
    },
    findAll: async (req,res)=>{
        res.json(users)
    },
    findOneById : async (req,res)=>{
        const id = req.params.id;
        let user = users.find(function(element,index) {
            return element.id == id;
        });

        if(!user){
            return res.status(404).json({ error : "User not found", id : id});
        }

        res.json(user)
    },
    findWithQueryParams : async (req,res)=>{
        //const id = req;
        
        const id = req.query.id;
        let user = users.find(function(element,index) {
            return element.id == id;
        });

        if(!user){
            return res.status(404).json({ error : "User not found", id : id});
        }

        res.json(user)
    }
}