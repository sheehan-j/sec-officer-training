const fs = require("fs");
const path = require("path");

// ******* Functions from node are asynchronous *******
fs.readFile(
	// This a better appraoch - build the path using the path module
	path.join(__dirname, "files", "starter.txt"),
	"utf8",
	(err, data) => {
		if (err) throw err;
		console.log(data);
		// console.log(data.toString()); // This is not needed with "utf8" encoding in the argument list
	}
);

console.log("Hello...");

fs.writeFile(
	// No need to specify utf8, it is default
	path.join(__dirname, "files", "reply.txt"),
	"Nice to meet you.",
	(err, data) => {
		if (err) throw err;
		console.log("Write complete.");
		// console.log(data.toString()); // This is not needed with "utf8" encoding in the argument list
	}
);

fs.writeFile(
	// No need to specify utf8, it is default
	path.join(__dirname, "files", "test.txt"),
	"Nice to meet you.",
	(err, data) => {
		if (err) throw err;
		console.log("Write complete.");
		// console.log(data.toString()); // This is not needed with "utf8" encoding in the argument list

		fs.appendFile(
			// No need to specify utf8, it is default
			path.join(__dirname, "files", "test.txt"),
			"\n\n Yes, it is.",
			(err, data) => {
				if (err) throw err;
				console.log("Append  complete.");
				// console.log(data.toString()); // This is not needed with "utf8" encoding in the argument list

				fs.rename(
					// No need to specify utf8, it is default
					path.join(__dirname, "files", "test.txt"),
					path.join(__dirname, "files", "new.txt"),
					(err, data) => {
						if (err) throw err;
						console.log("Rename complete.");
						// console.log(data.toString()); // This is not needed with "utf8" encoding in the argument list
					}
				);
			}
		);
	}
);

// exit on uncaught errors
process.on("uncaughtException", (err) => {
	console.error(`There was an uncaught error: ${err}`);
	process.exit(1);
});
