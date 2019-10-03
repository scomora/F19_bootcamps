/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var listingSchema = new Schema({
  /* Your code for a schema here */ 
  //Check out - https://mongoosejs.com/docs/guide.html
  code: String,
  name: String,
  coordinates: [{
    latitude: Number,
    longitude: Number
  }],
  address: String
});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
/*********************
 *  4/4 TEST CASES PASSED
 */
listingSchema.pre('save', function(next) {
  /* your code here */
  //console.log(this);
  var currentDate = new Date();
  if (!this.get('name') | !this.get('code')) {
    //console.log("code not found");
    throw err;
  }
  else if (this.name && this.code || this.coordinates){
    if (this.isNew) {
      this.created_at = this.updated_at = currentDate;
      //console.log('CREATED NEW');
    }
    else {
      this.updated_at = currentDate;
      //console.log('UPDATED EXISTING');
    }
  }
  
  next();
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
