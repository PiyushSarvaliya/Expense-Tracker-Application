const jwt = require("jsonwebtoken");


const Auth = (req, res, next) => {
    let { token } = req.cookies
      
    if (token) {
      let decode = jwt.verify(token, "token");
      req.body.userID = decode.id
      next();
    } else {
      res.json("first login")
    }
  };


const authorize = (req, res, next) => {
    if (req.cookies.role !== "admin") {
      res.send("You are not authorized to access this page.");
    } 
    else {
      next();
    }
  };
  

module.exports = {Auth,authorize };