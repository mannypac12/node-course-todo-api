// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('TodoApp').find({completed: false}).toArray().then((docs) => {
    //     console.log('TodoApp'); 
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('TodoApp').find().count().then((count) => {
    //     console.log(`total count: ${count}`); 
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({name: "Brucialized"}).toArray().then((docs) => {
        console.log('Users'); 
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })


    db.collection('Users').find({name: "Brucialized"}).count().then((count) => {
        console.log(`total count: ${count}`); 
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })    

    // client.close();
});


