// Controller here
// complete building out the controller
// var Product = require('../db/')
var helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => { 
    helpers.getProductsHelper().then((data) => {
      res.status(200).send(data) 
    })
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = controller