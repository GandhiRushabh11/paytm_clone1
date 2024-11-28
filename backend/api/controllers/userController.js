const userModel = require("../models/user");
const accountModel = require("../models/account");
exports.register = async (req, res) => {
  const { username, firstName, lastName, password, email } = req.body;
  try {
    if (!username || !firstName || !lastName || password || !email) {
      return res.status(400).json({
        success: false,
        message: "Please Fill up All Fields",
      });
    }
    let user = await userModel.findOne({ email });
    const initialBal = Math.floor(Math.random() * 100000);
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email is invalid or already taken",
      });
    }
    user = await userModel.create({
      username,
      firstName,
      lastName,
      password,
      email,
    });

    const accountData = await accountModel.create({
      userId: user._id,
      balance: initialBal,
    });
    const token = user.getSignedjwtToken();
    res.status(200).json({
      success: true,
      message: "User created successfully",
      token,
      balance: accountData.balance,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter your user name and password",
    });
  }

  let user = await userModel.findOne({ username });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = user.getSignedjwtToken();
  res.status(200).json({ success: true, token });
};

exports.updateUser = async (req, res) => {
  const { firstName, lastName, password } = req.body;
  const user = req.user;
  const updatedUser = await userModel.findByIdAndUpdate(
    user._id,
    {
      firstName,
      lastName,
      password,
    },
    { new: true, runValidators: true }
  );
  res.json({
    success: true,
    message: "Updated successfully",
    data: updatedUser,
  });
};

exports.getUsers = async (req, res) => {
  const filter = req.query.filter || "";
  console.log(filter);
  const users = await userModel.find({
    $or: [
      { firstName: { $regex: filter, $options: "i" } },
      { lastName: { $regex: filter, $options: "i" } },
    ],
  });

  res.status(200).json({ success: true, data: users });
};

exports.getMe = async (req, res) => {
  //const user = await userModel.findById(req.user._id);

  res.status(200).json({ success: true, data: req.user });
};
