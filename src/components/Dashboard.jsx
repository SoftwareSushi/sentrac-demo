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
		<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
			<div
				className="h-full bg-green-500"
				style={{ width: `${positiveWidth}%` }}
			></div>
			<div
				className="h-full bg-gray-400"
				style={{ width: `${neutralWidth}%` }}
			></div>
			<div
				className="h-full bg-red-500"
				style={{ width: `${negativeWidth}%` }}
			></div>
		</div>
	);
};

const SentimentIcons = ({ sentiment }) => {
	return (
		<div className="flex items-center space-x-4 text-sm">
			<div className="flex items-center">
				<span className="text-green-500 mr-1">😊</span>
				<span className="text-gray-700">{sentiment.positive}%</span>
			</div>
			<div className="flex items-center">
				<span className="text-gray-400 mr-1">😐</span>
				<span className="text-gray-700">{sentiment.neutral}%</span>
			</div>
			<div className="flex items-center">
				<span className="text-red-500 mr-1">😞</span>
				<span className="text-gray-700">{sentiment.negative}%</span>
			</div>
		</div>
	);
};

const StatusBadge = ({ status }) => {
	const statusColors = {
		active: 'bg-green-100 text-green-800',
		completed: 'bg-blue-100 text-blue-800',
		scheduled: 'bg-yellow-100 text-yellow-800',
	};

	return (
		<span
			className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
		>
			{status.charAt(0).toUpperCase() + status.slice(1)}
		</span>
	);
};

const CampaignCard = ({ campaign }) => {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
			<div className="flex justify-between items-start mb-4">
				<h3 className="text-xl font-semibold text-gray-900">
					{campaign.name}
				</h3>
				<StatusBadge status={campaign.status} />
			</div>

			<div className="flex items-center space-x-2 mb-4">
				{campaign.platforms.map((platform) => (
					<img
						key={platform}
						src={platformIcons[platform]}
						alt={platform}
						title={platform}
						className="w-6 h-6 object-contain"
					/>
				))}
			</div>

			<div className="space-y-4">
				<div>
					<div className="flex justify-between items-center mb-2">
						<span className="text-sm font-medium text-gray-700">
							Campaign Period
						</span>
					</div>
					<p className="text-sm text-gray-600">
						{new Date(campaign.startDate).toLocaleDateString()} -{' '}
						{new Date(campaign.endDate).toLocaleDateString()}
					</p>
				</div>

				<div>
					<div className="flex justify-between items-center mb-2">
						<span className="text-sm font-medium text-gray-700">
							Sentiment Overview
						</span>
					</div>
					<SentimentBar sentiment={campaign.sentiment} />
					<div className="mt-2">
						<SentimentIcons sentiment={campaign.sentiment} />
					</div>
				</div>

				<div>
					<div className="flex justify-between items-center">
						<span className="text-sm font-medium text-gray-700">
							Engagement Rate
						</span>
						<span className="text-lg font-semibold text-blue-600">
							{campaign.engagementRate}%
						</span>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<Link
					to={`/campaign/${campaign.id}`}
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium"
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
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					Campaign Dashboard
				</h1>
				<p className="text-gray-600">
					Monitor your influencer marketing campaigns and sentiment
					analysis
				</p>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 mb-8">
				<div className="flex-1">
					<label
						htmlFor="sort"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Sort by
					</label>
					<select
						id="sort"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Filter by Platform
					</label>
					<select
						id="filter"
						value={filterPlatform}
						onChange={(e) => setFilterPlatform(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="all">All Platforms</option>
						<option value="instagram">Instagram</option>
						<option value="tiktok">TikTok</option>
						<option value="youtube">YouTube</option>
						<option value="twitter">Twitter</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{sortedCampaigns.map((campaign) => (
					<CampaignCard key={campaign.id} campaign={campaign} />
				))}
			</div>

			{sortedCampaigns.length === 0 && (
				<div className="text-center py-12">
					<p className="text-gray-500">
						No campaigns found matching your filters.
					</p>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
