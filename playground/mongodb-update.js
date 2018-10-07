// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('TodoApp').findOneAndUpdate({
    //     _id: new ObjectID('5bb9f03581191f86987ca046')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrginal: false
    // }).then((err, result) => {
    //     if (err) {
    //         return console.log('Error Occured', err)
    //     }
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bb9e0a1c5291739f4f4481a")
    }, {
        $set: {
            name: "Bruce"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOrginal: false
    }).then((err, result) => {
        if (err) {
            return console.log('Error Occured', err)
        } else {
            console.log(result);
        }
        
    })
    
    // client.close();
});


