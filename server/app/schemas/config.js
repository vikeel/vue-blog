var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId;

var ConfigSchema = new Schema({
    	title: String,
    	keywords: String,
    	description: String,
    	about: String,
    	isReg: Boolean
    });


ConfigSchema.statics = {
  findAll: function(cb) {
  	return this.find().exec(cb); 
  },
  findById: function(id, cb) {
  	return this.findOne({_id: id}).exec(cb);
  }
}

module.exports = ConfigSchema;