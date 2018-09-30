// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    let db = client.db('TodoApp');
    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         {_id: new ObjectID('5bb11fa3463c0cab17d46929')},
    //         {$set: {completed: true}},
    //         {returnOriginal: false})
    //     .then((result) => {
    //         console.log(`Result: ${JSON.stringify(result, undefined, 4)}`);
    //     }, (err) => {
    //         console.log('Unable to delete todo', err);
    // });

    db.collection('Users')
        .findOneAndUpdate(
            {_id: new ObjectID('5bb0446a9846d6134603debe')},
            {$inc: {age: 1}},
            {returnOriginal: false})
        .then((result) => {
            console.log(`Result: ${JSON.stringify(result, undefined, 4)}`);
        }, (err) => {
            console.log('Unable to delete todo', err);
    });

    // client.close();
});
