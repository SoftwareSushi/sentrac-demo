import React, { useState } from 'react';
import PostDetailModal from './PostDetailModal';

// Import platform icons (these should match the imports in CampaignReport.jsx)
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

// Utility function to filter posts based on selected platforms
const filterPostsByPlatforms = (posts, selectedPlatforms) => {
	if (selectedPlatforms.length === 0) {
		return posts; // Return all posts if no filter applied
	}
	return posts.filter((post) =>
		selectedPlatforms.some(
			(platform) =>
				platform.toLowerCase() === post.platform.toLowerCase()
		)
	);
};

// Utility function to get sentiment color classes
const getSentimentClasses = (sentiment) => {
	switch (sentiment.toLowerCase()) {
		case 'positive':
			return 'bg-emerald-100 text-emerald-800 border-emerald-200';
		case 'negative':
			return 'bg-red-100 text-red-800 border-red-200';
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

const PostCard = ({ post, onViewPost }) => {
	const handleViewPost = () => {
		onViewPost(post);
	};

	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
			{/* Platform Icon */}
			<div className="absolute top-4 right-4">
				<img
					src={platformIcons[post.platform]}
					alt={post.platform}
					className="h-6 w-6"
				/>
			</div>

			{/* Post Preview Image */}
			<div className="mb-4">
				<img
					src={post.previewImage}
					alt="Post preview"
					className="w-full h-48 object-cover rounded-xl border border-gray-200"
				/>
			</div>

			{/* Creator Handle */}
			<div className="mb-3">
				<span className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors duration-200">
					{post.creator}
				</span>
			</div>

			{/* Content Type */}
			<div className="mb-3">
				<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200">
					{post.contentType}
				</span>
			</div>

			{/* Sentiment Indicator */}
			<div className="mb-4">
				<span
					className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border capitalize ${getSentimentClasses(
						post.sentiment
					)}`}
				>
					{post.sentiment}
				</span>
			</div>

			{/* Engagement Stats */}
			<div className="grid grid-cols-2 gap-3 mb-4 text-sm">
				<div className="flex items-center space-x-2">
					<img src={likeIcon} alt="likes" className="h-4 w-4" />
					<span className="text-gray-700 font-medium">
						{formatNumber(post.likes)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<img src={commentIcon} alt="comments" className="h-4 w-4" />
					<span className="text-gray-700 font-medium">
						{formatNumber(post.comments)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<img src={shareIcon} alt="shares" className="h-4 w-4" />
					<span className="text-gray-700 font-medium">
						{formatNumber(post.shares)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<img src={viewIcon} alt="views" className="h-4 w-4" />
					<span className="text-gray-700 font-medium">
						{formatNumber(post.views)}
					</span>
				</div>
			</div>

			{/* View Details Button */}
			<button
				onClick={handleViewPost}
				className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg"
			>
				View Post
			</button>
		</div>
	);
};

const CampaignPosts = ({ posts, selectedPlatforms }) => {
	const [selectedPost, setSelectedPost] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const filteredPosts = filterPostsByPlatforms(
		posts,
		selectedPlatforms
	);

	const handleViewPost = (post) => {
		setSelectedPost(post);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedPost(null);
	};

	if (!posts || posts.length === 0) {
		return (
			<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 text-center">
				<h3 className="text-xl font-bold text-gray-900 mb-4">
					No Posts Found
				</h3>
				<p className="text-gray-600">
					No posts are available for this campaign.
				</p>
			</div>
		);
	}

	return (
		<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-xl font-bold text-gray-900">
					Posts in this Campaign
				</h3>
				<span className="text-sm text-gray-600 bg-purple-50 px-3 py-1 rounded-lg">
					{filteredPosts.length} post
					{filteredPosts.length !== 1 ? 's' : ''}
				</span>
			</div>

			{filteredPosts.length === 0 ? (
				<div className="text-center py-12">
					<p className="text-gray-600 text-lg">
						No posts found for the selected platforms.
					</p>
					<p className="text-gray-500 text-sm mt-2">
						Try adjusting your platform filter above.
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredPosts.map((post) => (
						<PostCard
							key={post.id}
							post={post}
							onViewPost={handleViewPost}
						/>
					))}
				</div>
			)}

			{/* Post Detail Modal */}
			<PostDetailModal
				post={selectedPost}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</div>
	);
};

export default CampaignPosts;
