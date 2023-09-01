import './App.css';
import About from './Pages/About';
import Companies from './Pages/Companies';
import Home from './Pages/Home';
import UploadCompany from './Pages/UploadCompany';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/upload-company" element={<UploadCompany />} />
					<Route path="/companies" element={<Companies />} />
				</Routes>
			</div>
		</Router>

	);
}

export default App;
