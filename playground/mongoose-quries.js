const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var user_id = '5bbb50771f7fb50364a19549'

User.findById(user_id).then((user) => {
    if (!user) {
        return console.log('Id not found')
    }
    console.log('User By Id', JSON.stringify(user));
}).catch((e) => console.log(e));


// var id = '5bbc830cd276820d24fc4d23'

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {

//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

