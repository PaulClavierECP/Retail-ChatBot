var mongoose = require('mongoose');
var Product = require('../models/Product');
var Articulos = require('../models/Articulos');
var Stock = require('../models/Stock');

// const uri = "mongodb+srv://dbUser:dbUserPassword@turbodega-eagio.gcp.mongodb.net/Products?retryWrites=true&w=majority"//process.env.ATLAS_URI;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("MongoDB Connected…")
// })

export const findProduct = (codart: String) => {
  return new Promise((resolve, reject) => {
    Stock.find({codart: codart})
      .then((product: unknown) => {
        resolve(product);
      })
      .catch((error: any) => {
        reject(error);
      });
  })
}

// export const findProduct = (prodName: String) => {
//   return new Promise((resolve, reject) => {
//     Product.find({name: prodName})
//       .then((product: { stock: unknown; }) => {
//         resolve(product.stock);
//       })
//       .catch((error: any) => {
//         reject(error);
//       });
//   })
// }  

// const Milk = new Product({
//  name: "milk",
//  description: "cow milk",
//  stock: 43
// })

// Milk.save()

// Product.find({name: 'apples'})
// .then((prod: any) => {console.log(prod)})