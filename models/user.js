const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      set: encryptedPass,
    },
    role: {
      type: String,
      default: "user",
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

function encryptedPass(password) {
  const encryptedPass = bcrypt.hashSync(password, 10);
  return encryptedPass;
}

userSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("user", userSchema);
