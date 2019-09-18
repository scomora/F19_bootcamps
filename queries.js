/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var listingData;
var db = config.db;
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({"name": "Library West"}, (err, data) => {
    console.log(data);
  });
  
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.find({"code": "CABL"}, (err, data) => {
    console.log(data);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var query = {"name": "Phelps Laboratory" };
  var newData = { "address": "1953 Museum Rd, Gainesville, FL 32603" };
  Listing.findOneAndUpdate(query, newData, (err, data) => {
    console.log(data);
  });
  //console.log(
    //Listing.find({
      //code: "PHL"
    //})
  //)
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, (err, data) => {
    console.log(data);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
