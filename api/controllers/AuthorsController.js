/**
 * AuthorsController
 *
 * @description :: Server-side logic for managing authors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
getAuthors: function(req, res) {
            authorsService.getAuthors(function(authors) {
                res.json(authors);
                });
          },
addAuthor: function(req, res) {
           var authorVal = (req.body.value) ? req.body.value : undefined;
             authorsService.addAuthor(authorVal, function(success) {
                 res.json(success);
                 });
         },
removeAuthor: function(req, res) {
              var authorVal = (req.body.value) ? req.body.value : undefined;
              authorsService.removeAuthor(authorVal, function(success) {
                    res.json(success);
                  });
            }

};

