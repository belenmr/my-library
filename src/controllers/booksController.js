const db = require("../database/models");
const message = require('../constants/message');
const cod = require('../constants/code');

module.exports = {
    getBooks: async function(req, res){
        try {
            let books = await db.Book.findAll();

            res.json(books);    
        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }
    },

    getBook: async function(req, res){
        try {
            let book = await db.Book.findByPk(req.params.id);

            res.json(book); 
        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }
    },

    addBook: async function(req, res){
        try {
            let newBook = await db.Book.create({
                title: req.body.title,
                author: req.body.author,
                isbn: req.body.isbn,
                pages: req.body.pages,
                categoryId: req.body.categoryId,
                userId: req.body.userId,
                read: req.body.read,
                score: req.body.score,
            });

            res.json(newBook); 

        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }
    },

    updateBook: async function(req, res){
        try {
            await db.Book.update({
                title: req.body.title,
                author: req.body.author,
                isbn: req.body.isbn,
                pages: req.body.pages,
                categoryId: req.body.categoryId,
                userId: req.body.userId,
                read: req.body.read,
                score: req.body.score,
            },{
                where: {
                    id: req.params.id
                }
            });

            res.json({
                msg: message.SUCCESS
            });
            
        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }

    },

    deleteBook: async function(req, res){
        try {
            await db.Book.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.json({
                msg: message.SUCCESS
            });
            
        } catch (error) {
            console.error(message.showServerError(error));
            res.status(cod.INTERNAL_SERVER_ERROR).json({
                msg: message.INTERNAL_SERVER_ERROR
            });
        }
    }
}