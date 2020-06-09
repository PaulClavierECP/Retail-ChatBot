var mongoose = require('mongoose');
var Articulos = require('../src/models/Articulos');
var Stock = require('../src/models/Stock');

const ArticulosData = require('./ImportArticulos.json')
const StockData = require('./ImportStock.json')

const uri = "mongodb+srv://dbUser:dbUserPassword@turbodega-eagio.gcp.mongodb.net/Products?retryWrites=true&w=majority"//process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})

ArticulosData.map((articulo) => {
  let articuloSchema = new Articulos({
    codart: articulo.codart,
    uniart: articulo.uniart,
    descrip: articulo.descrip,
    valor: articulo.valor,
    resto: articulo.resto,
    unipaq: articulo.unipaq,
    unidmin: articulo.unidmin,
    peso: articulo.peso,
    codprecan: articulo.codprecan,
    codepreres: articulo.codepreres,
    factor: articulo.factor
  })

  articuloSchema.save()
})

StockData.map((stock) => {
  let stockSchema = new Stock({
    codart: stock.codart,
    descrip: stock.descrip,
    resto: stock.resto,
    peso: stock.peso,
    stock: stock.stock,
    fecha: stock.fecha
  })

  stockSchema.save()
})