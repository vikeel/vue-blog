var Article = require('../app/controllers/article');
var User = require('../app/controllers/user');
var Config = require('../app/controllers/config');

module.exports = function(app) {

	// article router
	app.get('/api', Article.articleList);
	app.get('/api/search', Article.search);
	app.get('/api/:id', Article.detail);
	app.post('/api/editArticle', Article.editArticle);
	app.delete('/api/del/:id', Article.del);

	// user router
	app.post('/api/reg', User.reg);
	app.post('/api/login', User.login);
	app.get('/checklogin', User.checkLogin);
	app.post('/api/logout', User.logout);

	// config router
	app.get('/webinfo', Config.webInfo);
	app.post('/api/editConfig', Config.editConfig);

}

