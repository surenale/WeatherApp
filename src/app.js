const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// public static path joining src and public file
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));


// routing methods
app.get("/",(req,res) => {
    res.send("welcome to suren ale channel");
})

app.get("/about",(req,res) => {
    res.send("welcome to about page");
})

app.get("/weather",(req,res) => {
    res.send("welcome to weather forcast page");
})

app.get("*",(req,res) => {
    res.send("404 error page oops");
})

app.listen(port, function(){ 
    console.log(`listening to port at ${port}`);
})