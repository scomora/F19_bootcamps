//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://bootcamp-user:cen3031@cen3031-course-lofjs.mongodb.net/test?retryWrites=true&w=majority'
  },
  openCage: {
    key: '735a4fe19315438cb2a5666835e63cd5' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};