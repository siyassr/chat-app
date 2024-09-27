
const jwt = require('jsonwebtoken');
const User = require('../models/usermodels');

exports.authenticate = async (req,res,next) => {

    // console.log(req.headers);
    let token;
    if(req.headers.cookie){
      token = req.headers.cookie.split("=")[1];
    }else{
      return res.redirect('/login');
    }
    
    if (!token) return res.redirect('/login');
//  console.log(token);  
 
  // console.log("dvdkjvndjnvn");
  try {
    console.log("env",process.env.ACCESS_TOKEN_SECRET);
    
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const id = decoded.userId;
    // console.log(decoded);
    
    // console.log("User ID:", id);

    const user = await User.findById(id);
    // console.log(user);

    if (!user) {
      return res.status(404).send("User not found"); 
      
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error during authentication:", err);
    res.status(400).send("Invalid token");
  }
}; 