const usersDB = {
	users: require("../model/users.json"),
	setUsers: function (data) {
		this.users = data;
	},
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
	const { user, pwd } = req.body;
	if (!user || !pwd)
		return res
			.status(400)
			.json({ message: "Username and password are required." });

	// find() works by seraching through each person in the object and returns user when it is found
	const foundUser = usersDB.users.find((person) => person.username === user);
	if (!foundUser) return res.sendStatus(401); // User not found, 401 means unauthorized
	// evaluate password
	const match = await bcrypt.compare(pwd, foundUser.password);
	if (match) {
		// *** create JWTs
		res.json({ success: `User ${user} is logged in.` });
	} else {
		res.sendStatus(401); // Unauthorized
	}
};

module.exports = { handleLogin };
