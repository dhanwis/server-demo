const mongoose = require('mongoose'); 


mongoose.connect('mongodb+srv://dhanwisproduction:n6JXmIbnpCcMHlfY@cluster0.yvopgbr.mongodb.net/',{dbName:"demo"}); 

const userSchema = new mongoose.Schema({ 
	email: { 
		type: String, 
		require: true,
        
	}, 
	
    password:{type:String, require:true}
}) 

const User = new mongoose.model("user", userSchema);

module.exports = User;
