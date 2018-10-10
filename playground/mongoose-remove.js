const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });





Todo.findByIdAndRemove('5bbe07ebdb30518585b8874c').then((todo) => {
    console.log(todo)
})