const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://admin:admin@cluster0.4b2eg.mongodb.net/itemDB?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    Name:String,
    Year:String,
    Thumbnail:String
});


var ItemModel = mongoose.model("items", itemSchema);
app.get('/', (req, res) =>
    res.send('Welcome to Data Representation & Querying'))


app.get('/api/items', (req, res) => {
    
    ItemModel.find((err, data) =>{
        res.json(data);
    })
  
})
app.get('/api/items/:id', (req, res) => {
    

    ItemModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
  
})

app.put("/api/items/:id", function (req, res){
    ItemModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
        function(err, data){
        res.send(data);
        })
})

app.delete('/api/items/:id', (req, res)=>{
    ItemModel.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

app.post('/api/items', (req, res)=>{
ItemModel.create({
    Name: req.body.Name,
    Year: req.body.Year,
    Thumbnail: req.body.Thumbnail
    
})
})

app.listen(port, () =>
    console.log('Example app listening on port http://localhost:${port}!'))
