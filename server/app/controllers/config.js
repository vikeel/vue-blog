var Config = require('../models/config')
var _ = require('underscore');

exports.webInfo = function(req, res) {
	Config
	  .find({})
	  .exec(function(err, webinfo) {
	  	if(err) {
	  		console.log(err);
	  	}
			res.json({
			  status: '0',
			  result: webinfo
			});
	  });  
}
exports.editConfig = function(req, res) {
	var id = req.body.id
	var obj = req.body;
	var configObj = {
		title: obj.title,
		keywords: obj.keywords,
		description: obj.description,
		about: obj.about,
		isReg: obj.isReg
	};
	var _config;
	if(id) {
	  Config.findById(id, function(err, config) {
		  if(err) {
		  	console.log(err);
		  }
		  _config = _.extend(config, configObj);
		  _config.save(function(err, config) {
		  	if(err) {
		  	  console.log(err);
		  	}
		  	res.json({
		  	  status: '0',
		  	  result: 'Success!'
		  	});
		  });
	  });
	}else {
	  _config = new Config({
	  	title: configObj.title,
	  	keywords: configObj.keywords,
	  	description: configObj.description,
	  	about: configObj.about,
	  	isReg: configObj.isReg
	  });
	  _config.save(function(err, config) {
	  	if(err) {
	  		console.log(err)
	  	}
	  	res.json({
	  		status: '0',
	  		result: 'Success!'
	  	})
	  })
	}
}