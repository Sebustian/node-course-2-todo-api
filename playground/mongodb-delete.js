//const MongoClient= require('mongodb').MongoClient;


const {MongoClient,ObjectID}= require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  //db.close();

//deletemany
/*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  console.log(result);
});

//deleteone
db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  console.log(result);
});

//findandDelete

db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});*/

db.collection('Users').findOneAndDelete({
  _id:new ObjectID("5935508eef1d23215cd053ca")})
  .then((result)=>{
  console.log(result);
});
});
