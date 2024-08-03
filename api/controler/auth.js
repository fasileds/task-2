import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const savedUser = await User.create({
      userName,
      password: hashedPassword,
      email,
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
    console.log("failed to create user");
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    try {
      const passwordMuched = await bcrypt.compare(password, user.password);
      if (passwordMuched) {
        const accessToken = jwt.sign(
          {
            id: user._id,
          },
          "fasiledes",
          { expiresIn: "3d" }
        );
        res.json({ user, accessToken });
      } else {
        res.status(401).json("credential miss muched");
      }
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  } else res.json("user does not exisit");
};
