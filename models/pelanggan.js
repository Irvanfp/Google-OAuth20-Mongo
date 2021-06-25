const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const pelangganSchema = mongoose.Schema(
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

pelangganSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("pelanggan", pelangganSchema, "pelanggan");
