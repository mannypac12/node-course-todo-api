// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // deleteMany

    // db.collection('TodoApp').deleteMany({test: "Eat lunch"}).then((result) => {
    //     console.log(result)
    // })
    // deleteOne
    // db.collection('TodoApp').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result)
    // })

    // findOneAndDelete
    // db.collection('TodoApp').findOneAndDelete({completed: false}).then((err, result) => {
    //     if (err) {
    //         return console.log('Error occurs', err)
    //     }
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({name: 'Andrew'});
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bb9e27834256f4364388668')}).then((err, results) => {
        if (err) {
            return console.log('Error occurs', err)
        }
        console.log(JSON.stringify(result, undefined, 2))
    })

    // client.close();
});


