import User from "../model/User.js";

export const getSinglUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json(error);
    console.log("error while faching user");
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
    console.log("error while updating user");
  }
};

export const deleateUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("deleated sucssfully");
  } catch (error) {
    res.json(error);
    console.log("error while delating user");
  }
};
