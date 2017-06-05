//const MongoClient= require('mongodb').MongoClient;


const {MongoClient,ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  //db.close();

/*db.collection('Todos').findOneAndUpdate({
  _id : new ObjectID("593555de4ca7f7dc958300c8")
},{
  $set:{
    completed:true
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});*/

db.collection('Users').findOneAndUpdate({
  _id : new ObjectID("5935bf234ca7f7dc95832648")
},{
  $set:{
    Name:'Sebbe'

  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

});
