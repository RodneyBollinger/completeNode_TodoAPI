// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    let db = client.db('TodoApp');
    // db.collection('Todos')
    //     .find({_id: new ObjectID('5bb0fbe9463c0cab17d46373')})
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 4));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todo count', err);
    //     });

    db.collection('Users')
        .find({name: 'Rodney'})
        .count()
        .then((count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch todo count', err);
        });

    // client.close();
});
