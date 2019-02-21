const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c6d1c69ab167a1c5c26a668')}, {
    $set:
  {
    name: 'SharmilaDevi'
  },
  $inc:
  {
    age: 1
  }
}, {returnOriginal: false}
).then((result) => {
  console.log(result);
});

});
