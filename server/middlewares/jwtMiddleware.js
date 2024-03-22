const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // console.log(req);
  const token = req.header('token');

  if(!token){
    return res.status(401).json({message: "Authorization Denied"});
  }
  
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    // console.log(decoded);
    next();
  }
  catch (err) {
    return res.status(401).json({message: "Invalid Token"});
  }
};