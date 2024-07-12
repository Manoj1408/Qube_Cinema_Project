import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
});

const applianceSchema = mongoose.Schema({
  serialNo: { type: String, required: true, unique: true },
  theatreName: { type: String, required: true },
  location: { type: locationSchema, required: true },
  bandwidth: { type: String, required: true },
  avgBandwidth: { type: String, required: true },
  deviceStatus: { type: String, required: true, enum: ["offline", "online"] },
  downloadStatus: {
    type: String,
    required: true,
    enum: ["failed", "cancelled", "downloading", "succeeded"],
  },
  osVersion: { type: String, required: true },
  ispPaymentResponsibility: { type: String, required: false },
  planStartDate: { type: Date, required: false },
  billingCycle: {
    type: String,
    required: false,
    enum: ["monthly", "quarterly", "annual"],
  },
  storage: { type: String, required: false },
});


var Appliance = mongoose.model("ApplianceSchema", applianceSchema);

export default Appliance;