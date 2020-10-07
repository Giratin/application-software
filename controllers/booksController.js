const fs = require('fs');
const path = require('path');
const { Book } = require('../models/book.model');
// function(params) {} == (params) => {}

const getAll = function(req,res,next){
    fs.readFile( path.join(__dirname,"../list.json") , (err,data) =>{
        if(!err){
            //console.log("data", data.toString());
            const books = JSON.parse(data).books;

            let livres = [];
            books.forEach((el)=>{
                var book = Book.fromJson(el);
                livres.push(book);
            });


            const list = books.map((el)=>{
                return Book.fromJson(el);
            })

            res.json(list);
            //res.render('book_list', { books })
        }
    })
}

const getOneById = (req,res,next) => {
    const { bookId } = req.params;
    // const bookId = req.params.bookId
    fs.readFile( path.join(__dirname,"../list.json") , (err,data) =>{
        if(!err){
            //console.log("data", data.toString());
            const books = JSON.parse(data).books;


            const livre = books.find(function(el){
                return el.id == bookId
            })

            //console.log("book", livre)
            res.render('book', { livre })
        }
    })
}



module.exports.getAll = getAll;
module.exports.getOneById = getOneById;