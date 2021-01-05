class Book{
    constructor(author, published){
        this.author = author;
        this.published = published;
    }
}

class Author{
    constructor(){
        const details = {
            name: "Harry Porter",
            books: "Fiction"
        }
    }

}


class Publisher{
    constructor(){
        const details = {
            name: "Harry Porter",
            books: "Fiction",
            function(){
                return "I am a book"
            }

        }
    }

}

const classDeclearation = class Publisher{
    constructor(rating, user){
        this.rating = rating;
        this.user = user;
    }

}







function Book(title,author){
    this.title = title;
    this.author = author;
}

Book.prototype.getTitle = function(){
    return "Title: " + this.title;
}

Book.prototype.getTitle = function(){
    return "Author:" + this.author;
}

const b1 = new Book("Harry");
console.log(b1.getTitle('Porter'));

