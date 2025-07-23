---
sidebar_position: 3
---

# Quick Start Guide

Make your first API call in 2 minutes.

## Prerequisites

- API key from [dashboard.useadmesh.com](https://dashboard.useadmesh.com)

## Step 1: Remove PII (if needed)

If your user query contains personal information, clean it first:

```bash
curl -X POST https://api.useadmesh.com/v1/pii/remove \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "I am John Doe from john@example.com looking for best laptop for programming"
  }'
```

Response:
```json
{
  "cleaned_text": "I am looking for best laptop for programming",
  "pii_detected": true,
  "pii_types": ["name", "email"]
}
```

## Step 2: Get Recommendations

Use the cleaned text (or original query if no PII) to get recommendations:

```bash
curl -X POST https://api.useadmesh.com/v1/recommendations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "best laptop for programming",
    "agent_id": "your_agent_id"
  }'
```

## Complete JavaScript Example

```javascript
async function getRecommendations(userQuery, agentId) {
  // Step 1: Remove PII if needed
  const piiResponse = await fetch('https://api.useadmesh.com/v1/pii/remove', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: userQuery })
  });

  const piiData = await piiResponse.json();
  const cleanQuery = piiData.cleaned_text;

  // Step 2: Get recommendations
  const response = await fetch('https://api.useadmesh.com/v1/recommendations', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: cleanQuery,
      agent_id: agentId
    })
  });

  const data = await response.json();
  return data.recommendations;
}

// Usage
const recommendations = await getRecommendations(
  "I am John from john@example.com looking for best laptop for programming",
  "your_agent_id"
);
```

## Complete Python Example

```python
import requests

def get_recommendations(user_query, agent_id):
    # Step 1: Remove PII if needed
    pii_response = requests.post(
        'https://api.useadmesh.com/v1/pii/remove',
        headers={'Authorization': 'Bearer YOUR_API_KEY'},
        json={'text': user_query}
    )

    pii_data = pii_response.json()
    clean_query = pii_data['cleaned_text']

    # Step 2: Get recommendations
    response = requests.post(
        'https://api.useadmesh.com/v1/recommendations',
        headers={'Authorization': 'Bearer YOUR_API_KEY'},
        json={
            'query': clean_query,
            'agent_id': agent_id
        }
    )

    return response.json()['recommendations']

# Usage
recommendations = get_recommendations(
    "I am John from john@example.com looking for best laptop for programming",
    "your_agent_id"
)
```

## Response Format

```json
{
  "recommendations": [
    {
      "offer_title": "MacBook Pro M3",
      "offer_description": "Professional laptop for developers",
      "offer_url": "https://useadmesh.com/track/abc123",
      "match_reason": "Perfect for programming with M3 chip"
    }
  ]
}
```

## Next Steps

- [API Reference](../api/authentication) - Complete API documentation
- [React Components](../ui-sdk/installation) - UI components
- [Examples](../examples/ai-assistant) - More examples
