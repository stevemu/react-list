var express = require('express');
var https = require('https');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var _ = require('underscore');
var url = require('url');
var cors = require('cors');
// const passport = require('passport');

var app = express();
app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));
app.use(cors());
// app.use(passport.initialize());

// const mode = process.env.mode || 'dev'; // default is dev


// seed db for news
// require(path.resolve(__dirname, "api/lib/seed"));


// server static files
app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(express.static('./public'));


// serve api
// var apiRouter = require('./api/index');
// app.use('/api', apiRouter);

// http server
var options = {
    key: fs.readFileSync(path.resolve(__dirname, 'ssl/domain.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'ssl/domain.crt'))
};
var PORT = 443;
var server = https.createServer(options, app);
server.listen(PORT, function () {
    console.log(`server at port ${PORT}`);
});

