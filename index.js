var express = require('express'),
	app = express(),
	swig = require('swig'),
	dotenv = require('dotenv');

//add .env variables to the process object
dotenv.config({silent: true});

//setup the html templating engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/templates');

//Cache templates only in production
app.set('view cache', (process.env.NODE_ENV=="production")?"memory":false );
swig.setDefaults({ cache: (process.env.NODE_ENV=="production")?"memory":false });

//add a favicon
app.use(require('serve-favicon')(__dirname + '/public/assets/img/favicon.ico'));

//add url routing
app.use('/', require('./routes'));

//start the app
app.listen(process.env.PORT);

if(process.env.NODE_ENV == 'develope')
	console.log('http://localhost:' + process.env.PORT + "/")