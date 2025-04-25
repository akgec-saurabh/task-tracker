import { registerUser, loginUser } from "../services/user.service.js";
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

    return res
      .status(200)
      .json(new ApiResponse(200, result.user, "User logged in successfully"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode || 500, null, error.message));
  }
};

export { signupUserHandler, loginUserHandler };
