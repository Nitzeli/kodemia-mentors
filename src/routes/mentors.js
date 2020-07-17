// crearemos router de app

const express = require ('express')

const router = express.Router ( )

const mentors = require ('../usecases/mentors')

router.get ('/', async (request, response) => {

    try {
        const allMentors = await mentors.getAll ()

        response.json ({
            success: true,
            data:{
                mentors: allMentors
            }
        })
    } catch (error) {
        response.status (error.status || 400)
        response.json ({
            success:false,
            error: error.message
        })
    }

})

router.post('/',async (request, response)=>{
    try {
        const newMentorsData = request.body
        console.log (newMentorsData)
        const newMentor = await mentors.create(newMentorsData)
        response.json({
            success:true,
            data: {
                newMentor
            }
        })
        
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message 
        })
    }

})

module.exports = router