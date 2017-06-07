const {ObjectID}=require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const{User}=require('./../server/models/user');

var imail="sebberamsay@hotmail.com";

User.find({
  email: imail
}).then((user)=>{
  console.log('User',user);
});

/*var id="5936f69e8bd424bc29ee556f";

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by ID',todo);
}).catch((e)=>console.console.log(e));*/
