const express = require('express');
const app = express();
var pg = require('pg');


app.use(express.logger());
app.use(bodyParser.json());


// app.listen(4000, function() {
//   console.log('listening on 4000')
// })


app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});
