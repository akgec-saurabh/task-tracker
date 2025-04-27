import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../services/user.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/* -------------------------------------------------------------------------- */
/*                             Register a new user                            */
/* -------------------------------------------------------------------------- */
const signupUserHandler = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, name, country } = req.body;

    if (!email || !password || !name || !country) {
      throw new ApiError(400, "All fields are required");
    }

    const user = await registerUser({ email, password, name, country });

    return res
      .status(201)
      .json(new ApiResponse(201, user, "User registered successfully"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
};

/* -------------------------------------------------------------------------- */
/*                                 Login user                                 */
/* -------------------------------------------------------------------------- */
const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email and password are required");
    }

    const result = await loginUser(email, password);

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .cookie("accessToken", result.accessToken, options)
      .cookie("refreshToken", result.refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          },
          "User logged in successfully"
        )
      );
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
};

/* -------------------------------------------------------------------------- */
/*                                Logout user                                 */
/* -------------------------------------------------------------------------- */
const logoutUserHandler = async (req, res) => {
  try {
    await logoutUser(req.user._id);

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out successfully"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
};

/* -------------------------------------------------------------------------- */
/*                            Refresh access token                            */
/* -------------------------------------------------------------------------- */
const refreshAccessTokenHandler = async (req, res) => {
  try {
    const incomingRefreshToken =
      req.cookies?.refreshToken || req.body?.refreshToken;

    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    const { accessToken, refreshToken } = await refreshAccessToken(
      incomingRefreshToken
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          "Access token refreshed successfully"
        )
      );
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
};

export {
  signupUserHandler,
  loginUserHandler,
  logoutUserHandler,
  refreshAccessTokenHandler,
};
