import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = async (userData) => {
  const { email, password, name, country } = userData;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new ApiError(409, "User with email already exists");
  }

  const user = await User.create({
    email: email.toLowerCase(),
    name,
    country,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return createdUser;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  const loggedInUser = await User.findById(user._id).select("-password");

  return {
    user: loggedInUser,
  };
};

export { registerUser, loginUser };
