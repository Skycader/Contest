var fs = require('fs');
var Library = /** @class */ (function () {
    function Library(fileName) {
        this.file = ""; /* text data from file */
        this.csv = []; /* csv array */
        this.library = {}; /* Object with authors as keys, books as values */
        this.renderedBooks = {};
        try {
            this.file = fs.readFileSync(fileName, "utf8");
        }
        catch (e) {
            throw new Error(e);
        }
        this.csv = this.file
            .split("\n")
            .map(function (item) { return item.trim(); })
            .filter(function (item) { return (item != ""); })
            .map(function (item) { return item.split("; "); });
    }
    Library.prototype.filterByAuthors = function () {
        var library = {};
        for (var _i = 0, _a = this.csv.slice(1); _i < _a.length; _i++) {
            var item = _a[_i];
            var author = item[1];
            var bookName = item[0];
            var anno = item[2];
            if (item)
                if (!library[author])
                    library[author] = [];
            library[author].push([bookName, anno]);
        }
        this.library = library;
    };
    Library.prototype.renderBook = function (book) {
        return { "title": book[0], "description": book[1] };
    };
    Library.prototype.render = function () {
        var _this = this;
        var renderedBooks = { "authors": [] };
        for (var _i = 0, _a = Object.entries(this.library); _i < _a.length; _i++) {
            var item = _a[_i];
            renderedBooks["authors"].push({
                "author": item[0],
                "books": item[1].map(function (item) { return _this.renderBook(item); })
            });
        }
        this.renderedBooks = renderedBooks;
    };
    Library.prototype.saveToJson = function () {
        try {
            fs.writeFileSync("books.json", JSON.stringify(this.renderedBooks, null, "  "));
        }
        catch (e) {
            throw new Error(e);
        }
    };
    Object.defineProperty(Library.prototype, "lib", {
        get: function () {
            return this.library;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "rendered", {
        get: function () {
            return this.renderedBooks;
        },
        enumerable: false,
        configurable: true
    });
    return Library;
}());
var library = new Library("books.csv");
library.filterByAuthors();
library.render();
library.saveToJson();
//console.log(library.rendered)
