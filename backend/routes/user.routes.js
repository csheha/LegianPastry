import express from "express";
import {
  signup,
  login,
  editUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/fetchuser/:userId", getUser);
router.get("/fetchusers", getUsers);
router.put("/edit", editUser);
router.delete("/delete/:userId", deleteUser);

export default router;
