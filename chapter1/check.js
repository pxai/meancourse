var connect = require('./connect');
var db;

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
function byDirector (db, director, callback) { 
  db.collection('movies').find({'director':director},{},{sort: {'title':-1}}).toArray(callback);
  // TODO: implement
  callback(null, []);
};

connect(function(error, conn) {
      if (error) {
        return done(error);
      }
      console.log('connected');
      db = conn;

	byDirector(db,'George Lucas', function (err, docs) {
		 if (docs.length > 0) {
		 	console.log('Documents found');
		 }
		 docs.forEach(function(doc) {
	        console.log(doc);
	      });
	});
});
