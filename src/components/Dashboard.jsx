import { useState } from 'react';
import { Link } from 'react-router-dom';
import { campaigns } from '../data/dummyData';

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

const SentimentBar = ({ sentiment }) => {
	const total =
		sentiment.positive + sentiment.neutral + sentiment.negative;
	const positiveWidth = (sentiment.positive / total) * 100;
	const neutralWidth = (sentiment.neutral / total) * 100;
	const negativeWidth = (sentiment.negative / total) * 100;

	return (
		<div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex shadow-inner">
			<div
				className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500"
				style={{ width: `${positiveWidth}%` }}
			></div>
			<div
				className="h-full bg-gradient-to-r from-gray-400 to-gray-500 transition-all duration-500"
				style={{ width: `${neutralWidth}%` }}
			></div>
			<div
				className="h-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-500"
				style={{ width: `${negativeWidth}%` }}
			></div>
		</div>
	);
};

const SentimentIcons = ({ sentiment }) => {
	return (
		<div className="flex items-center space-x-6 text-sm">
			<div className="flex items-center space-x-2">
				<span className="text-2xl">😊</span>
				<span className="text-gray-700 font-semibold">
					{sentiment.positive}%
				</span>
			</div>
			<div className="flex items-center space-x-2">
				<span className="text-2xl">😐</span>
				<span className="text-gray-700 font-semibold">
					{sentiment.neutral}%
				</span>
			</div>
			<div className="flex items-center space-x-2">
				<span className="text-2xl">😞</span>
				<span className="text-gray-700 font-semibold">
					{sentiment.negative}%
				</span>
			</div>
		</div>
	);
};

const StatusBadge = ({ status }) => {
	const statusStyles = {
		active:
			'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg',
		completed:
			'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg',
		scheduled:
			'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg',
	};

	return (
		<span
			className={`inline-flex px-4 py-2 text-sm font-bold rounded-full ${statusStyles[status]} hover:shadow-xl transition-all duration-200`}
		>
			{status.charAt(0).toUpperCase() + status.slice(1)}
		</span>
	);
};

const CampaignCard = ({ campaign }) => {
	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
			<div className="flex justify-between items-start mb-6">
				<h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
					{campaign.name}
				</h3>
				<StatusBadge status={campaign.status} />
			</div>

			<div className="flex items-center space-x-3 mb-6">
				{campaign.platforms.map((platform) => (
					<div
						key={platform}
						className="p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20 hover:shadow-lg transition-all duration-200"
					>
						<img
							src={platformIcons[platform]}
							alt={platform}
							title={platform}
							className="w-6 h-6 object-contain"
						/>
					</div>
				))}
			</div>

			<div className="space-y-6">
				<div>
					<div className="flex justify-between items-center mb-3">
						<span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
							Campaign Period
						</span>
					</div>
					<p className="text-sm text-gray-600 font-medium bg-gray-50 rounded-lg px-3 py-2">
						{new Date(campaign.startDate).toLocaleDateString()} -{' '}
						{new Date(campaign.endDate).toLocaleDateString()}
					</p>
				</div>

				<div>
					<div className="flex justify-between items-center mb-3">
						<span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
							Sentiment Overview
						</span>
					</div>
					<SentimentBar sentiment={campaign.sentiment} />
					<div className="mt-4">
						<SentimentIcons sentiment={campaign.sentiment} />
					</div>
				</div>

				<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
					<div className="flex justify-between items-center">
						<span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
							Engagement Rate
						</span>
						<span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
							{campaign.engagementRate}%
						</span>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<Link
					to={`/campaign/${campaign.id}`}
					className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
				>
					View Report
				</Link>
			</div>
		</div>
	);
};

const Dashboard = () => {
	const [sortBy, setSortBy] = useState('name');
	const [filterPlatform, setFilterPlatform] = useState('all');

	const filteredCampaigns = campaigns.filter((campaign) => {
		if (filterPlatform === 'all') return true;
		return campaign.platforms.includes(filterPlatform);
	});

	const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
		switch (sortBy) {
			case 'engagement':
				return b.engagementRate - a.engagementRate;
			case 'sentiment':
				return b.sentiment.positive - a.sentiment.positive;
			case 'date':
				return new Date(b.startDate) - new Date(a.startDate);
			default:
				return a.name.localeCompare(b.name);
		}
	});

	return (
		<div>
			<div className="mb-12">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-600 bg-clip-text text-transparent mb-4">
							Campaign Dashboard
						</h1>
						<p className="text-gray-600 text-xl font-medium">
							Monitor your influencer marketing campaigns and sentiment
							analysis
						</p>
					</div>
					<Link
						to="/create-campaign"
						className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
					>
						Create Campaign
					</Link>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-6 mb-10">
				<div className="flex-1">
					<label
						htmlFor="sort"
						className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide"
					>
						Sort by
					</label>
					<select
						id="sort"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-lg"
					>
						<option value="name">Campaign Name</option>
						<option value="engagement">Engagement Rate</option>
						<option value="sentiment">Sentiment Score</option>
						<option value="date">Start Date</option>
					</select>
				</div>
				<div className="flex-1">
					<label
						htmlFor="filter"
						className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide"
					>
						Filter by Platform
					</label>
					<select
						id="filter"
						value={filterPlatform}
						onChange={(e) => setFilterPlatform(e.target.value)}
						className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 font-medium shadow-lg"
					>
						<option value="all">All Platforms</option>
						<option value="instagram">Instagram</option>
						<option value="tiktok">TikTok</option>
						<option value="youtube">YouTube</option>
						<option value="twitter">Twitter</option>
						<option value="facebook">Facebook</option>
						<option value="linkedin">LinkedIn</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{sortedCampaigns.map((campaign) => (
					<CampaignCard key={campaign.id} campaign={campaign} />
				))}
			</div>

			{sortedCampaigns.length === 0 && (
				<div className="text-center py-16">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 max-w-md mx-auto">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							No campaigns found
						</h3>
						<p className="text-gray-600 mb-8">
							Try adjusting your filters or create a new campaign.
						</p>
						<Link
							to="/create-campaign"
							className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
						>
							Create Campaign
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
