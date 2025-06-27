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
	const statusColors = {
		verified: 'bg-green-100 text-green-800',
		error: 'bg-red-100 text-red-800',
		'unrecognized platform': 'bg-orange-100 text-orange-800',
		pending: 'bg-yellow-100 text-yellow-800',
	};

	return (
		<span
			className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
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
		<div className="space-y-2">
			<label className="block text-sm font-medium text-gray-700">
				Supported Platforms *
			</label>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
				{platforms.map((platform) => (
					<div
						key={platform.value}
						className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
							selectedPlatforms.includes(platform.value)
								? 'border-blue-500 bg-blue-50'
								: 'border-gray-300 hover:border-gray-400'
						}`}
						onClick={() => handlePlatformToggle(platform.value)}
					>
						<img
							src={platform.icon}
							alt={platform.label}
							className="w-5 h-5 mr-2"
						/>
						<span className="text-sm">{platform.label}</span>
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

		const validation = validateUrl(postForm.url);
		const newPost = {
			id: Date.now(),
			platform: validation.platform,
			url: postForm.url,
			status: validation.status,
		};

		setPosts((prev) => [...prev, newPost]);
		setPostForm({
			url: '',
		});
	};

	const handleRemovePost = (postId) => {
		setPosts((prev) => prev.filter((post) => post.id !== postId));
	};

	const canCreateCampaign = () => {
		if (isLoading) return false;

		const detailsValid =
			campaignDetails.name.trim() &&
			campaignDetails.startDate &&
			campaignDetails.endDate &&
			campaignDetails.platforms.length > 0 &&
			new Date(campaignDetails.startDate) <
				new Date(campaignDetails.endDate);

		const postsValid = posts.length > 0;

		return detailsValid && postsValid;
	};

	const handleCreateCampaign = () => {
		if (!validateCampaignDetails()) {
			return;
		}

		if (posts.length === 0) {
			alert('At least one post must be added');
			return;
		}

		// Start loading
		setIsLoading(true);

		// Simulate campaign creation with loading delay
		setTimeout(() => {
			setIsLoading(false);
			setShowSuccess(true);

			// Redirect after showing success message
			setTimeout(() => {
				navigate('/');
			}, 2000);
		}, 2000);
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-64">
				<div className="text-center">
					<div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Creating Campaign...
					</h2>
					<p className="text-gray-600">
						Please wait while we set up your campaign
					</p>
				</div>
			</div>
		);
	}

	if (showSuccess) {
		return (
			<div className="flex items-center justify-center min-h-64">
				<div className="text-center">
					<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg
							className="w-8 h-8 text-green-600"
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
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Campaign Created Successfully!
					</h2>
					<p className="text-gray-600">Redirecting to dashboard...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto">
			<div className="mb-8">
				<Link
					to="/"
					className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
				>
					← Back to Dashboard
				</Link>
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					Create New Campaign
				</h1>
				<p className="text-gray-600">
					Set up a new influencer marketing campaign with sentiment
					tracking
				</p>
			</div>

			<div className="space-y-8">
				{/* Section 1: Campaign Details Form */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-6">
						Campaign Details
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Campaign Name *
							</label>
							<input
								type="text"
								value={campaignDetails.name}
								onChange={(e) =>
									handleCampaignDetailsChange('name', e.target.value)
								}
								className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
									errors.name ? 'border-red-500' : 'border-gray-300'
								}`}
								placeholder="Enter campaign name"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">{errors.name}</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Client Name
							</label>
							<input
								type="text"
								value={campaignDetails.clientName}
								onChange={(e) =>
									handleCampaignDetailsChange('clientName', e.target.value)
								}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Enter client name (optional)"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Start Date *
							</label>
							<input
								type="date"
								value={campaignDetails.startDate}
								onChange={(e) =>
									handleCampaignDetailsChange('startDate', e.target.value)
								}
								className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
									errors.startDate ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.startDate && (
								<p className="text-red-500 text-sm mt-1">
									{errors.startDate}
								</p>
							)}
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								End Date *
							</label>
							<input
								type="date"
								value={campaignDetails.endDate}
								onChange={(e) =>
									handleCampaignDetailsChange('endDate', e.target.value)
								}
								className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
									errors.endDate ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.endDate && (
								<p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
							)}
						</div>
					</div>

					<div className="mt-6">
						<PlatformSelector
							selectedPlatforms={campaignDetails.platforms}
							onChange={(platforms) =>
								handleCampaignDetailsChange('platforms', platforms)
							}
						/>
						{errors.platforms && (
							<p className="text-red-500 text-sm mt-1">{errors.platforms}</p>
						)}
					</div>
				</div>

				{/* Section 2: Add Posts */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						Add Posts for This Campaign
					</h2>
					<p className="text-gray-600 mb-6">
						Paste the public URLs of the social media posts for this
						campaign. These can be from different platforms and creators.
					</p>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Post URL *
						</label>
						<input
							type="url"
							value={postForm.url}
							onChange={(e) => handlePostFormChange('url', e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="https://instagram.com/p/... or https://tiktok.com/@user/video/..."
						/>
						<p className="text-sm text-gray-500 mt-1">
							Platform will be automatically detected from the URL
						</p>
					</div>

					<button
						onClick={handleAddPost}
						className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
					>
						Add Post
					</button>
				</div>

				{/* Section 3: Added Posts Table */}
				{posts.length > 0 && (
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<h2 className="text-xl font-semibold text-gray-900 mb-6">
							Added Posts
						</h2>

						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b border-gray-200">
										<th className="text-left py-3 px-4 font-medium text-gray-700">
											Platform
										</th>
										<th className="text-left py-3 px-4 font-medium text-gray-700">
											Post URL
										</th>
										<th className="text-left py-3 px-4 font-medium text-gray-700">
											Status
										</th>
										<th className="text-left py-3 px-4 font-medium text-gray-700">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{posts.map((post) => (
										<tr key={post.id} className="border-b border-gray-100">
											<td className="py-3 px-4">
												<div className="flex items-center">
													{post.platform !== 'unknown' ? (
														<img
															src={platformIcons[post.platform]}
															alt={post.platform}
															className="w-5 h-5 mr-2"
														/>
													) : (
														<span className="w-5 h-5 mr-2 flex items-center justify-center text-gray-400">
															?
														</span>
													)}
													<span className="capitalize">
														{post.platform === 'unknown'
															? 'Unknown'
															: post.platform}
													</span>
												</div>
											</td>
											<td className="py-3 px-4">
												<a
													href={post.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:text-blue-800 truncate block max-w-xs"
												>
													{post.url}
												</a>
											</td>
											<td className="py-3 px-4">
												<StatusBadge status={post.status} />
											</td>
											<td className="py-3 px-4">
												<button
													onClick={() => handleRemovePost(post.id)}
													className="text-red-600 hover:text-red-800 font-medium"
												>
													Remove
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}

				{/* Section 4: Finalize */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">
						Finalize Campaign
					</h2>

					<div className="flex items-center justify-between">
						<div>
							<p className="text-gray-600">
								Ready to create your campaign? Make sure all details are
								correct and at least one post has been added.
							</p>
							{!canCreateCampaign() && (
								<p className="text-sm text-gray-500 mt-2">
									Complete all required fields and add at least one post to
									continue.
								</p>
							)}
						</div>

						<button
							onClick={handleCreateCampaign}
							disabled={!canCreateCampaign() || isLoading}
							className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center ${
								canCreateCampaign() && !isLoading
									? 'bg-green-600 text-white hover:bg-green-700'
									: 'bg-gray-300 text-gray-500 cursor-not-allowed'
							}`}
						>
							{isLoading && (
								<div className="w-4 h-4 border-2 border-gray-300 border-t-white rounded-full animate-spin mr-2"></div>
							)}
							{isLoading ? 'Creating...' : 'Create Campaign'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CampaignCreation;
