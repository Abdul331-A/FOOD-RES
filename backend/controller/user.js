const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password is required" });
  }
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "Email is already exist" });
  }
  const hashPwd = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashPwd,
  });
  let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY, {
    expiresIn: "1hr",
  });
  return res.status(200).json({ token, newUser });
};
const userLogin = async () => {
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password is required" });
  }
  let user=await User.findOne({email})
  if(user && await bcrypt.compare(password,user.password)){
      let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1hr",
  });
  return res.status(200).json({ token, user });
  }
  else{
    return res.status(400).json({error:"invalid credientials"})
  }
};
const getUser = async (req, res) => {
    try {
        const {id} = req.params;

        console.log("params id::",id);
        

        const user = await User.findById(id);

        if(!user){
           return res.status(400).json({message: "user not found"});
        }

        console.log("userr:", user);
        

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = { userLogin, userSignup, getUser };
