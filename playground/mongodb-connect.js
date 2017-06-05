//const MongoClient= require('mongodb').MongoClient;


const {MongoClient,ObjectID}= require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  db.close();
});
/*db.collection('Todos').insertOne({
text:'Something to do',
completed:false
},(err,result)=>{
  if(err){
    return console.log('Unable to insert todo', err);
  }

  console.log(JSON.stringify(result.ops,undefined , 2));
});
db.collection('Users').insertOne({
  name:'Sebastian',
  age:25,
  location:'SF'
},(err,result)=>{
  if(err){
    return console.log('Unable to insert to users', err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

  db.close();
});
*/
