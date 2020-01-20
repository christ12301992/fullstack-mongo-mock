var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => { return Product.find({}) },
  postProductsHelper: (product) => { Product.create(product) },
  updateProductHelper: (_id, product) => { Product.findOneAndUpdate(_id, product) },
  deleteProductHelper: (_id) => { Product.deleteOne(_id) }
};

module.exports = helpers;