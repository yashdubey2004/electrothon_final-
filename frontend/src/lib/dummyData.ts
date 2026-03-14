export interface KPIMetric {
    id: string;
    title: string;
    value: string;
    trend: string;
    trendType: 'positive' | 'negative' | 'neutral';
    description: string;
}

export interface InventoryFile {
    id: string;
    name: string;
    type: 'Structured' | 'Unstructured';
    size: string;
    uploadTime: string;
    status: 'Vectorized' | 'Queued' | 'Processing';
    cortexTags: string[];
}

export interface RiskForecastPoint {
    month: string;
    actualRevenue: number | null;
    forecastRevenue: number | null;
}

export interface ChatMessage {
    id: string;
    sender: 'user' | 'ai';
    timestamp: string;
    message: string;
}

export interface BoardroomDialogue {
    id: string;
    speaker: 'CEO' | 'CTO AI' | 'CMO AI' | 'CFO AI';
    timestamp: string;
    text: string;
    isCurrentlySpeaking: boolean;
}

export const kpiMetrics: KPIMetric[] = [
    {
        id: '1',
        title: 'Monthly Recurring Revenue',
        value: '$2.4M',
        trend: '+12.4%',
        trendType: 'positive',
        description: 'vs. last month'
    },
    {
        id: '2',
        title: 'Active Support Tickets',
        value: '142',
        trend: '-8.1%',
        trendType: 'positive', // Lower tickets is positive
        description: 'avg. resolution 4h'
    },
    {
        id: '3',
        title: 'Cloud Infrastructure Cost',
        value: '$48.2k',
        trend: '+15.2%',
        trendType: 'negative', // Higher cost is negative
        description: 'spike in Frankfurt'
    },
    {
        id: '4',
        title: 'System Uptime',
        value: '99.98%',
        trend: '+0.02%',
        trendType: 'positive',
        description: 'stable operations'
    }
];

export const inventoryFiles: InventoryFile[] = [
    {
        id: 'inv-1',
        name: 'Q3_Sales_Performance.csv',
        type: 'Structured',
        size: '2.4 MB',
        uploadTime: '2 hours ago',
        status: 'Vectorized',
        cortexTags: ['Sales', 'Q3', 'Performance']
    },
    {
        id: 'inv-2',
        name: 'Global_Logistics_Matrix.pdf',
        type: 'Unstructured',
        size: '14.8 MB',
        uploadTime: '5 hours ago',
        status: 'Vectorized',
        cortexTags: ['Logistics', 'Global', 'Risk']
    },
    {
        id: 'inv-3',
        name: 'EU_GDPR_Compliance_Audit.pdf',
        type: 'Unstructured',
        size: '8.2 MB',
        uploadTime: 'Yesterday',
        status: 'Processing',
        cortexTags: ['Compliance', 'EU', 'Legal']
    },
    {
        id: 'inv-4',
        name: 'Customer_Churn_Neural_Logs.json',
        type: 'Structured',
        size: '156 KB',
        uploadTime: '2 mins ago',
        status: 'Queued',
        cortexTags: ['Churn', 'Neural', 'Logs']
    },
    {
        id: 'inv-5',
        name: 'Frankfurt_Node_Latency_Logs.zip',
        type: 'Structured',
        size: '42.1 MB',
        uploadTime: '10 mins ago',
        status: 'Processing',
        cortexTags: ['Latency', 'Node', 'Logs']
    }
];

export const riskForecastData: RiskForecastPoint[] = [
    { month: 'Jan', actualRevenue: 2400000, forecastRevenue: null },
    { month: 'Feb', actualRevenue: 2500000, forecastRevenue: null },
    { month: 'Mar', actualRevenue: 2450000, forecastRevenue: null },
    { month: 'Apr', actualRevenue: 2600000, forecastRevenue: 2600000 },
    { month: 'May', actualRevenue: null, forecastRevenue: 2100000 },
    { month: 'Jun', actualRevenue: null, forecastRevenue: 1950000 }
];

export const warRoomTranscript: ChatMessage[] = [
    {
        id: 'wr-1',
        sender: 'user',
        timestamp: '10:42 AM',
        message: "Analyze our Q3 inventory risk against the projected West Coast logistics disruption. Is Snowflake flagging any critical anomalies in the supplier vector space?"
    },
    {
        id: 'wr-2',
        sender: 'ai',
        timestamp: '10:42 AM',
        message: "Processing Query against Snowflake Cortex...\n\nI've identified a 12.4% variance in lead times for Tier-1 electronics suppliers. The vector embeddings show a significant semantic shift in 'logistics_reliability' scores for regional hubs. Current risk rating is CRITICAL."
    },
    {
        id: 'wr-3',
        sender: 'user',
        timestamp: '10:43 AM',
        message: "Initiate the reroute simulation and notify the logistics VP. Include the cost-benefit delta from the Cortex analysis."
    }
];

export const boardroomDebate: BoardroomDialogue[] = [
    {
        id: 'bd-1',
        speaker: 'CTO AI',
        timestamp: '14:02:11',
        text: "From a technical infrastructure perspective, applying a global 10% discount across our API endpoints will require a mid-tier re-indexing of the billing middleware. However, my data suggests that the 'churn' isn't just pricing—it's latency in our Frankfurt region. If we lower the price but don't address the 40ms lag, we're just subsidizing a failing experience.",
        isCurrentlySpeaking: false
    },
    {
        id: 'bd-2',
        speaker: 'CMO AI',
        timestamp: '14:01:45',
        text: "Latency is a footnote in the marketing narrative. Europe is feeling the squeeze of local competitors undercutting us on seat-based pricing. A 10% reduction isn't enough; we need an 'EU-Specific Enterprise Tier' that bundles premium support.",
        isCurrentlySpeaking: false
    },
    {
        id: 'bd-3',
        speaker: 'CFO AI',
        timestamp: '14:03:02',
        text: "We must be cautious. A 10% discount across the board impacts our margins by $4.2M annually. If the CMO's growth hypothesis fails to materialize in Q4, we're looking at a severe burn rate escalation. I recommend a staggered rollout starting with Tier-2 clients.",
        isCurrentlySpeaking: true
    }
];
