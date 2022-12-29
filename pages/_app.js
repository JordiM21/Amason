import store from "../store";
import { Provider } from "react-redux";
import global from "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<NavBar />
			<Component {...pageProps} />
		</Provider>
	);
}
export default MyApp;
