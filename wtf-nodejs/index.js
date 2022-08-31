const connection = require("./db/db");
const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");

// App creation
const app = express();
//Needed middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );
app.use("/user",UserRoute);

//testing
app.get("/",(req,res)=>{
  res.send("wtf node working....");
})

// starting the server && checking db connection
const PORT = process.env.PORT || 8060
app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Connected to Database Successfully &");
    } catch (err) {
      console.log(err);
    }
    console.log("Backend is working at http://localhost:8060");
});

