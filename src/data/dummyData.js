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
    },
    2: {
        ...campaigns[1],
        totalReach: 1980000,
        totalViews: 4100000,
        completionRate: 58,
        viralCoefficient: 1.6,
        sentimentOverTime: [
            { date: "2024-08-01", positive: 60, neutral: 28, negative: 12 },
            { date: "2024-08-08", positive: 63, neutral: 26, negative: 11 },
            { date: "2024-08-15", positive: 65, neutral: 25, negative: 10 },
            { date: "2024-08-22", positive: 66, neutral: 24, negative: 10 },
            { date: "2024-08-29", positive: 65, neutral: 25, negative: 10 },
            { date: "2024-09-05", positive: 64, neutral: 25, negative: 11 },
            { date: "2024-09-12", positive: 65, neutral: 25, negative: 10 }
        ],
        contentTypes: [
            { type: "Reels", sentiment: 68, engagement: 3.9, count: 30 },
            { type: "Stories", sentiment: 61, engagement: 2.7, count: 110 },
            { type: "Posts", sentiment: 59, engagement: 2.5, count: 28 },
            { type: "Videos", sentiment: 70, engagement: 4.2, count: 20 },
            { type: "Livestreams", sentiment: 73, engagement: 4.8, count: 6 }
        ],
        platformComparison: [
            { platform: "Instagram", sentiment: 65, engagement: 3.8, reach: 980000 },
            { platform: "YouTube", sentiment: 62, engagement: 3.5, reach: 560000 },
            { platform: "Twitter", sentiment: 59, engagement: 3.1, reach: 440000 }
        ],
        influencers: [
            {
                name: "Liam Carter",
                handle: "@liamschooltips",
                posts: 10,
                engagement: 4.0,
                sentiment: 67,
                followers: 290000
            },
            {
                name: "Olivia White",
                handle: "@oliviareads",
                posts: 7,
                engagement: 3.6,
                sentiment: 64,
                followers: 210000
            },
            {
                name: "Noah Green",
                handle: "@noahscience",
                posts: 9,
                engagement: 3.2,
                sentiment: 61,
                followers: 250000
            }
        ],
        hashtags: [
            { tag: "#backtoschool", sentiment: 68, usage: 2210, trend: "up" },
            { tag: "#study", sentiment: 64, usage: 1400, trend: "stable" },
            { tag: "#supplies", sentiment: 60, usage: 900, trend: "up" }
        ],
        wordCloudData: [
            { text: "study", value: 60, sentiment: "positive" },
            { text: "homework", value: 42, sentiment: "neutral" },
            { text: "exams", value: 30, sentiment: "negative" }
        ],
        audienceInsights: {
            topRegions: [
                { region: "United States", percentage: 40, sentiment: 65 },
                { region: "Canada", percentage: 20, sentiment: 68 },
                { region: "United Kingdom", percentage: 15, sentiment: 63 },
                { region: "Australia", percentage: 10, sentiment: 66 },
                { region: "Other", percentage: 15, sentiment: 60 }
            ],
            demographics: {
                ageGroups: [
                    { group: "18-24", percentage: 45, sentiment: 66 },
                    { group: "25-34", percentage: 38, sentiment: 64 },
                    { group: "35-44", percentage: 14, sentiment: 60 },
                    { group: "45+", percentage: 3, sentiment: 58 }
                ],
                gender: [
                    { gender: "Female", percentage: 60, sentiment: 65 },
                    { gender: "Male", percentage: 38, sentiment: 63 },
                    { gender: "Other", percentage: 2, sentiment: 62 }
                ]
            }
        }
    },
    3: {
        ...campaigns[2],
        totalReach: 2750000,
        totalViews: 5800000,
        completionRate: 69,
        viralCoefficient: 1.9,
        sentimentOverTime: [
            { date: "2024-11-01", positive: 78, neutral: 14, negative: 8 },
            { date: "2024-11-08", positive: 80, neutral: 13, negative: 7 },
            { date: "2024-11-15", positive: 82, neutral: 12, negative: 6 },
            { date: "2024-11-22", positive: 83, neutral: 11, negative: 6 },
            { date: "2024-11-29", positive: 82, neutral: 12, negative: 6 },
            { date: "2024-12-06", positive: 83, neutral: 12, negative: 5 },
            { date: "2024-12-13", positive: 82, neutral: 12, negative: 6 }
        ],
        contentTypes: [
            { type: "Reels", sentiment: 84, engagement: 5.2, count: 40 },
            { type: "Stories", sentiment: 79, engagement: 3.5, count: 95 },
            { type: "Posts", sentiment: 76, engagement: 3.1, count: 38 },
            { type: "Videos", sentiment: 88, engagement: 5.9, count: 26 },
            { type: "Livestreams", sentiment: 90, engagement: 6.4, count: 9 }
        ],
        platformComparison: [
            { platform: "TikTok", sentiment: 85, engagement: 5.4, reach: 1100000 },
            { platform: "Instagram", sentiment: 80, engagement: 5.0, reach: 1000000 },
            { platform: "YouTube", sentiment: 78, engagement: 4.6, reach: 650000 }
        ],
        influencers: [
            {
                name: "Sofia Brown",
                handle: "@sofiab",
                posts: 14,
                engagement: 5.6,
                sentiment: 87,
                followers: 520000
            },
            {
                name: "Daniel Lee",
                handle: "@danieltalks",
                posts: 11,
                engagement: 4.7,
                sentiment: 82,
                followers: 390000
            }
        ],
        hashtags: [
            { tag: "#holidaygifts", sentiment: 88, usage: 3100, trend: "up" },
            { tag: "#christmas", sentiment: 82, usage: 2700, trend: "up" },
            { tag: "#giftguide", sentiment: 80, usage: 2400, trend: "up" }
        ],
        wordCloudData: [
            { text: "gifts", value: 75, sentiment: "positive" },
            { text: "holiday", value: 65, sentiment: "positive" },
            { text: "shopping", value: 48, sentiment: "neutral" }
        ],
        audienceInsights: {
            topRegions: [
                { region: "United States", percentage: 48, sentiment: 84 },
                { region: "Canada", percentage: 17, sentiment: 86 },
                { region: "United Kingdom", percentage: 13, sentiment: 80 },
                { region: "Germany", percentage: 8, sentiment: 78 },
                { region: "Other", percentage: 14, sentiment: 79 }
            ],
            demographics: {
                ageGroups: [
                    { group: "18-24", percentage: 38, sentiment: 85 },
                    { group: "25-34", percentage: 45, sentiment: 83 },
                    { group: "35-44", percentage: 14, sentiment: 78 },
                    { group: "45+", percentage: 3, sentiment: 75 }
                ],
                gender: [
                    { gender: "Female", percentage: 66, sentiment: 84 },
                    { gender: "Male", percentage: 32, sentiment: 81 },
                    { gender: "Other", percentage: 2, sentiment: 80 }
                ]
            }
        }
    },
    4: {
        ...campaigns[3],
        totalReach: 2150000,
        totalViews: 4700000,
        completionRate: 63,
        viralCoefficient: 1.7,
        sentimentOverTime: [
            { date: "2024-12-26", positive: 70, neutral: 21, negative: 9 },
            { date: "2025-01-02", positive: 71, neutral: 20, negative: 9 },
            { date: "2025-01-09", positive: 72, neutral: 20, negative: 8 },
            { date: "2025-01-16", positive: 73, neutral: 19, negative: 8 },
            { date: "2025-01-23", positive: 72, neutral: 20, negative: 8 },
            { date: "2025-01-30", positive: 72, neutral: 20, negative: 8 },
            { date: "2025-02-06", positive: 71, neutral: 20, negative: 9 }
        ],
        contentTypes: [
            { type: "Reels", sentiment: 74, engagement: 4.1, count: 32 },
            { type: "Stories", sentiment: 69, engagement: 2.9, count: 100 },
            { type: "Posts", sentiment: 66, engagement: 2.6, count: 29 },
            { type: "Videos", sentiment: 78, engagement: 4.8, count: 22 },
            { type: "Livestreams", sentiment: 80, engagement: 5.2, count: 7 }
        ],
        platformComparison: [
            { platform: "YouTube", sentiment: 72, engagement: 4.0, reach: 950000 },
            { platform: "Instagram", sentiment: 70, engagement: 3.9, reach: 800000 },
            { platform: "TikTok", sentiment: 75, engagement: 4.3, reach: 400000 }
        ],
        influencers: [
            {
                name: "Grace Kim",
                handle: "@gracefitness",
                posts: 13,
                engagement: 4.3,
                sentiment: 74,
                followers: 330000
            },
            {
                name: "Ethan Patel",
                handle: "@ethanworkout",
                posts: 9,
                engagement: 3.8,
                sentiment: 71,
                followers: 290000
            }
        ],
        hashtags: [
            { tag: "#fitnesschallenge", sentiment: 75, usage: 2600, trend: "up" },
            { tag: "#newyearnewme", sentiment: 70, usage: 2100, trend: "stable" },
            { tag: "#workout", sentiment: 68, usage: 1800, trend: "up" }
        ],
        wordCloudData: [
            { text: "workout", value: 70, sentiment: "positive" },
            { text: "challenge", value: 55, sentiment: "positive" },
            { text: "tough", value: 35, sentiment: "neutral" }
        ],
        audienceInsights: {
            topRegions: [
                { region: "United States", percentage: 42, sentiment: 72 },
                { region: "Canada", percentage: 19, sentiment: 74 },
                { region: "United Kingdom", percentage: 13, sentiment: 70 },
                { region: "Australia", percentage: 9, sentiment: 73 },
                { region: "Other", percentage: 17, sentiment: 69 }
            ],
            demographics: {
                ageGroups: [
                    { group: "18-24", percentage: 40, sentiment: 73 },
                    { group: "25-34", percentage: 44, sentiment: 71 },
                    { group: "35-44", percentage: 13, sentiment: 68 },
                    { group: "45+", percentage: 3, sentiment: 65 }
                ],
                gender: [
                    { gender: "Female", percentage: 58, sentiment: 72 },
                    { gender: "Male", percentage: 40, sentiment: 70 },
                    { gender: "Other", percentage: 2, sentiment: 69 }
                ]
            }
        }
    }
};

export const sentimentColors = {
    positive: "#10B981", // Green
    neutral: "#6B7280",  // Gray
    negative: "#EF4444"  // Red
}; 