import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Import platform icons
import instagramIcon from '../assets/icons/instagram-icon.png';
import tiktokIcon from '../assets/icons/tiktok-icon.png';
import youtubeIcon from '../assets/icons/youtube-icon.png';
import twitterIcon from '../assets/icons/twitter-icon.png';
import facebookIcon from '../assets/icons/facebook-icon.png';
import linkedinIcon from '../assets/icons/linkedin-icon.png';

// Import engagement icons
import likeIcon from '../assets/icons/like-icon.png';
import commentIcon from '../assets/icons/comment-icon.png';
import shareIcon from '../assets/icons/share-icon.png';
import viewIcon from '../assets/icons/view-icon.png';

// Platform icons mapping
const platformIcons = {
	instagram: instagramIcon,
	tiktok: tiktokIcon,
	youtube: youtubeIcon,
	twitter: twitterIcon,
	facebook: facebookIcon,
	linkedin: linkedinIcon,
};

// Utility function to get sentiment color classes
const getSentimentClasses = (sentiment) => {
	switch (sentiment.toLowerCase()) {
		case 'positive':
			return 'bg-emerald-100 text-emerald-800 border-emerald-200';
		case 'negative':
			return 'bg-red-100 text-red-800 border-red-200';
		case 'neutral':
			return 'bg-yellow-100 text-yellow-800 border-yellow-200';
		default:
			return 'bg-gray-100 text-gray-800 border-gray-200';
	}
};

// Utility function to format numbers
const formatNumber = (num) => {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + 'M';
	} else if (num >= 1000) {
		return (num / 1000).toFixed(1) + 'K';
	}
	return num.toString();
};

// Utility function to format date
const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};

// Dummy data for post details
const generatePostDetailData = (post) => ({
	...post,
	postedDate: '2024-01-15T10:30:00Z',
	hashtags: [
		'#fitness',
		'#wellness',
		'#transformation',
		'#motivation',
		'#health',
		'#lifestyle',
	],
	emojiSentiment: {
		positive: { count: 1247, emojis: ['👍', '😂', '❤️', '🔥', '💪'] },
		negative: { count: 89, emojis: ['😡', '👎', '😢', '😤', '🙄'] },
	},
	comments: [
		{
			id: 1,
			username: '@fitnessqueen22',
			text:
				'This is absolutely amazing! Your transformation is so inspiring 💪✨',
			sentiment: 'positive',
			likes: 145,
			repliesCount: 3,
			replies: [
				{
					id: 11,
					username: '@motivationmax',
					text: 'Totally agree! Such dedication 🙌',
					sentiment: 'positive',
					likes: 23,
				},
				{
					id: 12,
					username: '@healthyhabits',
					text: 'Goals right here! 🎯',
					sentiment: 'positive',
					likes: 18,
				},
				{
					id: 13,
					username: '@fitlife_coach',
					text: 'Keep pushing! The results speak for themselves 💯',
					sentiment: 'positive',
					likes: 31,
				},
			],
		},
		{
			id: 2,
			username: '@skeptical_sam',
			text:
				'Looks too good to be true. Probably edited or fake progress.',
			sentiment: 'negative',
			likes: 12,
			repliesCount: 2,
			replies: [
				{
					id: 21,
					username: '@realresults',
					text: 'Why so negative? Let people celebrate their wins 🤷‍♀️',
					sentiment: 'neutral',
					likes: 67,
				},
				{
					id: 22,
					username: '@truthseeker99',
					text:
						'I have to agree, the lighting and angles make a huge difference',
					sentiment: 'neutral',
					likes: 8,
				},
			],
		},
		{
			id: 3,
			username: '@newbie_lifter',
			text:
				'What was your workout routine? I need to start my journey too!',
			sentiment: 'neutral',
			likes: 89,
			repliesCount: 1,
			replies: [
				{
					id: 31,
					username: '@coach_mike',
					text: 'DM me for a personalized plan! 📧',
					sentiment: 'neutral',
					likes: 15,
				},
			],
		},
		{
			id: 4,
			username: '@fitness_fanatic',
			text: 'Incredible work! How long did this transformation take? 🤔',
			sentiment: 'positive',
			likes: 234,
			repliesCount: 0,
			replies: [],
		},
		{
			id: 5,
			username: '@doubter_dave',
			text:
				'This kind of stuff promotes unrealistic expectations. Not healthy.',
			sentiment: 'negative',
			likes: 45,
			repliesCount: 4,
			replies: [
				{
					id: 51,
					username: '@body_positive',
					text: "Everyone's journey is different. Let's be supportive! 💕",
					sentiment: 'positive',
					likes: 78,
				},
				{
					id: 52,
					username: '@realistic_goals',
					text: 'I see your point, but progress is progress',
					sentiment: 'neutral',
					likes: 23,
				},
				{
					id: 53,
					username: '@trainer_tony',
					text:
						'With proper guidance and consistency, these results are achievable',
					sentiment: 'positive',
					likes: 56,
				},
				{
					id: 54,
					username: '@health_advocate',
					text:
						'The important thing is being healthy, not just looking good',
					sentiment: 'neutral',
					likes: 34,
				},
			],
		},
		{
			id: 6,
			username: '@inspiration_seeker',
			text: 'This gives me hope! Starting my journey tomorrow 💪🔥',
			sentiment: 'positive',
			likes: 156,
			repliesCount: 2,
			replies: [
				{
					id: 61,
					username: '@support_squad',
					text: 'You got this! One day at a time 🌟',
					sentiment: 'positive',
					likes: 42,
				},
				{
					id: 62,
					username: '@accountability_buddy',
					text: "Let's do this together! Following your journey",
					sentiment: 'positive',
					likes: 28,
				},
			],
		},
	],
});

const CommentReply = ({ reply }) => (
	<div className="ml-8 mt-3 p-3 bg-gray-50 rounded-lg border-l-2 border-purple-200">
		<div className="flex items-start justify-between">
			<div className="flex-1">
				<div className="flex items-center space-x-2 mb-1">
					<span className="font-semibold text-purple-600 text-sm">
						{reply.username}
					</span>
					<span
						className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getSentimentClasses(
							reply.sentiment
						)}`}
					>
						{reply.sentiment}
					</span>
				</div>
				<p className="text-gray-700 text-sm leading-relaxed">
					{reply.text}
				</p>
			</div>
		</div>
		<div className="flex items-center mt-2">
			<img src={likeIcon} alt="likes" className="h-3 w-3 mr-1" />
			<span className="text-xs text-gray-500">{reply.likes}</span>
		</div>
	</div>
);

const CommentItem = ({ comment }) => {
	const [showReplies, setShowReplies] = useState(false);

	return (
		<div className="p-4 border-b border-gray-100 last:border-b-0">
			<div className="flex items-start justify-between mb-2">
				<div className="flex-1">
					<div className="flex items-center space-x-2 mb-2">
						<span className="font-semibold text-purple-600">
							{comment.username}
						</span>
						<span
							className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getSentimentClasses(
								comment.sentiment
							)}`}
						>
							{comment.sentiment}
						</span>
					</div>
					<p className="text-gray-700 leading-relaxed">{comment.text}</p>
				</div>
			</div>

			<div className="flex items-center space-x-4 mt-3">
				<div className="flex items-center space-x-1">
					<img src={likeIcon} alt="likes" className="h-4 w-4" />
					<span className="text-sm text-gray-500">{comment.likes}</span>
				</div>

				{comment.repliesCount > 0 && (
					<button
						onClick={() => setShowReplies(!showReplies)}
						className="text-sm text-purple-600 hover:text-purple-700 font-medium"
					>
						{showReplies ? 'Hide' : 'Show'} {comment.repliesCount}{' '}
						{comment.repliesCount === 1 ? 'reply' : 'replies'}
					</button>
				)}
			</div>

			{showReplies &&
				comment.replies.map((reply) => (
					<CommentReply key={reply.id} reply={reply} />
				))}
		</div>
	);
};

const PostDetailModal = ({ post, isOpen, onClose }) => {
	const [visibleComments, setVisibleComments] = useState(3);
	const [postDetailData, setPostDetailData] = useState(null);

	React.useEffect(() => {
		if (post && isOpen) {
			setPostDetailData(generatePostDetailData(post));
			// Prevent body scroll when modal is open
			document.body.style.overflow = 'hidden';
		} else {
			// Restore body scroll when modal is closed
			document.body.style.overflow = 'unset';
		}

		// Cleanup function to restore scroll when component unmounts
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [post, isOpen]);

	if (!isOpen || !postDetailData) return null;

	const loadMoreComments = () => {
		setVisibleComments((prev) =>
			Math.min(prev + 3, postDetailData.comments.length)
		);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return ReactDOM.createPortal(
		<div
			className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm flex items-center justify-center p-4"
			style={{
				zIndex: 9999,
				position: 'fixed',
				margin: 0,
				padding: '16px',
			}}
			onClick={handleBackdropClick}
		>
			<div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
				{/* Header with Close Button */}
				<div className="flex items-center justify-between p-6 border-b border-gray-200">
					<h2 className="text-2xl font-bold text-gray-900">
						Post Details
					</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{/* Scrollable Content */}
				<div className="overflow-y-auto max-h-[calc(90vh-80px)]">
					{/* Top Section */}
					<div className="p-6 border-b border-gray-200">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							{/* Left: Post Preview */}
							<div>
								<img
									src={postDetailData.previewImage}
									alt="Post preview"
									className="w-full h-96 object-cover rounded-xl border border-gray-200"
								/>
							</div>

							{/* Right: Post Info */}
							<div className="space-y-4">
								{/* Platform Icon & Creator */}
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<img
											src={platformIcons[postDetailData.platform]}
											alt={postDetailData.platform}
											className="h-8 w-8"
										/>
										<span className="text-2xl font-bold text-purple-600">
											{postDetailData.creator}
										</span>
									</div>
								</div>

								{/* Content Type */}
								<div>
									<span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200">
										{postDetailData.contentType}
									</span>
								</div>

								{/* Sentiment Badge */}
								<div>
									<span
										className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border capitalize ${getSentimentClasses(
											postDetailData.sentiment
										)}`}
									>
										{postDetailData.sentiment} Sentiment
									</span>
								</div>

								{/* Post URL */}
								<div>
									<a
										href={postDetailData.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg"
									>
										<svg
											className="w-4 h-4 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
										View Original Post
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Engagement Stats Section */}
					<div className="p-6 border-b border-gray-200">
						<h3 className="text-lg font-bold text-gray-900 mb-4">
							Engagement Statistics
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							<div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200">
								<div className="flex items-center space-x-2 mb-1">
									<img src={likeIcon} alt="likes" className="h-5 w-5" />
									<span className="text-sm font-medium text-gray-600">
										Likes
									</span>
								</div>
								<div className="text-2xl font-bold text-pink-600">
									{formatNumber(postDetailData.likes)}
								</div>
							</div>

							<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
								<div className="flex items-center space-x-2 mb-1">
									<img src={commentIcon} alt="comments" className="h-5 w-5" />
									<span className="text-sm font-medium text-gray-600">
										Comments
									</span>
								</div>
								<div className="text-2xl font-bold text-blue-600">
									{formatNumber(postDetailData.comments.length)}
								</div>
							</div>

							<div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
								<div className="flex items-center space-x-2 mb-1">
									<img src={shareIcon} alt="shares" className="h-5 w-5" />
									<span className="text-sm font-medium text-gray-600">
										Shares
									</span>
								</div>
								<div className="text-2xl font-bold text-green-600">
									{formatNumber(postDetailData.shares)}
								</div>
							</div>

							<div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
								<div className="flex items-center space-x-2 mb-1">
									<img src={viewIcon} alt="views" className="h-5 w-5" />
									<span className="text-sm font-medium text-gray-600">
										Views
									</span>
								</div>
								<div className="text-2xl font-bold text-purple-600">
									{formatNumber(postDetailData.views)}
								</div>
							</div>

							<div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
								<div className="flex items-center space-x-2 mb-1">
									<svg
										className="w-5 h-5 text-orange-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span className="text-sm font-medium text-gray-600">
										Posted
									</span>
								</div>
								<div className="text-sm font-bold text-orange-600">
									{formatDate(postDetailData.postedDate)}
								</div>
							</div>
						</div>
					</div>

					{/* Hashtags & Emoji Analysis */}
					<div className="p-6 border-b border-gray-200">
						<h3 className="text-lg font-bold text-gray-900 mb-4">
							Content Analysis
						</h3>

						{/* Hashtags */}
						<div className="mb-6">
							<h4 className="text-md font-semibold text-gray-700 mb-3">
								Top Hashtags Used
							</h4>
							<div className="flex flex-wrap gap-2">
								{postDetailData.hashtags.map((hashtag, index) => (
									<span
										key={index}
										className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200"
									>
										{hashtag}
									</span>
								))}
							</div>
						</div>

						{/* Emoji Sentiment */}
						<div>
							<h4 className="text-md font-semibold text-gray-700 mb-3">
								Emoji Sentiment Analysis
							</h4>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-medium text-emerald-700">
											Positive Reactions
										</span>
										<span className="text-2xl font-bold text-emerald-600">
											{formatNumber(
												postDetailData.emojiSentiment.positive.count
											)}
										</span>
									</div>
									<div className="flex space-x-1">
										{postDetailData.emojiSentiment.positive.emojis.map(
											(emoji, index) => (
												<span key={index} className="text-lg">
													{emoji}
												</span>
											)
										)}
									</div>
								</div>

								<div className="bg-red-50 p-4 rounded-xl border border-red-200">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-medium text-red-700">
											Negative Reactions
										</span>
										<span className="text-2xl font-bold text-red-600">
											{formatNumber(
												postDetailData.emojiSentiment.negative.count
											)}
										</span>
									</div>
									<div className="flex space-x-1">
										{postDetailData.emojiSentiment.negative.emojis.map(
											(emoji, index) => (
												<span key={index} className="text-lg">
													{emoji}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Comments Section */}
					<div className="p-6">
						<h3 className="text-lg font-bold text-gray-900 mb-4">
							Comments ({postDetailData.comments.length})
						</h3>

						<div className="bg-gray-50 rounded-xl border border-gray-200">
							{postDetailData.comments
								.slice(0, visibleComments)
								.map((comment) => (
									<CommentItem key={comment.id} comment={comment} />
								))}

							{visibleComments < postDetailData.comments.length && (
								<div className="p-4 text-center border-t border-gray-200">
									<button
										onClick={loadMoreComments}
										className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
									>
										Load More Comments (
										{postDetailData.comments.length - visibleComments}{' '}
										remaining)
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default PostDetailModal;
