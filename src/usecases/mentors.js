
// caso de uso que representa al mentor

const Mentors = require ('../models/mentor')

function getAll ( ) {
    return Mentors.find ()
}

function create(mentorData){
    return Mentors.create(mentorData)
}

module.exports = {
    getAll, 
    create
}