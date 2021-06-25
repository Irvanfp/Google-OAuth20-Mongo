const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const pemasokSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: null,
      required: false,
      get: getPhoto,
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

function getPhoto(photo) {
  return `/images/${photo}`;
}

pemasokSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("pemasok", pemasokSchema, "pemasok");
