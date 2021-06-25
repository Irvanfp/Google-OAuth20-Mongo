const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const transaksiSchema = mongoose.Schema(
  {
    barang: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    pelanggan: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

transaksiSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("transaksi", transaksiSchema, "transaksi");