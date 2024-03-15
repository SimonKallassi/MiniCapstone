var Express = require("express");
const mongoose = require('mongoose');
var cors = require("cors");
const bodyParser = require("body-parser");
mongoose.set('strictQuery', false);
var app = Express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://your mongodb endpoint", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Error connecting to MongoDB:', err));


// save picture to the database on a picture data model
app.post("/save_photo", async(req,res) => {
    const datastore = req.body;


    // save to database 
    res.send(true);

})

app.listen(3001, ()=>{
   console.log("app is running on local host 3001");
})