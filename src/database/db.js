const mongoose = require('mongoose') //importando o mongoose


function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/api-restful?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6');

    const db = mongoose.connection

    db.once('open', () => {  //uma vez que conectar eu quero executar um callback
        console.log('Connected to database!')
    })


    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect
}