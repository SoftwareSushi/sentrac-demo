import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import CampaignReport from './components/CampaignReport';
import CampaignCreation from './components/CampaignCreation';
import Login from './components/Login';
import './App.css';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLogin = () => {
		setIsAuthenticated(true);
	};

	const handleLogout = () => {
		setIsAuthenticated(false);
	};

	// Show login page if not authenticated
	if (!isAuthenticated) {
		return (
			<Router>
				<Login onLogin={handleLogin} />
			</Router>
		);
	}

	// Show main app if authenticated
	return (
		<Router>
			<div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
				<header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20 sticky top-0 z-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center py-6">
							<div className="flex items-center">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
										<span className="text-white font-bold text-lg">ST</span>
									</div>
									<div>
										<h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
											SocialTrack
										</h1>
										<span className="text-sm text-gray-500 font-medium">
											Social Media Analytics Platform
										</span>
									</div>
								</div>
							</div>
							<button
								onClick={handleLogout}
								className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
							>
								Logout
							</button>
						</div>
					</div>
				</header>

				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/campaign/:id" element={<CampaignReport />} />
						<Route path="/create-campaign" element={<CampaignCreation />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
