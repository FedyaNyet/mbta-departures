var express = require('express'),
	router = express.Router();

//serve npm scripts with the script path.
router.use('/script', express.static(__dirname + '/../node_modules/'));
router.use('/assets', express.static(__dirname + '/../public/assets/'));

//display schedules on homepage
router.get('/', function (req, res) {

	var request = require('request'),
		url= 'http://developer.mbta.com/lib/gtrtfs/Departures.csv',
		parse = require('csv-parse/lib/sync');

	//csv local proxy 
	request(url, function (error, response, body) {
		if (error) {
			console.log("ERROR",error);
  			res.render('destinations.html',{error:true});
  			return;
		}

		//parse the fetched csv to json
		var records = parse(body, {columns: true});

		//render the destinations.html file and pass it the parsed records
  		res.render('destinations.html',{schedules:records});
	});

});

module.exports = router;