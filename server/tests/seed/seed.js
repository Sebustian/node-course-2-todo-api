const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId=new ObjectID();
const userTwo = new ObjectID();
const users=[{
  _id: userOneId,
  email:'andrew@exale.com',
  password:'userOnePass',
  tokens:[{
    access:'auth',
    token: jwt.sign({_id:userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
},{
  _id:userTwo,
  email:'sebustian@hoo.com',
  password:'userTwoPass',
  tokens:[{
    access:'auth',
    token: jwt.sign({_id:userTwo, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}];
const todos = [{
  _id: new ObjectID(),
  text:'Firt test todo',
  _creator: userOneId
},{
  _id: new ObjectID(),
  text: 'Second test todo',
  completed:true,
  completedAt: 333,
  _creator:userTwo
}];

const populateTodos=(done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
};

const populateUsers = (done)=>{
User.remove({}).then(()=>{
var userOne= new User(users[0]).save();
var userTwo = new User(users[1]).save();

return Promise.all([userOne,userTwo])

}).then(()=>done());
};


module.exports={todos,populateTodos,users,populateUsers};
