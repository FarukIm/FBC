//libs
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
//pages
import HomePage from "./pages/homepage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/homepage' element={<HomePage />} />
				<Route path='*' element={<Navigate to='/homepage' />} />
			</Routes>
		</Router>
	);
}

export default App;
