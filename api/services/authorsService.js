module.exports = {
getAuthors: function(next) {
            Authors.find().exec(function(err, authors) {
                if(err) throw err;
                next(authors);
                });
          },
addAuthor: function(authorVal, next) {
           Authors.create({value: authorVal}).exec(function(err, author) {
               if(err) throw err;
               next(author);
               });
         },
removeAuthor: function(authorVal, next) {
              Authors.destroy({value: authorVal}).exec(function(err, author) {
                  if(err) throw err;
                  next(author);
                  });
            }
};
