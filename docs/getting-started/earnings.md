---
sidebar_position: 4
---

# Earnings & Revenue

Learn how to monetize your AI platform with AdMesh's revenue sharing program and calculate your earning potential.

## Revenue Sharing Overview

AdMesh provides competitive revenue sharing for AI platforms that integrate our recommendation engine. Our transparent model ensures you earn from every successful recommendation.

import { EarningsCalculatorLink } from '@site/src/components/AdMeshDemo';

<div className="earnings-calculator-box">
  <h3>Calculate Your Earnings Potential</h3>
  <p>Get an instant estimate of your revenue potential based on your platform's traffic, user engagement, and conversion rates.</p>
  <EarningsCalculatorLink variant="button" text="Open Earnings Calculator" />
</div>

## How Revenue Sharing Works

### Revenue Distribution Model

AdMesh uses a performance-based revenue sharing model:

- **User/Platform**: 60-80% (based on subscription tier)
- **AdMesh**: 20-40% (platform maintenance and operations)

### Subscription Tier Benefits

| Tier | Revenue Share | Monthly Requests | Additional Benefits |
|------|---------------|------------------|-------------------|
| **Free** | 60% | 100,000 | Basic analytics |
| **Pro** | 70% | 1,000,000 | Advanced analytics, priority support |
| **Enterprise** | 80% | Unlimited | Custom integrations, dedicated support |

## Earning Mechanisms

### 1. Click-Through Revenue (CPC)
Earn when users click on recommended products through AdMesh links:
- **Rate**: $0.10 - $2.50 per click (varies by product category)
- **Payment**: Based on verified clicks with fraud protection
- **Tracking**: Real-time click attribution and analytics

### 2. Conversion Revenue (CPA)
Earn commission when users complete actions (purchases, sign-ups):
- **Rate**: 5% - 25% of transaction value
- **Payment**: After successful conversion confirmation
- **Tracking**: End-to-end conversion attribution

### 3. Impression Revenue (CPM)
Earn from recommendation displays in high-traffic applications:
- **Rate**: $0.50 - $5.00 per 1,000 impressions
- **Payment**: Based on verified impressions
- **Tracking**: View-through attribution and engagement metrics

## Maximizing Your Earnings

### Best Practices

#### 1. Strategic Placement
- **Contextual integration** - Place recommendations where users naturally seek solutions
- **Conversation flow** - Integrate recommendations into natural conversation points
- **Visual prominence** - Use UI components that draw appropriate attention

#### 2. Content Optimization
- **Relevant queries** - Ensure recommendation requests match user intent
- **Quality filtering** - Use trust scores to show only high-quality recommendations
- **Personalization** - Leverage user context for better matching

#### 3. Performance Monitoring
- **Analytics tracking** - Monitor click-through and conversion rates
- **A/B testing** - Test different placement strategies and UI components
- **User feedback** - Collect and analyze user satisfaction with recommendations

### Technical Implementation

#### High-Converting Integration Patterns

```python
# Contextual recommendation with high conversion potential
response = client.recommend.get_recommendations(
    query=user_query,
    format="auto",
    max_recommendations=3,
    min_trust_score=0.8,  # Higher quality recommendations
    include_free_tier=True,  # Include accessible options
    user_context={
        "industry": "saas",
        "company_size": "startup",
        "budget_range": "low"
    }
)
```

#### Revenue-Optimized UI Components

```tsx
// Use product cards for higher engagement
<AdMeshProductCard
  recommendations={recommendations}
  showPricing={true}
  showFeatures={true}
  onProductClick={(adId, admeshLink) => {
    // Track click for revenue attribution
    analytics.track('recommendation_click', { adId });
    window.open(admeshLink, '_blank');
  }}
/>
```

## Payment & Reporting

### Payment Schedule
- **Frequency**: Monthly payments on the 15th
- **Minimum**: $50 minimum payout threshold
- **Methods**: Bank transfer, PayPal, Stripe
- **Currency**: USD, EUR, GBP supported

### Revenue Analytics

Access detailed earnings reports in your dashboard:

#### Real-Time Metrics
- **Live earnings** - Current month revenue tracking
- **Click performance** - CTR and conversion rates
- **Top recommendations** - Best-performing products
- **Geographic insights** - Revenue by region

#### Historical Reports
- **Monthly summaries** - Detailed revenue breakdowns
- **Trend analysis** - Performance over time
- **Comparative metrics** - Month-over-month growth
- **Export options** - CSV and PDF reports

### Tax Considerations

#### For US-Based Platforms
- **1099 forms** - Issued for earnings over $600/year
- **Tax reporting** - Revenue is considered business income
- **Deductions** - Platform costs may be deductible

#### For International Platforms
- **Local compliance** - Follow your country's tax regulations
- **Currency conversion** - Payments in local currency when possible
- **Documentation** - Detailed invoices provided for tax purposes

## Getting Started with Monetization

### Step 1: Set Up Tracking
Ensure proper analytics tracking is configured:

```python
# Enable revenue tracking
client = Admesh(
    api_key=os.environ.get("ADMESH_API_KEY"),
    enable_analytics=True,
    track_conversions=True
)
```

### Step 2: Optimize Placement
Use our earnings calculator to identify optimal placement strategies for your platform.

### Step 3: Monitor Performance
Track your earnings and optimize based on performance data:

<div className="feature-box feature-box--tip">
  <h4>Performance Optimization</h4>
  <p>Use the earnings calculator to model different scenarios and optimize your integration for maximum revenue.</p>
  <EarningsCalculatorLink variant="link" text="Calculate Different Scenarios" />
</div>

## Support & Resources

### Getting Help
- **Revenue questions**: [revenue@useadmesh.com](mailto:revenue@useadmesh.com)
- **Technical support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- **Partnership inquiries**: [partnerships@useadmesh.com](mailto:partnerships@useadmesh.com)

### Additional Resources
- **[API Documentation](/api/authentication)** - Technical integration guides
- **[UI Components](/ui-sdk/installation)** - Revenue-optimized UI components
- **[Best Practices](/examples/ai-assistant)** - Implementation examples

---

Ready to start earning? [Calculate your potential revenue](https://useadmesh.com/agents/earnings-calculator) and begin your integration today!
