import jwt from 'jsonwebtoken';
import authModel from '../model/Auth_model.js';

const checkIsUserAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, "mdhs");
      const { userId } = decoded;

      // Get User from Token
      const user = await authModel.findById(userId).select('-password');
      if (!user) {
        console.error(`User not found with ID: ${userId}`); // Debugging
        return res.status(401).json({ message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error("Error in authentication middleware:", error); // Debugging
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Token expired" });
      }
      return res.status(401).json({ message: "Unauthorized User" });
    }
  } else {
    console.error("No authorization header provided or incorrect format"); // Debugging
    return res.status(401).json({ message: "No authorization header provided or incorrect format" });
  }
};

export default checkIsUserAuthenticated;
