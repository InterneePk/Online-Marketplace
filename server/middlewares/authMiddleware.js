const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header("x-auth-token");

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "your_secret_key");

    // Attach the user's information to the request object
    req.user = decoded.user;

    // Move on to the next middleware or route handler
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ msg: "User not authorized" });
  }

  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ msg: "Access denied, user is not an admin" });
  }
};

module.exports = {authMiddleware, isAdmin};
