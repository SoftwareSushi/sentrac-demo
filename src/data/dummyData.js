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
        },
        posts: [
            {
                id: 1,
                platform: "instagram",
                creator: "@sarahjfit",
                contentType: "Reel",
                url: "https://instagram.com/p/summer-vibes-1",
                likes: 15420,
                comments: 312,
                shares: 89,
                views: 45600,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 2,
                platform: "tiktok",
                creator: "@mikechenofficial",
                contentType: "Video",
                url: "https://tiktok.com/@mikechenofficial/video/7123456789",
                likes: 28750,
                comments: 892,
                shares: 456,
                views: 125400,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 3,
                platform: "youtube",
                creator: "@emmastyle",
                contentType: "Video",
                url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
                likes: 8965,
                comments: 543,
                shares: 234,
                views: 67800,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 4,
                platform: "instagram",
                creator: "@alexfitness",
                contentType: "Image",
                url: "https://instagram.com/p/summer-workout-4",
                likes: 12300,
                comments: 187,
                shares: 45,
                views: 23400,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 5,
                platform: "tiktok",
                creator: "@sarahjfit",
                contentType: "Video",
                url: "https://tiktok.com/@sarahjfit/video/7123456790",
                likes: 19800,
                comments: 432,
                shares: 298,
                views: 89600,
                sentiment: "neutral",
                previewImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 6,
                platform: "instagram",
                creator: "@emmastyle",
                contentType: "Story",
                url: "https://instagram.com/stories/emmastyle/123456789",
                likes: 5600,
                comments: 89,
                shares: 23,
                views: 12800,
                sentiment: "negative",
                previewImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 7,
                platform: "youtube",
                creator: "@mikechenofficial",
                contentType: "Video",
                url: "https://youtube.com/watch?v=abc123def456",
                likes: 11200,
                comments: 678,
                shares: 189,
                views: 45300,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 8,
                platform: "instagram",
                creator: "@alexfitness",
                contentType: "Carousel",
                url: "https://instagram.com/p/summer-collection-8",
                likes: 9870,
                comments: 234,
                shares: 67,
                views: 18900,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            }
        ]
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
            { text: "school", value: 50, sentiment: "positive" },
            { text: "supplies", value: 45, sentiment: "positive" },
            { text: "backtoschool", value: 40, sentiment: "positive" },
            { text: "homework", value: 42, sentiment: "negative" },
            { text: "books", value: 35, sentiment: "neutral" },
            { text: "classroom", value: 30, sentiment: "neutral" },
            { text: "teacher", value: 25, sentiment: "neutral" },
            { text: "learning", value: 20, sentiment: "neutral" },
            { text: "education", value: 15, sentiment: "neutral" },
            { text: "schoolsupplies", value: 10, sentiment: "neutral" },
            { text: "backtoschool", value: 5, sentiment: "neutral" },
            { text: "exams", value: 30, sentiment: "negative" },
            { text: "tired", value: 25, sentiment: "negative" },
            { text: "sleepy", value: 20, sentiment: "negative" },
            { text: "sleep", value: 15, sentiment: "negative" },
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
        },
        posts: [
            {
                id: 9,
                platform: "instagram",
                creator: "@liamschooltips",
                contentType: "Reel",
                url: "https://instagram.com/p/back-to-school-1",
                likes: 8900,
                comments: 156,
                shares: 34,
                views: 23400,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 10,
                platform: "youtube",
                creator: "@oliviareads",
                contentType: "Video",
                url: "https://youtube.com/watch?v=study-tips-123",
                likes: 6750,
                comments: 289,
                shares: 78,
                views: 34500,
                sentiment: "neutral",
                previewImage: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 11,
                platform: "twitter",
                creator: "@noahscience",
                contentType: "Post",
                url: "https://twitter.com/noahscience/status/123456789",
                likes: 2340,
                comments: 89,
                shares: 156,
                views: 8900,
                sentiment: "neutral",
                previewImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 12,
                platform: "instagram",
                creator: "@oliviareads",
                contentType: "Story",
                url: "https://instagram.com/stories/oliviareads/234567890",
                likes: 4560,
                comments: 67,
                shares: 23,
                views: 11200,
                sentiment: "negative",
                previewImage: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            }
        ]
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
            { text: "gift", value: 70, sentiment: "positive" },
            { text: "christmas", value: 65, sentiment: "positive" },
            { text: "holiday", value: 60, sentiment: "positive" },
            { text: "giftguide", value: 60, sentiment: "positive" },
            { text: "shopping", value: 55, sentiment: "neutral" },
            { text: "deals", value: 50, sentiment: "positive" },
            { text: "festive", value: 45, sentiment: "positive" },
            { text: "family", value: 40, sentiment: "positive" },
            { text: "expensive", value: 35, sentiment: "negative" },
            { text: "crowded", value: 25, sentiment: "negative" }
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
        },
        posts: [
            {
                id: 13,
                platform: "tiktok",
                creator: "@sofiab",
                contentType: "Video",
                url: "https://tiktok.com/@sofiab/video/7123456791",
                likes: 35600,
                comments: 1240,
                shares: 678,
                views: 156800,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 14,
                platform: "instagram",
                creator: "@danieltalks",
                contentType: "Carousel",
                url: "https://instagram.com/p/holiday-gifts-14",
                likes: 18900,
                comments: 456,
                shares: 123,
                views: 42300,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 15,
                platform: "youtube",
                creator: "@sofiab",
                contentType: "Video",
                url: "https://youtube.com/watch?v=holiday-shopping-tips",
                likes: 12400,
                comments: 789,
                shares: 234,
                views: 67800,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1512389098783-66b81f86e199?auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 16,
                platform: "instagram",
                creator: "@danieltalks",
                contentType: "Reel",
                url: "https://instagram.com/p/christmas-deals-16",
                likes: 14500,
                comments: 234,
                shares: 89,
                views: 32100,
                sentiment: "neutral",
                previewImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&h=400"
            }
        ]
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
            { text: "fitness", value: 50, sentiment: "positive" },
            { text: "exhausted", value: 45, sentiment: "neutral" },
            { text: "tough", value: 35, sentiment: "neutral" },
            { text: "newyear", value: 40, sentiment: "positive" },
            { text: "newyearnewme", value: 35, sentiment: "positive" }
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
        },
        posts: [
            {
                id: 17,
                platform: "youtube",
                creator: "@gracefitness",
                contentType: "Video",
                url: "https://youtube.com/watch?v=new-year-workout",
                likes: 9800,
                comments: 345,
                shares: 156,
                views: 45600,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 18,
                platform: "instagram",
                creator: "@ethanworkout",
                contentType: "Reel",
                url: "https://instagram.com/p/fitness-challenge-18",
                likes: 11200,
                comments: 189,
                shares: 67,
                views: 28900,
                sentiment: "positive",
                previewImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 19,
                platform: "tiktok",
                creator: "@gracefitness",
                contentType: "Video",
                url: "https://tiktok.com/@gracefitness/video/7123456792",
                likes: 23400,
                comments: 567,
                shares: 234,
                views: 78900,
                sentiment: "neutral",
                previewImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            },
            {
                id: 20,
                platform: "instagram",
                creator: "@ethanworkout",
                contentType: "Image",
                url: "https://instagram.com/p/motivation-monday-20",
                likes: 7800,
                comments: 123,
                shares: 34,
                views: 16700,
                sentiment: "negative",
                previewImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400"
            }
        ]
    }
};

export const sentimentColors = {
    positive: "#10B981", // Green
    neutral: "#6B7280",  // Gray
    negative: "#EF4444"  // Red
}; 