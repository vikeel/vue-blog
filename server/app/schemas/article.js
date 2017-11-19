var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId;

var ArticleSchema = new Schema({
	author: String,
	title: String,
	label: String,
	summary: String,
	content: String,
	createTime: {
	  type: Date,
	  default: Date.now()
	},
	updateTime: {
	  type: Date,
	  default: Date.now()
	}
});

ArticleSchema.pre('save', function(next) {
  if(this.isNew) {
  	this.createTime = this.updateTime = Date.now();
  }else {
  	this.updateTime = Date.now();
  }
  next();
})

ArticleSchema.statics = {
  findAll: function(cb) {
  	return this.find({}).sort('updateTime').exec(cb);
  },
  findById: function(id, cb) {
  	return this.findOne({_id: id}).exec(cb);
  }
}

module.exports = ArticleSchema;