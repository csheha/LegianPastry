import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, username, address, contactNumber, password } = req.body;
  try {
    //1. validate inputs
    if (!email || !username || !address || !contactNumber || !password) {
      return res.status(400).send("All fields are required");
    }

    //2. Check Duplicates
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("Email is already registered");
    }

    //3. Hash password
    const hash = await bcrypt.hash(req.body.password, 5);

    //4. Store user data
    const newUser = new User({
      email,
      username,
      address,
      contactNumber,
      password: hash,
    });
    const savedUser = await newUser.save();

    //5. Return Success Response
    res.status(200).send({
      success: true,
      message: "User Registration successfull!",
      data: newUser,
    });
  } catch (err) {
    console.error("User Registration error:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //1. Validate inputs
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    //2. Fetch user data
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User does not exist");
    }

    //3. verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send("invalid password");
    }

    //4. Create token
    const sessionToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    //5. return success response
    res.status(200).send({
      success: true,
      message: "User Login successful!",
      token: sessionToken,
      data: user,
    });
  } catch (err) {
    console.error("User Login error:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const editUser = async (req, res) => {
  //retrieve userId
  const { userId } = req.params;

  try {
    //validate input
    if (!userId) {
      return res.status(400).send("User ID is required");
    }

    //fetch and update user
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });
    //check if user exist
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    //return response
    res.status(200).send({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req, res) => {
  //retrieve userId
  const { userId } = req.params;
  try {
    //validate input
    if (!userId) {
      return res.status(400).send("User ID is required");
    }
    //check user exist
    const deletedUser = await User.findByIdAndDelete(userId);

    //find and delete user
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    //send a response
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const getUser = async (req, res) => {
  //retrieve userId
  const { userId } = req.params;
  try {
    //validate input
    if (!userId) {
      return res.status(400).send("User ID is required");
    }
    //check user exist
    const getUser = await User.findById(userId);

    //find and fetch user
    if (!getUser) {
      return res.status(404).send("User not found");
    }
    //send a response
    res.status(200).send({
      success: true,
      message: "User details fetch successfully",
      data: getUser,
    });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const getUsers = async (req, res) => {
  try {
    //check user exist
    const getUsers = await User.find();

    //find and fetch users
    if (!getUsers) {
      return res.status(400).send("Users do not exist");
    }

    //send a response
    res.status(200).send({
      success: true,
      message: "Users details fetch successfully",
      data: getUsers,
    });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).send("Internal Server Error");
  }
};
