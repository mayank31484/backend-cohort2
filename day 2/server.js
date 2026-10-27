const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("this is the default page")
})

app.get("/about", function (req, res) {
    res.send("This is about page")
})
app.get("/home" , (req,res)=> {
    res.send( "this is a home page asnd its updated live")
})
app.listen(3000, ()=>{
    console.log("this server is running again in port 3000")
})