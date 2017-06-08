const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var password='123abc!';

/*bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  });
});*/

var hp='$2a$10$mKkLgBWQLomsQ4vL5Xkx8eqe9GMNRYOeFzjlOaGp0L/9PrCMK/rkm';

bcrypt.compare(password,hp, (err,res)=>{
  console.log(res);
});





/*
var data = {
  id:4
};
var token = jwt.sign(data,'123abc');
console.log(token);
//jwt.verify

var message = 'I am user number 3';
var hash=SHA256(message).toString();

console.log(message);
console.log(hash);


var data={
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data)+ 'somesecret').toString()
}

token.data.id=5;
token.hash=SHA256(JSON.stringify(token.data)).toString();

var resultHash=SHA256(JSON.stringify(token.data)+ 'somesecret').toString();

if(resultHash===token.hash){
  console.log('Data was not changed');
}else{
  console.log('Data was changed. Dont trust');
}*/
