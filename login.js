const User = require("./model");

 

module.exports = {

    login : (req,res)=>{
         
        const {email,password} = req.body;

        console.log(req.body)

        let a  = new User({email:email,password:password});

        a.save();
    }
}

