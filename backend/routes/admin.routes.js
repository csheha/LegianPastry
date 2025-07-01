import express from "express";
import {
  adminLogin,
  verifyAdminToken,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/verify", verifyAdminToken);

export default router;
