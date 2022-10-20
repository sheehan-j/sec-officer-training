// *************************** Callbacks ***************************
// function firstFunction(parameters, callback) {
// 	// do stuff with paramters
// 	callback();
// }

// *************************** Problem with callbacks, reasons for promises ***************************
// firstFunction(parameters, function() {
// 	// do stuff
// 	secondFunction(para, function() {
// 		thirdFunction(para, function() {

// 		})
// 	})
// })

// *************************** Promises ***************************
// 3 states: Pending, Fulfilled, Rejected
// const myPromise = new Promise((resolve, reject) => {
// 	const error = false;
// 	if (!error) {
// 		resolve("Resolved the promise.");
// 	} else {
// 		reject("Rejected the promise.");
// 	}
// });

// console.log(myPromise);

// *************************** Thenables (replaces by async and await) ***************************
// myPromise
// 	.then((value) => {
// 		return value + 1;
// 	})
// 	.then((newValue) => {
// 		console.log(newValue);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// *************************** Timeout  example (Result of myPromise is printed before myNextPromise because of the timeout) ***************************
// const myNextPromise = new Promise((resolve, reject) => {
// 	setTimeout(function () {
// 		resolve("myNextPromise resolved!");
// 	}, 3000);
// });

// myNextPromise.then((value) => {
// 	console.log(value);
// });

// myPromise.then((value) => {
// 	console.log(value);
// });

// *************************** Fetch ***************************
// const users = fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		data.forEach((user) => {
// 			console.log(user);
// 		});
// 	});

// console.log(users); // This line does not wait on the above lines beacuse fetch returns a promise

// *************************** Async / Await ***************************
// const myUsers = {
// 	userList: [],
// };

// const myCoolFunction = async () => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users"); // *** wait until this promise is resolved
// 	const jsonUserData = await response.json();
// 	return jsonUserData;
// };
// // Alternative Definition
// // async function myCoolFunction() {

// // }

// const anotherFunc = async () => {
// 	const data = await myCoolFunction();
// 	myUsers.userList = data;
// 	console.log(myUsers.userList); // This will work properly because it is a part of the promises and is waiting
// };

// anotherFunc();
// console.log(myUsers.userList); // Not within the promise functions, so its still not waiting, so this prints an empty array

// *************************** Example ***************************
// const getAllUserEmails = async () => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users"); // *** wait until this promise is resolved
// 	const jsonUserData = await response.json();

// 	const userEmailArray = jsonUserData.map((user) => {
// 		return user.email;
// 	});

// 	postToWebPage(userEmailArray);
// };

// // Does not need to be async, we've already waited for the data by the time this is called
// const postToWebPage = (data) => {
// 	console.log(data);
// };

// getAllUserEmails();

// *************************** 2nd parameter of fetch ***************************
// const getDadJoke = async () => {
// 	const response = await fetch("https://icanhazdadjoke.com", {
// 		method: "GET",
// 		headers: {
// 			Accept: "application/json",
// 			// Accept: "text/plain"
// 		},
// 	}); // *** wait until this promise is resolved
// 	const jsonJokeData = await response.json();
// 	// const textJokeData = await response.text();

// 	console.log(jsonJokeData.joke);
// 	// console.log(textJokeData);
// };

// getDadJoke();

// *************************** 2nd parameter of fetch ***************************
const jokeObj = {
	id: "0oO71TSv4Ed",
	joke: "Why was it called the dark ages? Because of all the knights.",
};

const postData = async (jokeObj) => {
	const response = await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(jokeObj),
	});

	const jsonResponse = await response.json();

	console.log(jsonResponse);
};

const requestJoke = async (firstName, lastName) => {
	const response = await fetch(
		`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
	);
	const jsonResponse = await response.json();

	console.log(jsonResponse.value);
};

requestJoke("Clint", "Eastwood");

// abstract into functions
const getDataFromForm = () => {
	const requestObj = {
		firstName: "Bruce",
		lastName: "Lee",
		categories: ["nerdy"],
	};
	return requestObj;
};

const buildRequestUrl = (requestData) => {
	return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=[nerdy]`;
};

const requestJoke2 = async (url) => {
	const response = await fetch(url);
	const jsonResponse = await response.json();
	const joke = jsonResponse.value.joke;
	postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
	console.log(joke);
};

// Procedural workflow function
const processJokeRequest = async () => {
	const requestData = getDataFromForm();
	const requestUrl = buildRequestUrl(requestData);
	await requestJoke(requestUrl);
	console.log("finished.");
};
