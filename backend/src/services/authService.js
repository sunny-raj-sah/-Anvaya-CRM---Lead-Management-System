import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/*
----------------------------------------
Generate JWT
----------------------------------------
*/

const generateToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

/*
----------------------------------------
Register User
----------------------------------------
*/

export const registerUser = async ({
  name,
  email,
  password,
}) => {
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

/*
----------------------------------------
Login User
----------------------------------------
*/

export const loginUser = async ({
  email,
  password,
}) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

/*
----------------------------------------
Get User By ID
----------------------------------------
*/

export const getUserById = async (userId) => {
  return await User.findById(userId).select(
    "-password"
  );
};