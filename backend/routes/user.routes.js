import express from "express";
import {
  signup,
  login,
  editUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/edit", editUser);
router.delete("delete/:userId", deleteUser);

export default router;
