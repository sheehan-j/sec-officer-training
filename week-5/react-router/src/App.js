import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";

function App() {
	const setPosts = useStoreActions((actions) => actions.setPosts);
	const { data, fetchError, isLoading } = useAxiosFetch(
		"http://localhost:3500/posts"
	);

	useEffect(() => {
		setPosts(data);
	}, [data, setPosts]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={
						<Home fetchError={fetchError} isLoading={isLoading} />
					}
				/>
				<Route path="post">
					<Route index element={<NewPost />} />
					<Route path=":id" element={<PostPage />} />
				</Route>
				<Route path="edit">
					<Route path=":id" element={<EditPost />} />
				</Route>
				<Route path="about" element={<About />} />
				<Route path="*" element={<Missing />} />
			</Route>
		</Routes>
	);
}

export default App;
