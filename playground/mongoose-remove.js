const {ObjectID}=require('mongodb');

const {mongoose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const{User}=require('./../server/models/user');

//Todo.remove

Todo.findOneAndRemove("5937cea9b715433530300811").then((todo)=>{
  console.log(todo)
});
