import jwt from "jsonwebtoken";
import { ADMIN_CREDENTIALS } from "../models/admin.model.js";

//Login Controller
export const adminLogin = (req, res) => {
  const { username, password } = req.body;

  //validate credintials
  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    //jwt token generated
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // response
    res.status(200).json({ message: "Login successful", token });
  } else {
    // response
    res.status(401).json({ message: "Invalid username or password" });
  }
};

// Verify admin token controller
export const verifyAdminToken = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  // check
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: "Token is valid" });
  } catch {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
