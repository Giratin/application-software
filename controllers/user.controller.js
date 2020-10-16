const { User } = require('../models/user.model');

module.exports = {
    saveUser : async (req, res) =>{
        const { name , email , age } = req.body;

        const user = new User({
            name, 
            email, 
            age
        });

        await user.save();
        res.json(user);

    }
}