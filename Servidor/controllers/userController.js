const User = require("../models/User");


exports.createUser = async (req,res) => {
    console.log(req.body);
    try{
        let user;
        user = new User(req.body);
        
        await user.save();
        res.send(user);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    
}

exports.getUsers = async (req,res) => {
    console.log(req.body);
    try{
        const users = await User.find();
        res.json(users)
    
    }catch(error){
        console.log(error);
        res.status(500).send('HUbo un error');
    }
}


exports.updateUser = async (req,res) => {
    console.log(req.body);
    try{

        const { name, email, phone, date} = req.body;
        let user = await User.findById(req.params.id);
        
        if(!user){
            res.status(404).send('No existe el producto');
        }

        user.name = name;
        user.email = email;
        user.phone = phone;
        user.date = date;

        user = await User.findOneAndUpdate({ _id: req.params.id}, user, {new: true});

        res.json(user);

    }catch(error){
        console.log(error);
        res.status(500).send('HUbo un error');
    }
    
}


exports.getUser = async (req,res) => {
    console.log(req.body);
    try{
        let user = await User.findById(req.params.id);

        if(!user){
            res.status(404).send('No existe el usuario');
        }

        res.json(user);

    }catch(error){
        console.log(error);
        res.status(500).send('HUbo un error');
    }
}


exports.deleteUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'User eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}