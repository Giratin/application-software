const { User } = require('../models/user.model');

module.exports = {
    saveUser: async (req, res) => {
        const { name, email, age } = req.body;

        const userExist = await User.findOne({ 'email' : email });
        if(userExist){
            return res.json({ "message" : "email registred" })
        }

        const user = new User({ name,  email, age });

        await user.save();
        res.json(user); 
    },
    getUsers: async (req, res) => {
        const users = await User.find();
        res.json(users);
    },
    getUser: async (req, res) => {
        const { id } = req.params;
        const user = await User.findOne({ _id : id });
        if (!user) {
            return res.status(404).json("User Not Found");
        }
        res.json(user);
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const user = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
        // { new : true } retourne le nouveau document mis à jour
        // findByIdAndUpdate retourne null en cas où le document est introuvable
        if (!user) {
            return res.status(404).json("User Not Found");
        }

        // const user = await User.findOne({ _id : id });
        // if(!user){
        //     return res.status(404).json("User Not Found");
        // }

        // user.name = name;
        // user.email = email;
        // user.age = age;

        // await user.save();

        res.json(user);
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        const result = await User.findByIdAndRemove({ _id: id });
        // findByIdAndRemove retourne null en cas où le document est introuvable
        res.json(result);
    },
}