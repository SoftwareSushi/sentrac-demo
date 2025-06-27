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

const MetricCard = ({ title, value, subtitle, color = 'blue' }) => {
	const colorClasses = {
		blue: 'bg-blue-50 text-blue-700',
		green: 'bg-green-50 text-green-700',
		red: 'bg-red-50 text-red-700',
		gray: 'bg-gray-50 text-gray-700',
	};

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
			<div className={`text-3xl font-bold ${colorClasses[color]} mb-1`}>
				{value}
			</div>
			{subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
		</div>
	);
};

const SentimentPieChart = ({ sentiment }) => {
	const data = [
		{
			name: 'Positive',
			value: sentiment.positive,
			color: sentimentColors.positive,
		},
		{
			name: 'Neutral',
			value: sentiment.neutral,
			color: sentimentColors.neutral,
		},
		{
			name: 'Negative',
			value: sentiment.negative,
			color: sentimentColors.negative,
		},
	];

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
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
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Sentiment Trend Over Time
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="positive"
						stroke={sentimentColors.positive}
						strokeWidth={2}
					/>
					<Line
						type="monotone"
						dataKey="neutral"
						stroke={sentimentColors.neutral}
						strokeWidth={2}
					/>
					<Line
						type="monotone"
						dataKey="negative"
						stroke={sentimentColors.negative}
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

const ContentTypeChart = ({ data }) => {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Content Type Effectiveness
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="type" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="sentiment" fill="#3B82F6" name="Sentiment Score" />
					<Bar
						dataKey="engagement"
						fill="#10B981"
						name="Engagement Rate"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

const PlatformComparisonChart = ({ data }) => {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Platform Performance Comparison
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="platform" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="sentiment" fill="#8B5CF6" name="Sentiment Score" />
					<Bar
						dataKey="engagement"
						fill="#F59E0B"
						name="Engagement Rate"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

const InfluencerTable = ({ influencers }) => {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Influencer Performance
			</h3>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead>
						<tr className="border-b border-gray-200">
							<th className="text-left py-3 px-4 font-medium text-gray-700">
								Creator
							</th>
							<th className="text-left py-3 px-4 font-medium text-gray-700">
								Posts
							</th>
							<th className="text-left py-3 px-4 font-medium text-gray-700">
								Engagement
							</th>
							<th className="text-left py-3 px-4 font-medium text-gray-700">
								Sentiment
							</th>
							<th className="text-left py-3 px-4 font-medium text-gray-700">
								Followers
							</th>
						</tr>
					</thead>
					<tbody>
						{influencers.map((influencer, index) => (
							<tr key={index} className="border-b border-gray-100">
								<td className="py-3 px-4">
									<div>
										<div className="font-medium text-gray-900">
											{influencer.name}
										</div>
										<div className="text-sm text-gray-500">
											{influencer.handle}
										</div>
									</div>
								</td>
								<td className="py-3 px-4 text-gray-700">
									{influencer.posts}
								</td>
								<td className="py-3 px-4">
									<span className="text-green-600 font-medium">
										{influencer.engagement}%
									</span>
								</td>
								<td className="py-3 px-4">
									<span className="text-blue-600 font-medium">
										{influencer.sentiment}
									</span>
								</td>
								<td className="py-3 px-4 text-gray-700">
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
		if (sentiment >= 80) return 'text-green-600';
		if (sentiment >= 70) return 'text-yellow-600';
		return 'text-red-600';
	};

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Top Hashtags Performance
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{hashtags.map((hashtag, index) => (
					<div
						key={index}
						className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
					>
						<div className="flex items-center">
							<span className="text-blue-600 font-medium">
								{hashtag.tag}
							</span>
							<span className="ml-2 text-lg">
								{getTrendIcon(hashtag.trend)}
							</span>
						</div>
						<div className="text-right">
							<div
								className={`font-medium ${getSentimentColor(
									hashtag.sentiment
								)}`}
							>
								{hashtag.sentiment}
							</div>
							<div className="text-sm text-gray-600">
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
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Top Keywords & Phrases
			</h3>
			<div className="flex flex-wrap gap-2 justify-center py-8">
				{words.map((word, index) => {
					const fontSize = Math.max(12, Math.min(32, word.value / 3));
					const color =
						word.sentiment === 'positive'
							? 'text-green-600'
							: word.sentiment === 'negative'
							? 'text-red-600'
							: 'text-gray-600';

					return (
						<span
							key={index}
							className={`${color} font-medium hover:opacity-70 transition-opacity`}
							style={{ fontSize: `${fontSize}px` }}
						>
							{word.text}
						</span>
					);
				})}
			</div>
		</div>
	);
};

const AudienceInsights = ({ insights }) => {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">
				Audience Insights
			</h3>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div>
					<h4 className="font-medium text-gray-700 mb-3">
						Geographic Distribution
					</h4>
					<div className="space-y-2">
						{insights.topRegions.map((region, index) => (
							<div key={index} className="flex items-center justify-between">
								<span className="text-sm text-gray-600">{region.region}</span>
								<div className="flex items-center">
									<div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
										<div
											className="bg-blue-600 h-2 rounded-full"
											style={{ width: `${region.percentage}%` }}
										></div>
									</div>
									<span className="text-sm font-medium">
										{region.percentage}%
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<h4 className="font-medium text-gray-700 mb-3">Age Groups</h4>
					<div className="space-y-2">
						{insights.demographics.ageGroups.map((group, index) => (
							<div key={index} className="flex items-center justify-between">
								<span className="text-sm text-gray-600">{group.group}</span>
								<div className="flex items-center">
									<div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
										<div
											className="bg-green-600 h-2 rounded-full"
											style={{ width: `${group.percentage}%` }}
										></div>
									</div>
									<span className="text-sm font-medium">
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
	const campaign = campaignDetails[parseInt(id)];

	if (!campaign) {
		return (
			<div className="text-center py-12">
				<h2 className="text-2xl font-bold text-gray-900 mb-2">
					Campaign Not Found
				</h2>
				<p className="text-gray-600 mb-4">
					The requested campaign could not be found.
				</p>
				<Link to="/" className="text-blue-600 hover:text-blue-700">
					← Back to Dashboard
				</Link>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="flex justify-between items-start">
				<div>
					<Link
						to="/"
						className="text-blue-600 hover:text-blue-700 mb-2 inline-block"
					>
						← Back to Dashboard
					</Link>
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						{campaign.name}
					</h1>
					<p className="text-gray-600">
						{new Date(campaign.startDate).toLocaleDateString()} -{' '}
						{new Date(campaign.endDate).toLocaleDateString()}
					</p>
					<div className="flex items-center space-x-2 mt-2">
						{campaign.platforms.map((platform) => (
							<span key={platform} className="text-2xl" title={platform}>
								{platform === 'instagram'
									? '📷'
									: platform === 'tiktok'
									? '🎵'
									: '📹'}
							</span>
						))}
					</div>
				</div>
				<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
					Download Report
				</button>
			</div>

			{/* Key Metrics */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
					color="gray"
				/>
				<MetricCard
					title="Viral Coefficient"
					value={campaign.viralCoefficient}
					subtitle="Shares per view"
					color="red"
				/>
			</div>

			{/* Sentiment Analysis */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<SentimentPieChart sentiment={campaign.sentiment} />
				<SentimentOverTimeChart data={campaign.sentimentOverTime} />
			</div>

			{/* Word Cloud */}
			<WordCloud words={campaign.wordCloudData} />

			{/* Performance Metrics */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
