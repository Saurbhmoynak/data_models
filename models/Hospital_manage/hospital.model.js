import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
    required:true
  },
  pinCode: {
    type: String,
    required:true
  },
  specializedIn: [
    {
      type:String
    }
  ]

}, { timestamps: true });

export const hospital = mongoose.model("hospital", hospitalSchema);