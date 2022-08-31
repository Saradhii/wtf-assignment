const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const Router = require("express");
const crypto = require("node:crypto");
const UserRoute = Router();


//User signup
UserRoute.post("/signup",(req,res)=>{
    const {first_name,last_name,email,mobile,password,role,status}=req.body;
    const hash = crypto.pbkdf2Sync(password,"SECRETSALT",60,64,"sha256").toString("hex");
    const user = new User({first_name,last_name,email,mobile,hash,role,status});
    user.save().then(()=>{
        res.status(200).send({message:"Account successfully created"});
    });
})


//User login
UserRoute.post("/signin",async(req,res)=>{
    const {email , password, role} = req.body;
    const user = await User.findOne({email});
    const hash = crypto.pbkdf2Sync(password,"SECRETSALT",60,64,"sha256").toString("hex");
    if(hash !== user?.hash)
    {
        return res.status(501).send({message:"invalid cresentials"});
    }
    else if(user.role != role)
    {
        return res.status(501).send({message:"Not autherized"});
    }
    const token = jwt.sign({name:user?.name, id:user?._id},'SECRET1234',{expiresIn: "30d"},);
    res.status(200).send({message: 'Logged in successfully',token,user});
});

// Send user details by jwt token id
UserRoute.get("/UserProfile",async(req,res)=>{
    const token = req.headers["authorization"].split(" ")[1];
    if(!token){
        return res.send("forbiden");
    }
    try{
        const decoded = jwt.verify(token,"SECRET1234");
        console.log("Decode",decoded);
        if(decoded){
            const user = await User.findById(decoded.id);
            return res.status(200).send(user);
        }
        return res.status(401).send("Forbiden")
    } catch(e){
        console.log("err",e.message);
        return res.status(401).send('Forbiden');
    }

});



//Getting all the users by filtering query params [name,email,mobile,status,role]
UserRoute.get("/search", async (req, res) => {
    const { title } = req.query;
    console.log(title)
    const user = await Product.find({ $text: { $search: title } });
    if (pr <= 0) {
      res.status(401).send("No Result");
    }
     else {
      res.status(200).send(user);
    }
  });

module.exports=UserRoute;