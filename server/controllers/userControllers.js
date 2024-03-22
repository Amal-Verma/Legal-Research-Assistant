const jwt = require('jsonwebtoken');
const userSchema = require('../models/userSchema');

exports.login = async (req, res) => {
  const {email, password} = req.body;
  // console.log(req.body);
  // console.log({email, password})
  const response = await userSchema.findOne({email, password});
  // console.log(response);
  if(response){
    res.status(200).json({message: "Login Successful", token: jwt.sign({id : response._id}, 'secret')});
  }
  else{
    res.status(401).json({message: "Invalid Credentials"});
  }
}

exports.register = async (req, res) => {
  const {username, email, password} = req.body;
  // console.log(req.body);
  // console.log({username, email, password})
  const response = await userSchema.create({username, email, password});
  // console.log(response);
  if(response){
    res.status(200).json({message: "User Registered Successfully"});
  }
  else{
    res.status(401).json({message: "User Registration Failed"});
  }
}

exports.getUsers = async (req, res) => {
  const response = await userSchema.findById(req.user.id);
  // console.log(req.id);
  // const response = {username: "John Doe", email: "heaar"}
  
  // console.log(req.body)
  // console.log(response);

  if(response){
    res.status(200).json({message: "User Found", data: response});
  }
  else{
    res.status(401).json({message: "User Not Found"});
  }

}