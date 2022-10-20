// Higher order functions
// Does one of the following:
// *** Takes one or more functions as an argument
// *** Returns a function as the result

import { posts } from "./posts.js";

// *** forEach()
posts.forEach((post) => {
	console.log(post);
});
console.clear();

// *** filter()
const filteredPosts = posts.filter((post) => {
	return post.userId === 5;
});
console.log(filteredPosts);

// *** map()
const mappedPosts = filteredPosts.map((post) => {
	return post.id * 10;
});
console.log(mappedPosts);

// *** reduce()
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
	return sum + post;
});
console.log(reducedPostsValue);
