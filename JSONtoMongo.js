'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var listingData;
var db = config.db;
/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
mongoose.connect(config.db.uri, {useNewUrlParser: true});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  
  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
//read in listings file 
fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;
  listingData = JSON.parse(data);
  //console.log(listingData.entries[0]);
  // for (var listing in listingData) {
  //   console.log(listingData[listing] + "\n\n\n");
  // }
  // create variable to hold ListingModel
  
  listingData.entries.forEach(function(listing) {
    var newListing = new Listing(listing);
    newListing.save();
  })
});


/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */