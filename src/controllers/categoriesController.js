const db = require("../database/models");
const message = require('../constants/message');
const cod = require('../constants/code');

module.exports = {
    getCategories: async function(req, res){
        try {
            let categories = await db.Category.findAll();

            res.json(categories);        
        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }
    },

    getBooksByCategory: async function(req, res) {        
        try {
            console.log(req.params.name);            

            let booksByCategory = await db.Category.findAll({
                where: {
                    name: req.params.name.toLowerCase()
                },
                include: [{association: "books"}],
                
            });

            res.json(booksByCategory);
            
        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }
    }
}