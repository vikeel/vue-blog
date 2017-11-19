var User = require('../models/user');
var crypto = require('crypto');

// user page

exports.reg = function(req, res) {
	var userName = req.body.username,
		userPwd = req.body.password,
		rePwd = req.body.repassword;
	if(rePwd != userPwd) {
		return res.redirect('back');
	}
	var md5 = crypto.createHash('md5'),
		pwd = md5.update(userPwd).digest('hex');
	newUser = new User({
		name: userName,
		password: pwd
	});
	// 检查用户是否存在
	User.findById(newUser.name, function(err, user) {
      if(err) {
        console.log(err);
      }
      if(user) {
        res.json({
          status: '1',
          result: 'Fail!'
        })
      }else {  // 如果用户不存在则新增用户
	    newUser.save(function(err, user) {
	      if(err) {
	        console.log(err);
	      }
	      req.session.user = newUser;
	      res.json({
	      	status: '0',
	      	result: user
	      });
	    });
      }
  });
}

exports.login = function(req, res) {
	var name = req.body.name,
		userPwd = req.body.pwd;
	var md5 = crypto.createHash('md5'),
		pwd = md5.update(userPwd).digest('hex');
	User.findById(name, function(err, user) {
		if(err) {
			console.log(err);
		}
		if(user && (user.password == pwd)) {
		  req.session.user = user;
	      res.json({
	        status: '0',
	        result: user
	      })
		}else {
		  res.json({
		  	status: '1',
		  	result: ''
		  })
		}
	});
}

exports.logout = function(req, res) {
	delete req.session.user;
	res.json({
	  status: '0',
	  result: ''
	})
}

exports.checkLogin = function(req, res) {
	var user = req.session.user
	if(user) {
		res.json({
		  status: '0',
		  result: user
		})
	}else {
	  res.json({
	  	status: '1',
	  	result: ''
	  })
	}
}

exports.userList = function(req, res) {
	User.findAll(function(err, users) {
		if(err) {
			console.log(err);
		}
		res.render('userlist', {
			title: '用户列表',
			users: users
		});
	});
}

// middleware for user


// exports.adminRequired = function(req, res, next) {
// 	var user = req.session.user;
// 	if(user.role >= 8) {
// 		return res.redirect('/per_system/login');
// 	}
// 	next();
// }