import mongoose from "mongoose";

//we can also build mini schema model
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  quantity: {
    type: Number,
    required: true
  }
})

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required:true
    },
    customer:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    orderItems: {
      type:[orderItemSchema]
    },
    address: {
      type: String,
      required: true,
    },
    status:{
      type: String,
      enum: ["Pending", "Cancelled", "Delivered"], //enum means option
      default: "Pending"
    }
  }, { timestamps: true });

export const order = mongoose.model("order", orderSchema);