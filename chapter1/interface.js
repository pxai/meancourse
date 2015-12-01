//var db = require('./connect');
/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  db.collection('movies').insert(doc, callback);
  // TODO: implement
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) { 
  var ar = db.collection('movies').find({'director':director}).sort([['title',-1]]).toArray(callback(err, items));
  	  callback(err, []);

  });
  // TODO: implement
};
