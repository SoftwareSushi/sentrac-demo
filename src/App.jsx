import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CampaignReport from './components/CampaignReport';
import CampaignCreation from './components/CampaignCreation';
import './App.css';

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<header className="bg-white shadow-sm border-b border-gray-200">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center py-6">
							<div className="flex items-center">
								<h1 className="text-2xl font-bold text-gray-900">SenTrac</h1>
								<span className="ml-2 text-sm text-gray-500">
									Sentiment Analytics Platform
								</span>
							</div>
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
