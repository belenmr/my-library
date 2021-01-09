const db = require("../database/models");
const message = require('../constants/message');
const cod = require('../constants/code');

module.exports = {
    getRatingScale: async function(req, res) {
        try {
            let scale = await db.RatingScale.findAll();
            
            res.json(scale);    
        } catch (error) {            
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }

    }
}