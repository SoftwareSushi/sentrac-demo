// Dummy data for SenTrac demo

export const campaigns = [
    {
        id: 1,
        name: "Summer Vibes Collection",
        platforms: ["instagram", "tiktok", "youtube"],
        startDate: "2024-06-01",
        endDate: "2024-07-15",
        sentiment: {
            positive: 78,
            neutral: 15,
            negative: 7
        },
        engagementRate: 4.2,
        status: "completed"
    },
    {
        id: 2,
        name: "Back to School Campaign",
        platforms: ["instagram", "youtube", "twitter"],
        startDate: "2024-08-01",
        endDate: "2024-09-30",
        sentiment: {
            positive: 65,
            neutral: 25,
            negative: 10
        },
        engagementRate: 3.8,
        status: "active"
    },
    {
        id: 3,
        name: "Holiday Gift Guide",
        platforms: ["tiktok", "instagram"],
        startDate: "2024-11-01",
        endDate: "2024-12-25",
        sentiment: {
            positive: 82,
            neutral: 12,
            negative: 6
        },
        engagementRate: 5.1,
        status: "active"
    },
    {
        id: 4,
        name: "New Year Fitness Challenge",
        platforms: ["youtube", "instagram", "tiktok"],
        startDate: "2024-12-26",
        endDate: "2025-02-28",
        sentiment: {
            positive: 71,
            neutral: 20,
            negative: 9
        },
        engagementRate: 3.9,
        status: "scheduled"
    }
];

export const campaignDetails = {
    1: {
        ...campaigns[0],
        totalReach: 2450000,
        totalViews: 5230000,
        completionRate: 67,
        viralCoefficient: 1.8,
        sentimentOverTime: [
            { date: "2024-06-01", positive: 72, neutral: 18, negative: 10 },
            { date: "2024-06-08", positive: 75, neutral: 16, negative: 9 },
            { date: "2024-06-15", positive: 79, neutral: 14, negative: 7 },
            { date: "2024-06-22", positive: 81, neutral: 13, negative: 6 },
            { date: "2024-06-29", positive: 78, neutral: 15, negative: 7 },
            { date: "2024-07-06", positive: 80, neutral: 14, negative: 6 },
            { date: "2024-07-13", positive: 78, neutral: 15, negative: 7 }
        ],
        contentTypes: [
            { type: "Reels", sentiment: 82, engagement: 4.8, count: 45 },
            { type: "Stories", sentiment: 75, engagement: 3.2, count: 120 },
            { type: "Posts", sentiment: 71, engagement: 2.9, count: 35 },
            { type: "Videos", sentiment: 85, engagement: 5.4, count: 28 },
            { type: "Livestreams", sentiment: 88, engagement: 6.1, count: 8 }
        ],
        platformComparison: [
            { platform: "Instagram", sentiment: 79, engagement: 4.5, reach: 1200000 },
            { platform: "TikTok", sentiment: 82, engagement: 5.1, reach: 800000 },
            { platform: "YouTube", sentiment: 75, engagement: 3.8, reach: 450000 }
        ],
        influencers: [
            {
                name: "Sarah Johnson",
                handle: "@sarahjfit",
                posts: 12,
                engagement: 5.2,
                sentiment: 84,
                followers: 450000
            },
            {
                name: "Mike Chen",
                handle: "@mikechenofficial",
                posts: 8,
                engagement: 4.1,
                sentiment: 78,
                followers: 320000
            },
            {
                name: "Emma Davis",
                handle: "@emmastyle",
                posts: 15,
                engagement: 3.9,
                sentiment: 75,
                followers: 280000
            },
            {
                name: "Alex Rodriguez",
                handle: "@alexfitness",
                posts: 10,
                engagement: 4.8,
                sentiment: 81,
                followers: 380000
            }
        ],
        hashtags: [
            { tag: "#summervibes", sentiment: 85, usage: 2840, trend: "up" },
            { tag: "#fashion", sentiment: 78, usage: 1920, trend: "stable" },
            { tag: "#lifestyle", sentiment: 72, usage: 1560, trend: "up" },
            { tag: "#ootd", sentiment: 80, usage: 1340, trend: "down" },
            { tag: "#summer2024", sentiment: 83, usage: 1180, trend: "up" },
            { tag: "#style", sentiment: 76, usage: 980, trend: "stable" }
        ],
        wordCloudData: [
            { text: "amazing", value: 89, sentiment: "positive" },
            { text: "love", value: 76, sentiment: "positive" },
            { text: "beautiful", value: 65, sentiment: "positive" },
            { text: "perfect", value: 58, sentiment: "positive" },
            { text: "stunning", value: 52, sentiment: "positive" },
            { text: "gorgeous", value: 47, sentiment: "positive" },
            { text: "okay", value: 23, sentiment: "neutral" },
            { text: "average", value: 18, sentiment: "neutral" },
            { text: "meh", value: 15, sentiment: "neutral" },
            { text: "expensive", value: 12, sentiment: "negative" },
            { text: "overpriced", value: 8, sentiment: "negative" }
        ],
        audienceInsights: {
            topRegions: [
                { region: "United States", percentage: 45, sentiment: 79 },
                { region: "Canada", percentage: 18, sentiment: 82 },
                { region: "United Kingdom", percentage: 12, sentiment: 75 },
                { region: "Australia", percentage: 8, sentiment: 84 },
                { region: "Germany", percentage: 7, sentiment: 71 },
                { region: "Other", percentage: 10, sentiment: 77 }
            ],
            demographics: {
                ageGroups: [
                    { group: "18-24", percentage: 35, sentiment: 81 },
                    { group: "25-34", percentage: 42, sentiment: 78 },
                    { group: "35-44", percentage: 18, sentiment: 74 },
                    { group: "45+", percentage: 5, sentiment: 69 }
                ],
                gender: [
                    { gender: "Female", percentage: 68, sentiment: 80 },
                    { gender: "Male", percentage: 30, sentiment: 75 },
                    { gender: "Other", percentage: 2, sentiment: 78 }
                ]
            }
        }
    }
};

export const platformIcons = {
    instagram: "📷",
    tiktok: "🎵",
    youtube: "📹",
    twitter: "🐦",
    facebook: "📘",
    linkedin: "💼"
};

export const sentimentColors = {
    positive: "#10B981", // Green
    neutral: "#6B7280",  // Gray
    negative: "#EF4444"  // Red
}; 