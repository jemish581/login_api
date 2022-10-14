import mongoose from "mongoose";
import router from "../routes/index.js";

const user_data = mongoose.Schema({
  user_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  mobile: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default mongoose.model("userdata", user_data);
