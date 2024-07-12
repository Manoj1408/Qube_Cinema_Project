import express from "express";
import {
  getAllAppliances,
  getApplianceById,
} from "../controllers/applianceController.js";

const router = express.Router();

router.get("/appliances", getAllAppliances);
router.get("/appliance/:id/info", getApplianceById);

export default router;
