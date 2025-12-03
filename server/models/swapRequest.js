import mongoose from "mongoose";

const swapRequestschema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  requesterSkill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill",
    required: true,
  },
  recipientSkill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill",
    required: true,
  },
  status: {
    type: String,
    reuired: true,
    enum: ["Pending", "Accepted", "Rejected", "Completed"],
    default: "Pending",
  },
  message: { type: String, default: "" },
},{
    timestamp:true
}

);

const SwapRequest=mongoose.model('SwapRequest',swapRequestschema);

export default SwapRequest;
