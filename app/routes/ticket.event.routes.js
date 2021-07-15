module.exports = app => {
  

  //const customers = require("../controllers/customer.controller.js");

  // Retrieve a single Customer with customerId
  app.get("/ticketEvents:tikcetId", customers.findOne);
 }