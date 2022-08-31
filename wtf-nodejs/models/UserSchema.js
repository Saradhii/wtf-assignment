const { Schema, model} = require("mongoose");

const UserSchema = ({
   first_name:{type:String,required:true},
   last_name:{type:String,required:true},
   email:String,
   mobile : { type: Number,unique: true,required: true,min:10},
   hash:String,
   role:{
      type:String,
      enum:["admin","member","trainer"],
      required: true
   },
   status:{
      type:String,
      enum:["active","inactive"],
      required: true
   },
});

const User = model("wtfnode",UserSchema);

module.exports = User;