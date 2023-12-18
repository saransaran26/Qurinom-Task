import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  email: String,
});

const Data = mongoose.model("Data", DataSchema);

export default Data;
