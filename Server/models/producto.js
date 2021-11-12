const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchame = Schema({
    idProducto: {
        type: Number,
        unique: true
    },
    descripcion: String,
    valor: Number,
    estado: String
});

module.exports = mongoose.model("producto", ProductoSchame);
