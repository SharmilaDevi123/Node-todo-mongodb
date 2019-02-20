const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c6d1aab27c96e4ea4fdc210')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   return console.log('Unable to fetch docs from Todos collection', err)
  // });
db.collection('Todos').find().count().then((count) => {
  console.log(`Todos Count: ${count}`);
}, (err) => {
  console.log('Unable to count',err);
})

});
