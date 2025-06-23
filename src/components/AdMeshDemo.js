import React from 'react';

// Demo data for recommendations
const demoRecommendation = {
  ad_id: 'demo-1',
  product_id: 'stripe-demo',
  title: 'Stripe Payment Processing',
  reason: 'Accept payments online with Stripe\'s developer-friendly APIs and comprehensive payment solutions.',
  features: [
    'Accept 135+ payment methods',
    'Global payment processing',
    'Advanced fraud protection',
    'Real-time analytics dashboard'
  ],
  pricing: 'Starting at 2.9% + 30¢ per transaction',
  intent_match_score: 0.92,
  url: 'https://stripe.com',
  admesh_link: 'https://useadmesh.com/redirect/stripe-demo',
  keywords: ['payment', 'processing', 'api'],
  has_free_tier: false,
  trial_days: 7
};

const demoRecommendations = [
  {
    ad_id: 'demo-1',
    product_id: 'stripe-demo',
    title: 'Stripe Payment Processing',
    reason: 'Accept payments online with developer-friendly APIs.',
    features: ['135+ payment methods', 'Global processing', 'Fraud protection'],
    pricing: '2.9% + 30¢ per transaction',
    intent_match_score: 0.92,
    url: 'https://stripe.com',
    admesh_link: 'https://useadmesh.com/redirect/stripe-demo',
    keywords: ['payment', 'processing', 'api'],
    has_free_tier: false,
    trial_days: 7
  },
  {
    ad_id: 'demo-2',
    product_id: 'vercel-demo',
    title: 'Vercel Deployment Platform',
    reason: 'Deploy your frontend applications with zero configuration.',
    features: ['Instant deployments', 'Global CDN', 'Automatic HTTPS'],
    pricing: 'Free tier available',
    intent_match_score: 0.88,
    url: 'https://vercel.com',
    admesh_link: 'https://useadmesh.com/redirect/vercel-demo',
    keywords: ['deployment', 'hosting', 'frontend'],
    has_free_tier: true,
    trial_days: 0
  },
  {
    ad_id: 'demo-3',
    product_id: 'figma-demo',
    title: 'Figma Design Tool',
    reason: 'Collaborative interface design tool for teams.',
    features: ['Real-time collaboration', 'Design systems', 'Prototyping'],
    pricing: 'Free for personal use',
    intent_match_score: 0.85,
    url: 'https://figma.com',
    admesh_link: 'https://useadmesh.com/redirect/figma-demo',
    keywords: ['design', 'collaboration', 'prototyping'],
    has_free_tier: true,
    trial_days: 30
  }
];

const handleClick = (adId, admeshLink) => {
  console.log('Demo click:', adId, admeshLink);
  // In real implementation, this would open the link
  if (admeshLink) {
    window.open(admeshLink, '_blank');
  }
};

// Fallback components that mimic the real SDK components
const SimpleAdFallback = ({ recommendation }) => (
  <div style={{
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <p style={{ margin: '0', color: '#333', fontSize: '14px' }}>
      Looking for payment solutions for your business? Try <strong>{recommendation.title}</strong>
    </p>
    <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
      powered by AdMesh
    </p>
  </div>
);

export const OneLineAdDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
    <h4>One Line Ad Demo</h4>
    <SimpleAdFallback recommendation={demoRecommendation} />
  </div>
);

const ProductCardFallback = ({ recommendation }) => (
  <div style={{
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '400px'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', color: '#333' }}>{recommendation.title}</h3>
      <span style={{ backgroundColor: '#e8f5e8', color: '#2d5a2d', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
        {Math.round(recommendation.intent_match_score * 100)}% match
      </span>
    </div>
    <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '14px' }}>
      {recommendation.reason}
    </p>
    <div style={{ marginBottom: '12px' }}>
      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#333' }}>Features:</h4>
      <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '13px', color: '#666' }}>
        {recommendation.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <p style={{ margin: '0', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
      {recommendation.pricing}
    </p>
  </div>
);

export const ProductCardDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
    <h4>Product Card Demo</h4>
    <ProductCardFallback recommendation={demoRecommendation} />
  </div>
);

const ConversationSummaryFallback = ({ recommendations, summary }) => (
  <div style={{
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
      <p style={{ margin: '0', fontSize: '14px', color: '#333', fontStyle: 'italic' }}>
        "{summary}"
      </p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {recommendations.slice(0, 3).map((rec, index) => (
        <div key={index} style={{ padding: '8px', border: '1px solid #eee', borderRadius: '4px', cursor: 'pointer' }}>
          <strong style={{ fontSize: '14px', color: '#333' }}>{rec.title}</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#666' }}>{rec.reason}</p>
        </div>
      ))}
    </div>
  </div>
);

export const ConversationSummaryDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
    <h4>Conversation Summary Demo</h4>
    <ConversationSummaryFallback
      recommendations={demoRecommendations}
      summary="Based on our conversation about payment processing and deployment solutions, here are some recommended tools that could help with your project:"
    />
  </div>
);

const CitationFallback = ({ recommendation }) => (
  <div style={{
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#333', lineHeight: '1.5' }}>
      For payment processing, many developers choose {recommendation.title}<sup style={{ color: '#0066cc', cursor: 'pointer' }}>¹</sup> due to its comprehensive API and global reach.
    </p>
    <div style={{ borderTop: '1px solid #eee', paddingTop: '12px' }}>
      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#333' }}>References:</h4>
      <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
        <sup>¹</sup> {recommendation.title} - {recommendation.reason}
      </p>
    </div>
  </div>
);

export const CitationDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
    <h4>Citation Demo</h4>
    <CitationFallback recommendation={demoRecommendation} />
  </div>
);

const FloatingRecommendationsFallback = ({ recommendations }) => (
  <div style={{
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '280px',
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
      <h4 style={{ margin: '0', fontSize: '14px', color: '#333' }}>Recommended Tools</h4>
      <button style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' }}>×</button>
    </div>
    <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
      {recommendations.slice(0, 2).map((rec, index) => (
        <div key={index} style={{ padding: '4px 0', borderBottom: index === 0 ? '1px solid #eee' : 'none' }}>
          <strong>{rec.title}</strong> - {rec.reason.split('.')[0]}
        </div>
      ))}
    </div>
  </div>
);

export const FloatingRecommendationsDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9', position: 'relative', height: '200px' }}>
    <h4>Floating Recommendations Demo</h4>
    <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px 0' }}>
      This demo shows how floating recommendations appear contextually. In a real implementation, these would appear based on user behavior and conversation context.
    </p>
    <FloatingRecommendationsFallback recommendations={demoRecommendations} />
  </div>
);

const SidebarFallback = ({ recommendations, title }) => (
  <div style={{
    width: '250px',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#333' }}>{title}</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {recommendations.slice(0, 3).map((rec, index) => (
        <div key={index} style={{ padding: '8px', border: '1px solid #eee', borderRadius: '4px', cursor: 'pointer' }}>
          <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>{rec.title}</div>
          <div style={{ fontSize: '11px', color: '#666' }}>{rec.reason.split('.')[0]}</div>
        </div>
      ))}
    </div>
  </div>
);

export const SidebarDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
    <h4>Sidebar Demo</h4>
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ flex: '1', padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#333' }}>Main Content Area</h4>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          This represents your main application content. The sidebar recommendations appear alongside without interrupting the user's workflow.
        </p>
      </div>
      <SidebarFallback recommendations={demoRecommendations} title="Recommended Tools" />
    </div>
  </div>
);

const LayoutFallback = ({ recommendations }) => (
  <div style={{
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
      {recommendations.slice(0, 3).map((rec, index) => (
        <div key={index} style={{ padding: '12px', border: '1px solid #eee', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h3 style={{ margin: '0', fontSize: '16px', color: '#333' }}>{rec.title}</h3>
            <span style={{ backgroundColor: '#e8f5e8', color: '#2d5a2d', padding: '2px 6px', borderRadius: '3px', fontSize: '11px' }}>
              {Math.round(rec.intent_match_score * 100)}%
            </span>
          </div>
          <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#666' }}>{rec.reason}</p>
          <p style={{ margin: '0', fontSize: '12px', fontWeight: 'bold', color: '#333' }}>{rec.pricing}</p>
        </div>
      ))}
    </div>
  </div>
);

export const LayoutDemo = () => (
  <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
    <h4>Layout Demo</h4>
    <LayoutFallback recommendations={demoRecommendations} />
  </div>
);

export const AllDemosContainer = () => (
  <div>
    <OneLineAdDemo />
    <ProductCardDemo />
    <ConversationSummaryDemo />
    <CitationDemo />
    <FloatingRecommendationsDemo />
    <SidebarDemo />
    <LayoutDemo />
  </div>
);

export default AllDemosContainer;
