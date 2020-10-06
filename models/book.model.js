

var Book = function(id,title,nbrepage,image,description,date,auteurs, categories){
    this.id = id;
    this.title = title;
    this.nbrepage = nbrepage;
    this.image = image;
    this.description = description;
    this.date= date;
    this.auteurs = auteurs;
    this.categories = categories;
}

Book.fromJson = function (book) {
    return new Book(
        book.id,
        book.title,
        book.pageCount,
        book.thumbnailUrl,
        book.longDescription || "" ,
        new Date(book.publishedDate.date),
        book.authors.join(" - "),
        book.categories.join(" - "),
    );
}

module.exports = { Book}