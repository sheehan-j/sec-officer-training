const User = require("../model/User");
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
	// On client, also delete the access token

	const cookies = req.cookies;
	if (!cookies?.jwt)
		// If we have cookies, and then if we do have cookies, if we have a jwt
		return res.sendStatus(204); // No content
	const refreshToken = cookies.jwt;

	// Is refreshToken in db?
	const foundUser = await User.findOne({ refreshToken }).exec();
	if (!foundUser) {
		res.clearCookie("jwt", {
			httpOnly: true,
			sameSite: "None",
			secure: true,
		});
		return res.sendStatus(204);
	}

	// Delete the refresh token in db
	foundUser.refreshToken = "";
	const result = await foundUser.save();
	console.log(result);

	res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); // secure: true - only serves on https
	res.sendStatus(204);
};

module.exports = { handleLogout };
