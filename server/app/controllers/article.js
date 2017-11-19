var Article = require('../models/article');
var _ = require('underscore');

// article page
exports.articleList = function(req, res) {
    var index = req.query.p  //当前页数
    var total = Number(req.query.t)  //每页显示数量
    var page = index * total  //需要跳过数量
	Article
	  .find({})
	  .sort({"_id":-1})
	  .limit(total).skip(page)
	  .exec(function(err, articles) {
	  	if(err) {
	  		console.log(err);
	  	}
		res.json({
		  status: '0',
		  result: articles
		});
	  });  
}
exports.search = function(req, res) {
	var key = req.query.k
	Article.find({title:{$regex:key}})
	  .sort({"_id":-1})
	  .exec(function(err, articles) {
		  if(err) {
		  	console.log(err)
		  }
		  res.json({
		  	status: '0',
		  	result: articles
		  });
	});
}
exports.detail = function(req, res) {
	var id = req.params.id;
	Article.findById(id, function(err, article) {
	  if(err) {
	  	console.log(err);
	  }
	  res.json({
	  	status: '0',
	  	result: article
	  });
	});
}

exports.editArticle = function(req, res) {
	var id = req.body.id
	var obj = req.body;
	var articleObj = {
			author: obj.author,
			title: obj.title,
			label: obj.label,
			content: obj.content
	};
	var _article;
	if(id) {
	  Article.findById(id, function(err, article) {
	  	if(err) {
	  	  console.log(err);
	  	}
	  	_article = _.extend(article, articleObj);
	  	_article.save(function(err, article) {
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
	  _article = new Article({
	  	author: articleObj.author,
	  	title: articleObj.title,
	  	label: articleObj.label,
	  	content: articleObj.content
	  });
	  _article.save(function(err, article) {
	  	if(err) {
	  	  console.log(err);
	  	}else {
	  	  res.json({
	  	    status: '0',
	  	    result: 'Success!'
	  	  })
	  	}
	  });
	}
}
exports.del = function(req, res) {
	var id = req.params.id;
	if(id) {
		Article.remove({_id: id}, function(err, article) {
			if(err) {
				console.log(err);
			}
			res.json({
			  status: '0',
			  result: 'Success!'
			});
		})
	}
}