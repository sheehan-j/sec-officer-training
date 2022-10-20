document.getElementById("phoneForm").addEventListener("input", (event) => {
	const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g; // Expects certain number of digits, and possibly -, ., or a space in betweem, also possibly expects () around area code
	const input = document.getElementById("phoneNum");
	// const format = document.querySelector(".phoneFormat");
	const phone = input.value;
	const found = regex.test(phone);
	if (!found && phone.length) {
		input.classList.add("invalid");
		// format.clnput.classLassList.add("block");
	} else {
		input.classList.remove("invalid");
		// format.classList.remove("block");
	}
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const input = document.getElementById("phoneNum");
	const regex = /[()-. ]/g;
	const savedPhoneNum = input.value.replaceAll(regex, "");
	console.log(savedPhoneNum);
});

// const regex = / {2,}/g // Will find two or more occurences of spaces in a row

// const encodedInputText = encodeURI(input.value); // Encodes URL without spaces
