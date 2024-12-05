const { model, Schema } = require("mongoose");

let userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true,'password must be a string ']
    },
    password: {
      type: String,
      required: [true,'password must be a string ']
    }
  },
  { timestamps: true }
);


module.exports = model("user", userSchema);
