import './App.css';
import Companies from './Pages/Companies';
import UploadCompany from './Pages/UploadCompany';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/upload-company" element={<UploadCompany />} />
					<Route path="/companies" element={<Companies />} />
				</Routes>
			</div>
		</Router>

	);
}

export default App;
