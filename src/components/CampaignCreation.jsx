import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import platform icons
import instagramIcon from '../assets/icons/instagram-icon.png';
import tiktokIcon from '../assets/icons/tiktok-icon.png';
import youtubeIcon from '../assets/icons/youtube-icon.png';
import twitterIcon from '../assets/icons/twitter-icon.png';
import facebookIcon from '../assets/icons/facebook-icon.png';
import linkedinIcon from '../assets/icons/linkedin-icon.png';

// Platform icons mapping
const platformIcons = {
	instagram: instagramIcon,
	tiktok: tiktokIcon,
	youtube: youtubeIcon,
	twitter: twitterIcon,
	facebook: facebookIcon,
	linkedin: linkedinIcon,
};

const platforms = [
	{ value: 'instagram', label: 'Instagram', icon: instagramIcon },
	{ value: 'tiktok', label: 'TikTok', icon: tiktokIcon },
	{ value: 'youtube', label: 'YouTube', icon: youtubeIcon },
	{ value: 'twitter', label: 'X (Twitter)', icon: twitterIcon },
	{ value: 'facebook', label: 'Facebook', icon: facebookIcon },
	{ value: 'linkedin', label: 'LinkedIn', icon: linkedinIcon },
];

const StatusBadge = ({ status }) => {
	const statusStyles = {
		verified:
			'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg',
		error:
			'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg',
		'unrecognized platform':
			'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg',
		pending:
			'bg-gradient-to-r from-yellow-500 to-orange-400 text-white shadow-lg',
	};

	return (
		<span
			className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${statusStyles[status]} hover:shadow-xl transition-all duration-200`}
		>
			{status.charAt(0).toUpperCase() + status.slice(1)}
		</span>
	);
};

const PlatformSelector = ({ selectedPlatforms, onChange }) => {
	const handlePlatformToggle = (platformValue) => {
		const newSelected = selectedPlatforms.includes(platformValue)
			? selectedPlatforms.filter((p) => p !== platformValue)
			: [...selectedPlatforms, platformValue];
		onChange(newSelected);
	};

	return (
		<div className="space-y-4">
			<label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
				Supported Platforms *
			</label>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
				{platforms.map((platform) => (
					<div
						key={platform.value}
						className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
							selectedPlatforms.includes(platform.value)
								? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg transform scale-105'
								: 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-md hover:transform hover:scale-105'
						}`}
						onClick={() => handlePlatformToggle(platform.value)}
					>
						<div className="p-2 bg-white rounded-lg shadow-sm mr-3">
							<img
								src={platform.icon}
								alt={platform.label}
								className="w-5 h-5"
							/>
						</div>
						<span className="text-sm font-semibold text-gray-700">
							{platform.label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

const CampaignCreation = () => {
	const navigate = useNavigate();

	// Campaign Details State
	const [campaignDetails, setCampaignDetails] = useState({
		name: '',
		clientName: '',
		startDate: '',
		endDate: '',
		platforms: [],
	});

	// Post Management State
	const [postForm, setPostForm] = useState({
		url: '',
	});

	const [posts, setPosts] = useState([]);
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	// Platform detection function
	const detectPlatformFromUrl = (url) => {
		const patterns = {
			instagram: /instagram\.com/,
			tiktok: /tiktok\.com/,
			youtube: /youtube\.com|youtu\.be/,
			twitter: /twitter\.com|x\.com/,
			facebook: /facebook\.com/,
			linkedin: /linkedin\.com/,
		};

		for (const [platform, pattern] of Object.entries(patterns)) {
			if (pattern.test(url.toLowerCase())) {
				return platform;
			}
		}
		return null; // Platform not recognized
	};

	// URL validation function
	const validateUrl = (url) => {
		const platform = detectPlatformFromUrl(url);
		if (!platform) {
			return { status: 'unrecognized platform', platform: 'unknown' };
		}

		// For demo purposes, simulate random validation for recognized platforms
		const isValid = Math.random() > 0.2; // 80% success rate
		return {
			status: isValid ? 'verified' : 'error',
			platform: platform,
		};
	};

	const handleCampaignDetailsChange = (field, value) => {
		setCampaignDetails((prev) => ({
			...prev,
			[field]: value,
		}));

		// Clear errors when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({
				...prev,
				[field]: null,
			}));
		}
	};

	const handlePostFormChange = (field, value) => {
		setPostForm((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const validateCampaignDetails = () => {
		const newErrors = {};

		if (!campaignDetails.name.trim()) {
			newErrors.name = 'Campaign name is required';
		}

		if (!campaignDetails.startDate) {
			newErrors.startDate = 'Start date is required';
		}

		if (!campaignDetails.endDate) {
			newErrors.endDate = 'End date is required';
		}

		if (campaignDetails.startDate && campaignDetails.endDate) {
			if (
				new Date(campaignDetails.startDate) >=
				new Date(campaignDetails.endDate)
			) {
				newErrors.endDate = 'End date must be after start date';
			}
		}

		if (campaignDetails.platforms.length === 0) {
			newErrors.platforms = 'At least one platform must be selected';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleAddPost = () => {
		if (!postForm.url.trim()) {
			alert('Post URL is required');
			return;
		}

		// Validate URL
		const validation = validateUrl(postForm.url);

		const newPost = {
			id: Date.now(),
			url: postForm.url,
			platform: validation.platform,
			status: validation.status,
			addedAt: new Date(),
		};

		setPosts((prev) => [...prev, newPost]);
		setPostForm({ url: '' });
	};

	const handleRemovePost = (postId) => {
		setPosts((prev) => prev.filter((post) => post.id !== postId));
	};

	const canCreateCampaign = () => {
		const hasValidPosts = posts.some(
			(post) => post.status === 'verified'
		);
		const hasValidDetails =
			campaignDetails.name.trim() &&
			campaignDetails.startDate &&
			campaignDetails.endDate &&
			campaignDetails.platforms.length > 0;

		return hasValidDetails && hasValidPosts;
	};

	const handleCreateCampaign = () => {
		if (!validateCampaignDetails()) {
			return;
		}

		if (!canCreateCampaign()) {
			alert(
				'Please ensure all campaign details are filled and at least one post is verified.'
			);
			return;
		}

		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setShowSuccess(true);

			// Redirect after showing success message
			setTimeout(() => {
				navigate('/');
			}, 2000);
		}, 2000);
	};

	if (showSuccess) {
		return (
			<div className="text-center py-20">
				<div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-16 max-w-2xl mx-auto">
					<div className="text-6xl mb-6">🎉</div>
					<h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
						Campaign Created Successfully!
					</h2>
					<p className="text-gray-600 text-xl mb-8">
						Your campaign "{campaignDetails.name}" has been created and is
						ready for monitoring.
					</p>
					<div className="flex justify-center">
						<div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
					</div>
					<p className="text-sm text-gray-500 mt-4">
						Redirecting to dashboard...
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-10">
			{/* Header */}
			<div className="flex justify-between items-start">
				<div>
					<Link
						to="/"
						className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 font-semibold text-sm tracking-wide uppercase transition-colors duration-200"
					>
						← Back to Dashboard
					</Link>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
						Create New Campaign
					</h1>
					<p className="text-gray-600 text-lg font-medium">
						Set up sentiment analysis tracking for your influencer marketing
						campaign
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				{/* Campaign Details */}
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-8">
						Campaign Details
					</h2>

					<div className="space-y-6">
						<div>
							<label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
								Campaign Name *
							</label>
							<input
								type="text"
								value={campaignDetails.name}
								onChange={(e) =>
									handleCampaignDetailsChange('name', e.target.value)
								}
								className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-sm ${
									errors.name ? 'border-red-300' : 'border-gray-200'
								}`}
								placeholder="Enter campaign name"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-2 font-medium">
									{errors.name}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
								Client Name
							</label>
							<input
								type="text"
								value={campaignDetails.clientName}
								onChange={(e) =>
									handleCampaignDetailsChange('clientName', e.target.value)
								}
								className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-sm"
								placeholder="Enter client name (optional)"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
									Start Date *
								</label>
								<input
									type="date"
									value={campaignDetails.startDate}
									onChange={(e) =>
										handleCampaignDetailsChange('startDate', e.target.value)
									}
									className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-sm ${
										errors.startDate ? 'border-red-300' : 'border-gray-200'
									}`}
								/>
								{errors.startDate && (
									<p className="text-red-500 text-sm mt-2 font-medium">
										{errors.startDate}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
									End Date *
								</label>
								<input
									type="date"
									value={campaignDetails.endDate}
									onChange={(e) =>
										handleCampaignDetailsChange('endDate', e.target.value)
									}
									className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-sm ${
										errors.endDate ? 'border-red-300' : 'border-gray-200'
									}`}
								/>
								{errors.endDate && (
									<p className="text-red-500 text-sm mt-2 font-medium">
										{errors.endDate}
									</p>
								)}
							</div>
						</div>

						<PlatformSelector
							selectedPlatforms={campaignDetails.platforms}
							onChange={(platforms) =>
								handleCampaignDetailsChange('platforms', platforms)
							}
						/>
						{errors.platforms && (
							<p className="text-red-500 text-sm font-medium">
								{errors.platforms}
							</p>
						)}
					</div>
				</div>

				{/* Post Management */}
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-8">
						Add Posts
					</h2>

					<div className="space-y-6">
						<div className="flex space-x-3">
							<input
								type="url"
								value={postForm.url}
								onChange={(e) => handlePostFormChange('url', e.target.value)}
								placeholder="Paste post URL here..."
								className="flex-1 px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-sm"
							/>
							<button
								onClick={handleAddPost}
								className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
							>
								Add
							</button>
						</div>

						{posts.length > 0 && (
							<div className="space-y-3">
								<h3 className="text-lg font-bold text-gray-800">
									Added Posts ({posts.length})
								</h3>
								<div className="max-h-96 overflow-y-auto space-y-3">
									{posts.map((post) => (
										<div
											key={post.id}
											className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200"
										>
											<div className="flex items-center space-x-3 flex-1 min-w-0">
												<div className="p-2 bg-white rounded-lg shadow-sm">
													<img
														src={platformIcons[post.platform] || '📄'}
														alt={post.platform}
														className="w-5 h-5"
													/>
												</div>
												<div className="flex-1 min-w-0">
													<p className="text-sm font-medium text-gray-900 truncate">
														{post.url}
													</p>
													<p className="text-xs text-gray-500 capitalize">
														{post.platform || 'Unknown'} •{' '}
														{new Date(post.addedAt).toLocaleTimeString()}
													</p>
												</div>
											</div>
											<div className="flex items-center space-x-3 ml-3">
												<StatusBadge status={post.status} />
												<button
													onClick={() => handleRemovePost(post.id)}
													className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1 rounded-full hover:bg-red-50"
												>
													<svg
														className="w-4 h-4"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</button>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{posts.length === 0 && (
							<div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
								<div className="text-4xl mb-4">📝</div>
								<p className="text-gray-500 font-medium">
									No posts added yet
								</p>
								<p className="text-sm text-gray-400">
									Add social media post URLs to track their sentiment
								</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Create Campaign Button */}
			<div className="flex justify-center pt-8">
				<button
					onClick={handleCreateCampaign}
					disabled={!canCreateCampaign() || isLoading}
					className={`px-12 py-4 font-bold text-lg rounded-xl transition-all duration-200 ${
						canCreateCampaign() && !isLoading
							? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
							: 'bg-gray-300 text-gray-500 cursor-not-allowed'
					}`}
				>
					{isLoading ? (
						<div className="flex items-center space-x-3">
							<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							<span>Creating Campaign...</span>
						</div>
					) : (
						'Create Campaign'
					)}
				</button>
			</div>

			{/* Helper Text */}
			<div className="text-center">
				<p className="text-sm text-gray-500">
					Campaign creation requires at least one verified post and all
					required fields filled.
				</p>
			</div>
		</div>
	);
};

export default CampaignCreation;
