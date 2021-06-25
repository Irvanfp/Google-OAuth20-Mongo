const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const barangSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    pemasok: {
      type: mongoose.Schema.ObjectId,
      ref: "pemasok",
      required: true,
    },
    image: {
      type: String,
      default: null,
      required: false,
      get: getImage,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: { getters: true },
  }
);

function getImage(image) {
  return `/images/${image}`;
}

barangSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("barang", barangSchema, "barang");
