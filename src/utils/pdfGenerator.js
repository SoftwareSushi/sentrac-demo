import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

/**
 * Generates and downloads a PDF report for a campaign
 * @param {Object} campaign - The campaign data object
 */
export const generateCampaignPDF = async (campaign) => {
    if (!campaign) return;

    const doc = new jsPDF();
    let yPosition = 20;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;

    // Color palette
    const colors = {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        gray: '#6B7280',
        lightGray: '#F3F4F6',
        darkGray: '#374151'
    };

    // Helper function to check if we need a new page
    const checkPageBreak = (requiredHeight = 30) => {
        if (yPosition + requiredHeight > pageHeight - 30) {
            doc.addPage();
            yPosition = 20;
            return true;
        }
        return false;
    };

    // Enhanced text helper with better formatting
    const addText = (text, fontSize = 12, isBold = false, color = '#000000', align = 'left') => {
        checkPageBreak();
        doc.setFontSize(fontSize);
        doc.setFont(undefined, isBold ? 'bold' : 'normal');
        doc.setTextColor(color);

        const x = align === 'center' ? pageWidth / 2 : margin;
        doc.text(text, x, yPosition, { align });
        yPosition += fontSize * 0.6 + 5;
    };

    // Add colored section header
    const addSectionHeader = (title, color = colors.primary) => {
        checkPageBreak(25);

        // Background rectangle
        doc.setFillColor(color);
        doc.roundedRect(margin, yPosition - 8, contentWidth, 20, 3, 3, 'F');

        // White text
        doc.setTextColor('#FFFFFF');
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(title, margin + 10, yPosition + 4);

        yPosition += 25;
    };

    // Add metric card
    const addMetricCard = (title, value, x, y, width = 80, height = 35) => {
        // Card background
        doc.setFillColor(colors.lightGray);
        doc.roundedRect(x, y, width, height, 2, 2, 'F');

        // Border
        doc.setDrawColor(colors.gray);
        doc.setLineWidth(0.5);
        doc.roundedRect(x, y, width, height, 2, 2, 'S');

        // Title
        doc.setTextColor(colors.gray);
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        doc.text(title, x + 5, y + 10);

        // Value
        doc.setTextColor(colors.darkGray);
        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.text(value, x + 5, y + 25);
    };

    // Create charts as images
    const createChartImage = (chartData, chartType = 'pie', width = 300, height = 200) => {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');

            new Chart(ctx, {
                type: chartType,
                data: chartData,
                options: {
                    responsive: false,
                    plugins: {
                        legend: {
                            position: chartType === 'pie' ? 'right' : 'top',
                            labels: {
                                boxWidth: 12,
                                fontSize: 10
                            }
                        }
                    },
                    scales: chartType !== 'pie' ? {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#e5e7eb' }
                        },
                        x: {
                            grid: { color: '#e5e7eb' }
                        }
                    } : {}
                }
            });

            setTimeout(() => {
                const imageData = canvas.toDataURL('image/png');
                resolve(imageData);
            }, 500);
        });
    };

    // Progress bar helper
    const addProgressBar = (label, percentage, y, color = colors.primary) => {
        const barWidth = 120;
        const barHeight = 8;
        const x = margin + 80;

        // Label
        doc.setTextColor(colors.darkGray);
        doc.setFontSize(10);
        doc.text(label, margin, y + 5);

        // Background bar
        doc.setFillColor('#E5E7EB');
        doc.roundedRect(x, y, barWidth, barHeight, 2, 2, 'F');

        // Progress bar
        doc.setFillColor(color);
        doc.roundedRect(x, y, (barWidth * percentage) / 100, barHeight, 2, 2, 'F');

        // Percentage text
        doc.setTextColor(colors.darkGray);
        doc.setFontSize(9);
        doc.text(`${percentage}%`, x + barWidth + 5, y + 5);

        return y + 15;
    };

    // Generate PDF content with enhanced visuals
    const generateContent = async () => {
        // Header with logo area
        doc.setFillColor(colors.primary);
        doc.rect(0, 0, pageWidth, 60, 'F');

        // Title
        addText('SENTRAC', 32, true, '#FFFFFF', 'center');
        yPosition -= 10;
        addText('Campaign Analytics Report', 16, false, '#FFFFFF', 'center');
        yPosition = 70;

        // Campaign name and dates
        addText(campaign.name, 24, true, colors.darkGray, 'center');
        addText(
            `${new Date(campaign.startDate).toLocaleDateString()} - ${new Date(
                campaign.endDate
            ).toLocaleDateString()}`,
            12, false, colors.gray, 'center'
        );
        yPosition += 10;

        // Key Metrics Cards
        addSectionHeader('KEY PERFORMANCE METRICS');
        const metricsY = yPosition;
        addMetricCard('Engagement Rate', `${campaign.engagementRate}%`, margin, metricsY);
        addMetricCard('Total Reach', campaign.totalReach.toLocaleString(), margin + 90, metricsY);
        addMetricCard('Completion Rate', `${campaign.completionRate}%`, margin, metricsY + 45);
        addMetricCard('Viral Coefficient', `${campaign.viralCoefficient}`, margin + 90, metricsY + 45);
        yPosition = metricsY + 100;

        // Sentiment Analysis with Chart
        addSectionHeader('SENTIMENT ANALYSIS', colors.success);

        // Create sentiment pie chart
        const sentimentChartData = {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [campaign.sentiment.positive, campaign.sentiment.neutral, campaign.sentiment.negative],
                backgroundColor: [colors.success, colors.gray, colors.danger],
                borderWidth: 2,
                borderColor: '#FFFFFF'
            }]
        };

        try {
            const chartImage = await createChartImage(sentimentChartData, 'doughnut', 250, 150);
            doc.addImage(chartImage, 'PNG', margin, yPosition, 80, 50);
        } catch (error) {
            console.warn('Could not generate chart:', error);
        }

        // Sentiment percentages
        yPosition += 10;
        addText('Sentiment Breakdown:', 12, true, colors.darkGray);
        yPosition = addProgressBar('Positive', campaign.sentiment.positive, yPosition, colors.success);
        yPosition = addProgressBar('Neutral', campaign.sentiment.neutral, yPosition, colors.gray);
        yPosition = addProgressBar('Negative', campaign.sentiment.negative, yPosition, colors.danger);
        yPosition += 20;

        // Platform Performance
        addSectionHeader('PLATFORM PERFORMANCE', colors.secondary);

        // Platform performance table
        const platformData = campaign.platformComparison.map(platform => [
            platform.platform.toUpperCase(),
            platform.reach.toLocaleString(),
            `${platform.engagement}%`,
            `${platform.sentiment}`
        ]);

        autoTable(doc, {
            head: [['Platform', 'Reach', 'Engagement', 'Sentiment']],
            body: platformData,
            startY: yPosition,
            styles: {
                fontSize: 10,
                cellPadding: 5
            },
            headStyles: {
                fillColor: [139, 92, 246],
                textColor: 255,
                fontStyle: 'bold'
            },
            alternateRowStyles: {
                fillColor: [248, 250, 252]
            },
            margin: { left: margin, right: margin }
        });

        yPosition = doc.lastAutoTable.finalY + 20;

        // Top Influencers
        checkPageBreak(80);
        addSectionHeader('TOP INFLUENCERS', colors.warning);

        const influencerData = campaign.influencers.slice(0, 5).map(influencer => [
            influencer.name,
            influencer.handle,
            influencer.posts.toString(),
            `${influencer.engagement}%`,
            influencer.followers.toLocaleString()
        ]);

        autoTable(doc, {
            head: [['Name', 'Handle', 'Posts', 'Engagement', 'Followers']],
            body: influencerData,
            startY: yPosition,
            styles: {
                fontSize: 9,
                cellPadding: 4
            },
            headStyles: {
                fillColor: [245, 158, 11],
                textColor: 255,
                fontStyle: 'bold'
            },
            alternateRowStyles: {
                fillColor: [254, 252, 232]
            },
            margin: { left: margin, right: margin }
        });

        yPosition = doc.lastAutoTable.finalY + 20;

        // Top Hashtags
        checkPageBreak(60);
        addSectionHeader('TOP HASHTAGS', colors.primary);

        const hashtagData = campaign.hashtags.slice(0, 8).map(hashtag => [
            hashtag.tag,
            hashtag.sentiment.toString(),
            hashtag.usage.toLocaleString()
        ]);

        autoTable(doc, {
            head: [['Hashtag', 'Sentiment Score', 'Usage Count']],
            body: hashtagData,
            startY: yPosition,
            styles: {
                fontSize: 9,
                cellPadding: 4
            },
            headStyles: {
                fillColor: [139, 92, 246],
                textColor: 255,
                fontStyle: 'bold'
            },
            alternateRowStyles: {
                fillColor: [245, 243, 255]
            },
            margin: { left: margin, right: margin }
        });

        yPosition = doc.lastAutoTable.finalY + 20;

        // Audience Insights
        checkPageBreak(80);
        addSectionHeader('AUDIENCE INSIGHTS', colors.success);

        // Geographic distribution
        addText('Geographic Distribution', 12, true, colors.darkGray);
        yPosition += 5;
        campaign.audienceInsights.topRegions.forEach((region) => {
            yPosition = addProgressBar(region.region, region.percentage, yPosition, colors.success);
        });

        yPosition += 10;
        addText('Age Demographics', 12, true, colors.darkGray);
        yPosition += 5;
        campaign.audienceInsights.demographics.ageGroups.forEach((group) => {
            yPosition = addProgressBar(group.group, group.percentage, yPosition, colors.secondary);
        });

        // Footer
        yPosition = pageHeight - 20;
        doc.setFillColor(colors.lightGray);
        doc.rect(0, yPosition - 10, pageWidth, 30, 'F');

        doc.setFontSize(10);
        doc.setTextColor(colors.gray);
        doc.text('Generated by Sentrac Analytics Platform', margin, yPosition);
        doc.text(new Date().toLocaleDateString(), pageWidth - margin - 30, yPosition);
    };

    // Execute the content generation
    await generateContent();

    // Download the PDF
    doc.save(`${campaign.name.replace(/\s+/g, '_')}_Report.pdf`);
}; 