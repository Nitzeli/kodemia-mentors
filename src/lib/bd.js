
// conectar a base de datos

const mongoose = require('mongoose')

function connect (){
    return mongoose.connect (
        'mongodb+srv://Nitzeli:Paydelimon12@nitz-cluster.elywz.mongodb.net/Kodemia',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    )
}

module.exports = connect