const db = require('../database/models')

const checkEmail = async (req,res) => {
    try {
        if(!req.query.email){
            let error = new Error('Falta el EMAIL')
            error.status = 400
            throw error
        }

        const user = await db.User.findOne({
            where : {
                email : req.query.email
            }
        })

        return res.status(200).json({
            ok : true,
            data : user ? true : false
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'ERROR ERROR ERROR'
        })
    }
}

module.exports = {
    checkEmail
}