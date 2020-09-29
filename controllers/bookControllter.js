const fs = require('fs');
const path = require('path');

var list = function(req,res){
    fs.readFile(path.join(__dirname , "../list.json"),function(error,data){
        if(!error){
            const list = JSON.parse(data);
            console.log("content", list);
            res.render('list', { books : list.books });
        }
    })

};

var getOneById = function(req,res){
    const id = req.params.bookId;
    fs.readFile(path.join(__dirname , "../list.json"),function(error,data){
        if(!error){
            const list = JSON.parse(data).books;
            
            const book = list.find(function(element){
                return element.id == id;
            });

            res.render('detail', { book : book });
        }
    })
}


module.exports.list = list;
module.exports.getOneById = getOneById;