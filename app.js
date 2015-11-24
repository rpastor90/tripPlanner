var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes'),
    mongoose = require('mongoose');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));


app.use('/', routes);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
   res.status(err.status || 500);
   console.log({error: err});
   console.log(req.path);
   res.render(
       
   );
});

app.listen(3000, function(err){
  console.log('Listening to port 3000');
});
