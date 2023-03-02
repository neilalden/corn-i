import Nav from "./components/Nav";
import ContextProvider from "./Context";
import Navigation from "./Navigation";

function App() {
	return (
		<div className='App'>
			<ContextProvider>
				<Nav />
				<Navigation />
			</ContextProvider>
		</div>
	);
}

export default App;
