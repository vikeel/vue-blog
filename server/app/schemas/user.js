var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: {
	  unique: true,
	  type: String
	},
	password: String,
  permission: {
    type: Number,
    default: 0
  },
  createTime: {
  	type: Date,
  	default: Date.now()
	}
});

UserSchema.pre('save', function(next) {
  this.createTime = Date.now();
  next();
});

UserSchema.statics = {
  findAll: function(cb) {
  	return this.find({}).sort('createTime').exec(cb);
  },
  findById: function(name, cb) {
  	return this.findOne({name: name}).exec(cb);
  }
}

module.exports = UserSchema;