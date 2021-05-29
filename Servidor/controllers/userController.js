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
