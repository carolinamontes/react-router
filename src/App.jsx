import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/router";
import { GlobalStyles } from "./styles/GlobalStyles";
import Menu from "./components/menu/menu";

const App = () => {
	return (
		<>
		<BrowserRouter>
			<GlobalStyles/>
			<Menu />
			<Router />
		</BrowserRouter>
		</>
	)
};

export default App;
