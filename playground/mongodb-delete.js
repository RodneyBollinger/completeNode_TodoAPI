// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    let db = client.db('TodoApp');
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(`Result: ${result}`);
    //     }, (err) => {
    //         console.log('Unable to delete todo', err);
    // });

    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(`Result: ${result}`);
    //     }, (err) => {
    //         console.log('Unable to delete todo', err);
    // });

    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(`Result: ${JSON.stringify(result, undefined, 4)}`);
    //     }, (err) => {
    //         console.log('Unable to delete todo', err);
    // });

    db.collection('Users')
        .deleteMany({name: 'Rodney'})
        .then((result) => {
            console.log(`Result: ${result}`);
        }, (err) => {
            console.log('Unable to delete todo', err);
    });

    db.collection('Users')
        .findOneAndDelete({_id: new ObjectID('5bb0496fb653e9135906b6bd')})
        .then((result) => {
            console.log(`Result: ${result}`);
        }, (err) => {
            console.log('Unable to delete todo', err);
    });

    // client.close();
});
