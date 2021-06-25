const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoose is great success"))
  .catch((err) => console.error(err));

const barang = require("./barang");
const pelanggan = require("./pelanggan");
const pemasok = require("./pemasok");
const transaksi = require("./transaksi");
const user = require("./user");

module.exports = { barang, pelanggan, pemasok, transaksi, user };
