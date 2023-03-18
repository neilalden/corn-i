import Nav from "./components/Nav";
import ContextProvider from "./Context";
import Navigation from "./Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className='App'>
			<ContextProvider>
				<ToastContainer
					position='top-center'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
					theme='light'
				/>
				<Nav />
				<Navigation />
			</ContextProvider>
		</div>
	);
}

export default App;
