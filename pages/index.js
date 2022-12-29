import Header from "../components/Header";
import Main from "./Home";
import LoadingScreen from "../components/LoadingScreen";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";

export default function Home() {
	const isLoading = useSelector((state) => state.isLoading);
	return (
		<>
			{isLoading && <LoadingScreen />}
			<Header />
			<Main />
		</>
	);
}
