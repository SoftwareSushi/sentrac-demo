import { useParams, Link } from 'react-router-dom';
import {
	LineChart,
	Line,
	BarChart,
	Bar,
	PieChart,
	Pie,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';
import { campaignDetails, sentimentColors } from '../data/dummyData';
import { TagCloud } from 'react-tagcloud';

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

const MetricCard = ({ title, value, subtitle, color = 'purple' }) => {
	const colorClasses = {
		purple: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white',
		green: 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white',
		blue: 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white',
		orange: 'bg-gradient-to-br from-orange-500 to-red-500 text-white',
	};

	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
			<h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
				{title}
			</h3>
			<div
				className={`text-4xl font-bold mb-2 px-4 py-2 rounded-xl inline-block ${colorClasses[color]}`}
			>
				{value}
			</div>
			{subtitle && (
				<p className="text-sm text-gray-500 font-medium">{subtitle}</p>
			)}
		</div>
	);
};

const SentimentPieChart = ({ sentiment }) => {
	const data = [
		{
			name: 'Positive',
			value: sentiment.positive,
			color: '#10b981',
		},
		{
			name: 'Neutral',
			value: sentiment.neutral,
			color: '#6b7280',
		},
		{
			name: 'Negative',
			value: sentiment.negative,
			color: '#ef4444',
		},
	];

	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Overall Sentiment Distribution
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={120}
						paddingAngle={5}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
					<Tooltip formatter={(value) => `${value}%`} />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

const SentimentOverTimeChart = ({ data }) => {
	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Sentiment Trend Over Time
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
					<XAxis dataKey="date" stroke="#64748b" />
					<YAxis stroke="#64748b" />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="positive"
						stroke="#10b981"
						strokeWidth={3}
						dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
					/>
					<Line
						type="monotone"
						dataKey="neutral"
						stroke="#6b7280"
						strokeWidth={3}
						dot={{ fill: '#6b7280', strokeWidth: 2, r: 4 }}
					/>
					<Line
						type="monotone"
						dataKey="negative"
						stroke="#ef4444"
						strokeWidth={3}
						dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

const ContentTypeChart = ({ data }) => {
	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Content Type Effectiveness
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
					<XAxis dataKey="type" stroke="#64748b" />
					<YAxis stroke="#64748b" />
					<Tooltip />
					<Legend />
					<Bar
						dataKey="sentiment"
						fill="url(#purpleGradient)"
						name="Sentiment Score"
						radius={[4, 4, 0, 0]}
					/>
					<Bar
						dataKey="engagement"
						fill="url(#blueGradient)"
						name="Engagement Rate"
						radius={[4, 4, 0, 0]}
					/>
					<defs>
						<linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#ec4899" stopOpacity={0.8} />
						</linearGradient>
						<linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8} />
						</linearGradient>
					</defs>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

const PlatformComparisonChart = ({ data }) => {
	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Platform Performance Comparison
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
					<XAxis dataKey="platform" stroke="#64748b" />
					<YAxis stroke="#64748b" />
					<Tooltip />
					<Legend />
					<Bar
						dataKey="sentiment"
						fill="url(#greenGradient)"
						name="Sentiment Score"
						radius={[4, 4, 0, 0]}
					/>
					<Bar
						dataKey="engagement"
						fill="url(#orangeGradient)"
						name="Engagement Rate"
						radius={[4, 4, 0, 0]}
					/>
					<defs>
						<linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#06b6d4" stopOpacity={0.8} />
						</linearGradient>
						<linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#ef4444" stopOpacity={0.8} />
						</linearGradient>
					</defs>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

const InfluencerTable = ({ influencers }) => {
	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Influencer Performance
			</h3>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead>
						<tr className="border-b border-gray-100">
							<th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 rounded-tl-xl">
								Creator
							</th>
							<th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50">
								Posts
							</th>
							<th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50">
								Engagement
							</th>
							<th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50">
								Sentiment
							</th>
							<th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 rounded-tr-xl">
								Followers
							</th>
						</tr>
					</thead>
					<tbody>
						{influencers.map((influencer, index) => (
							<tr
								key={index}
								className="border-b border-gray-50 hover:bg-gradient-to-r hover:from-purple-25 hover:to-pink-25 transition-all duration-200"
							>
								<td className="py-4 px-6">
									<div>
										<div className="font-semibold text-gray-900">
											{influencer.name}
										</div>
										<div className="text-sm text-gray-500 font-medium">
											{influencer.handle}
										</div>
									</div>
								</td>
								<td className="py-4 px-6 text-gray-700 font-medium">
									{influencer.posts}
								</td>
								<td className="py-4 px-6">
									<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-800">
										{influencer.engagement}%
									</span>
								</td>
								<td className="py-4 px-6">
									<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
										{influencer.sentiment}
									</span>
								</td>
								<td className="py-4 px-6 text-gray-700 font-medium">
									{influencer.followers.toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const HashtagAnalysis = ({ hashtags }) => {
	const getTrendIcon = (trend) => {
		switch (trend) {
			case 'up':
				return '📈';
			case 'down':
				return '📉';
			default:
				return '➡️';
		}
	};

	const getSentimentColor = (sentiment) => {
		if (sentiment >= 80) return 'text-emerald-600 bg-emerald-50';
		if (sentiment >= 70) return 'text-yellow-600 bg-yellow-50';
		return 'text-red-600 bg-red-50';
	};

	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Top Hashtags Performance
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{hashtags.map((hashtag, index) => (
					<div
						key={index}
						className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
					>
						<div className="flex items-center space-x-3">
							<span className="text-purple-600 font-bold text-lg">
								{hashtag.tag}
							</span>
							<span className="text-2xl">{getTrendIcon(hashtag.trend)}</span>
						</div>
						<div className="text-right">
							<div
								className={`font-bold px-3 py-1 rounded-full ${getSentimentColor(
									hashtag.sentiment
								)}`}
							>
								{hashtag.sentiment}
							</div>
							<div className="text-sm text-gray-600 font-medium mt-1">
								{hashtag.usage} uses
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const WordCloud = ({ words }) => {
	const data = words.map((word) => ({
		value: word.text,
		count: word.value,
		color: sentimentColors[word.sentiment] || sentimentColors.neutral,
	}));

	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Top Keywords & Phrases
			</h3>
			<div className="relative min-h-80 flex flex-wrap items-center justify-center gap-3 py-8 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl border border-purple-100">
				<TagCloud
					minSize={16}
					maxSize={64}
					tags={data}
					className="text-center"
					shuffle={false}
					disableRandomColor
				/>
			</div>

			{/* Legend */}
			<div className="flex justify-center items-center space-x-8 mt-6 text-sm">
				<div className="flex items-center space-x-2">
					<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-sm"></div>
					<span className="text-gray-600 font-medium">Positive</span>
				</div>
				<div className="flex items-center space-x-2">
					<div className="w-4 h-4 bg-gray-500 rounded-full shadow-sm"></div>
					<span className="text-gray-600 font-medium">Neutral</span>
				</div>
				<div className="flex items-center space-x-2">
					<div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
					<span className="text-gray-600 font-medium">Negative</span>
				</div>
			</div>
		</div>
	);
};

const AudienceInsights = ({ insights }) => {
	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<h3 className="text-xl font-bold text-gray-900 mb-6">
				Audience Insights
			</h3>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div>
					<h4 className="font-bold text-gray-800 mb-4 text-lg">
						Geographic Distribution
					</h4>
					<div className="space-y-4">
						{insights.topRegions.map((region, index) => (
							<div
								key={index}
								className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
							>
								<span className="text-sm font-semibold text-gray-700">
									{region.region}
								</span>
								<div className="flex items-center">
									<div className="w-32 bg-gray-200 rounded-full h-3 mr-3 overflow-hidden">
										<div
											className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
											style={{ width: `${region.percentage}%` }}
										></div>
									</div>
									<span className="text-sm font-bold text-gray-800 min-w-12">
										{region.percentage}%
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<h4 className="font-bold text-gray-800 mb-4 text-lg">
						Age Groups
					</h4>
					<div className="space-y-4">
						{insights.demographics.ageGroups.map((group, index) => (
							<div
								key={index}
								className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl"
							>
								<span className="text-sm font-semibold text-gray-700">
									{group.group}
								</span>
								<div className="flex items-center">
									<div className="w-32 bg-gray-200 rounded-full h-3 mr-3 overflow-hidden">
										<div
											className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
											style={{ width: `${group.percentage}%` }}
										></div>
									</div>
									<span className="text-sm font-bold text-gray-800 min-w-12">
										{group.percentage}%
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const CampaignReport = () => {
	const { id } = useParams();
	const campaign = campaignDetails[parseInt(id, 10)];

	if (!campaign) {
		return (
			<div className="text-center py-20">
				<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 max-w-md mx-auto">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Campaign Not Found
					</h2>
					<p className="text-gray-600 mb-8 text-lg">
						The requested campaign could not be found.
					</p>
					<Link
						to="/"
						className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
					>
						← Back to Dashboard
					</Link>
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
						{campaign.name}
					</h1>
					<p className="text-gray-600 text-lg font-medium mb-4">
						{new Date(campaign.startDate).toLocaleDateString()} -{' '}
						{new Date(campaign.endDate).toLocaleDateString()}
					</p>
					<div className="flex items-center space-x-3">
						{campaign.platforms.map((platform) => (
							<div
								key={platform}
								className="p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/20 hover:shadow-lg transition-all duration-200"
							>
								<img
									src={platformIcons[platform]}
									alt={platform}
									title={platform}
									className="h-8 w-8"
								/>
							</div>
						))}
					</div>
				</div>
				<button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
					Download Report
				</button>
			</div>

			{/* Key Metrics */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<MetricCard
					title="Engagement Rate"
					value={`${campaign.engagementRate}%`}
					subtitle="Campaign average"
					color="green"
				/>
				<MetricCard
					title="Total Reach"
					value={campaign.totalReach.toLocaleString()}
					subtitle="Unique users reached"
					color="blue"
				/>
				<MetricCard
					title="Completion Rate"
					value={`${campaign.completionRate}%`}
					subtitle="Video completion rate"
					color="purple"
				/>
				<MetricCard
					title="Viral Coefficient"
					value={campaign.viralCoefficient}
					subtitle="Shares per view"
					color="orange"
				/>
			</div>

			{/* Sentiment Analysis */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<SentimentPieChart sentiment={campaign.sentiment} />
				<SentimentOverTimeChart data={campaign.sentimentOverTime} />
			</div>

			{/* Word Cloud */}
			<WordCloud words={campaign.wordCloudData} />

			{/* Performance Metrics */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<ContentTypeChart data={campaign.contentTypes} />
				<PlatformComparisonChart data={campaign.platformComparison} />
			</div>

			{/* Influencer Performance */}
			<InfluencerTable influencers={campaign.influencers} />

			{/* Hashtag Analysis */}
			<HashtagAnalysis hashtags={campaign.hashtags} />

			{/* Audience Insights */}
			<AudienceInsights insights={campaign.audienceInsights} />
		</div>
	);
};

export default CampaignReport;
