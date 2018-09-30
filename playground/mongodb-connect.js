// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo.', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    //insert new doc into Users collection (name, ag, location)
    // const db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Rodney',
    //     location: 'Coral Springs, FL',
    //     age: 59
    // }, (err, result) => {
    //     if (err) {
    //         client.close();
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(`New user inserted! ${JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4)}`);
    // });

    // client.close();
});
