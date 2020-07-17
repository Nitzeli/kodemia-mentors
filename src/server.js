
// definición de servidor

const express = require ('express')

const app = express ()

const mentorsRouter = require ('./routes/mentors')

app.use(express.json())

app.use ('/mentors', mentorsRouter)

app.get ('/', (request, response) =>{
    response.json ({
        success: true,
        message: 'Kodemia APIv8'
    })
})

//debemos exportar app, porque quien escucha es index

module.exports = app 