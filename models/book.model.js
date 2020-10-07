const Book = function (jid, title, nbrepage, image, description, date, auteurs, categories) {
    this.id = jid;
    this.title = title;
    this.pageCount = nbrepage;
    this.image = image;
    this.description = description;
    this.date = date;
    this.auteurs = auteurs;
    this.categories = categories;
}

Book.fromJson = function(json){
    return new Book(
        json.id,
        json["title"],
        json.pageCount,
        json.thumbnailUrl,
        json.longDescription,
        +new Date(json.publishedDate.date),
        json.authors.join(" - "),
        json.categories.join(" - "),
    );
};

module.exports = { Book  };