var express = require('express');
var bodyParser=require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var{Todo}=require('./models/todo.js');
var{User}=require('./models/user.js');

const {ObjectID}=require('mongodb');

var app = express ();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  })
todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
res.status(400).send(e);
});
});

app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
  return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    return res.send({todo});
  }, (e)=>{
    return res.status(400).send(e);
  });
});

app.listen(3000,()=>{
  console.log('Started on port 3000')
});

module.exports={app};