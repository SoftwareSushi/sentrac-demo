import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState('John Doe');
	const [password, setPassword] = useState('password');
	const [isLoading, setIsLoading] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 800));

		setIsLoading(false);
		setShowSuccess(true);

		// Show success state for a moment, then redirect
		setTimeout(() => {
			onLogin();
			navigate('/');
		}, 1200);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				{/* Login Card */}
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-300">
					{/* Logo Section */}
					<div className="text-center mb-8">
						<div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
							<span className="text-white font-bold text-2xl">S</span>
						</div>
						<h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
							Welcome to SenTrac
						</h1>
						<p className="text-gray-600 font-medium">
							Sentiment Analytics Platform
						</p>
					</div>

					{/* Success Message */}
					{showSuccess && (
						<div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl animate-fade-in">
							<div className="flex items-center space-x-3">
								<div className="flex-shrink-0">
									<svg
										className="h-6 w-6 text-emerald-500 animate-bounce"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-emerald-800">
										Login Successful!
									</h3>
									<p className="text-sm text-emerald-700">
										Welcome to SenTrac Dashboard
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Login Form */}
					<form onSubmit={handleLogin} className="space-y-6">
						{/* Username Field */}
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-semibold text-gray-700 mb-2"
							>
								Username
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<input
									id="username"
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									disabled={isLoading || showSuccess}
									className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
									placeholder="Enter your username"
									required
								/>
							</div>
						</div>

						{/* Password Field */}
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-semibold text-gray-700 mb-2"
							>
								Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										/>
									</svg>
								</div>
								<input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									disabled={isLoading || showSuccess}
									className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
									placeholder="Enter your password"
									required
								/>
							</div>
						</div>

						{/* Login Button */}
						<button
							type="submit"
							disabled={isLoading || showSuccess}
							className={`w-full py-3 px-4 font-semibold rounded-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 ${
								showSuccess
									? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white cursor-not-allowed'
									: isLoading
									? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white cursor-not-allowed'
									: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-xl hover:-translate-y-0.5 transform'
							}`}
						>
							{showSuccess ? (
								<>
									<svg
										className="h-5 w-5 animate-bounce"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Success!</span>
								</>
							) : isLoading ? (
								<>
									<svg
										className="animate-spin h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									<span>Logging in...</span>
								</>
							) : (
								<span>Login</span>
							)}
						</button>
					</form>

					{/* Demo Notice */}
					<div className="mt-8 text-center">
						<p className="text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
							Demo environment — no real authentication
						</p>
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-6">
					<p className="text-sm text-gray-400 font-medium">
						© 2024 SenTrac. Demo Version.
					</p>
				</div>
			</div>

			{/* Custom Styles for Animations */}
			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fade-in 0.5s ease-out;
				}
			`}</style>
		</div>
	);
};

export default Login;
