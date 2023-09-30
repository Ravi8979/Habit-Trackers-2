const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rygbu2407:D5zloqnKXtHCoxwX@cluster0.yxm897h.mongodb.net/');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connectin DB'));

db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
}) 
module.export = db;


