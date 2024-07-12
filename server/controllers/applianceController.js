import express from "express";
import mongoose from "mongoose";
import Appliance from "../models/Appliance.js";

const router = express.Router();

// @desc    Get all appliances
// @route   GET /api/v1/appliances
// @access  Public
export const getAllAppliances = async (req, res) => {
  //   try {
  //     const appliances = await Appliance.find();
  //     res.json({ appliances });
  //      res.status(200).json(appliances);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send("Server Error");
  //   }

  try {
    const appliances = await Appliance.find();
    res.status(200).json(appliances);
  } catch (err) {
    console.error(err.message);
    res.status(404).json({ message: error.message });
  }
};

// @desc    Get appliance by ID
// @route   GET /api/v1/appliance/:id/info
// @access  Public
export const getApplianceById = async (req, res) => {
  try {
    const appliance = await Appliance.findOne({ serialNo: req.params.id });
    if (!appliance) {
      return res.status(404).json({ error: "Appliance not found" });
    }
    res.status(200).json(appliance);
  } catch (err) {
    console.error(err.message);
    res.status(404).send("Server Error");
  }
};
