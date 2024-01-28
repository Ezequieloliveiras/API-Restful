const mongoose = require('mongoose') //importando o mongoose


function connect() {
    mongoose.connect('mongodb+srv://password@cluster0.bnwihwx.mongodb.net/?retryWrites=true&w=majority');

    const db = mongoose.connection

    db.once('open', () => {  //uma vez que conectar eu quero executar um callback
        console.log('Connected to database!')
    })


    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect
}