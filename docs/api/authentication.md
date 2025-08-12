---
sidebar_position: 1
---

# Authentication

Simple API key authentication for AdMesh recommendations API.

## Overview

AdMesh uses API key authentication for all requests. Get your API key from the [AdMesh Dashboard](https://dashboard.useadmesh.com) and include it in your requests.

## Quick Authentication

### HTTP Header (Recommended)

Include your API key in the `Authorization` header:

```http
POST /recommend
Host: api.useadmesh.com
Authorization: Bearer admesh_prod_abc123xyz789
Content-Type: application/json
```

### Query Parameter (Testing Only)

For testing, you can include the API key as a query parameter:

```http
POST /recommend?api_key=admesh_prod_abc123xyz789
Host: api.useadmesh.com
```

:::warning Security Warning
Never use query parameters for API keys in production. They can be logged in server logs and browser history.
:::

## Direct API Integration

### JavaScript/Node.js

```javascript
// Simple fetch request
const getRecommendations = async (query) => {
  const response = await fetch('https://api.useadmesh.com/recommend', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer admesh_prod_abc123xyz789',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      format: 'auto'
    })
  });

  const data = await response.json();
  return data.response.recommendations;
};

// Usage
const recommendations = await getRecommendations('best CRM for startups');
```

### Python

```python
import requests

def get_recommendations(query):
    response = requests.post(
        'https://api.useadmesh.com/recommend',
        headers={
            'Authorization': 'Bearer admesh_prod_abc123xyz789',
            'Content-Type': 'application/json'
        },
        json={
            'query': query,
            'format': 'auto'
        }
    )

    data = response.json()
    return data['response']['recommendations']

# Usage
recommendations = get_recommendations('best CRM for startups')
```

### Frontend Integration with UI SDK

The UI SDK displays recommendations fetched from your backend:

```tsx
// Backend API route (Next.js example)
// pages/api/recommendations.js
export default async function handler(req, res) {
  const { query } = req.body;

  const response = await fetch('https://api.useadmesh.com/recommend', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.ADMESH_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, format: 'auto' })
  });

  const data = await response.json();
  res.json(data.response.recommendations);
}

// Frontend component
import { AdMeshLayout } from 'admesh-ui-sdk';

function MyComponent() {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async (query) => {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const recs = await response.json();
    setRecommendations(recs);
  };

  return (
    <AdMeshLayout
      recommendations={recommendations}
      layout="auto"
      onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
    />
  );
}
```

## Environment Setup

Use different API keys for different environments:

### Development
```bash
# .env file
ADMESH_API_KEY=admesh_dev_abc123xyz789
ADMESH_BASE_URL=https://api.useadmesh.com
```

### Production
```bash
# .env file
ADMESH_API_KEY=admesh_prod_ghi789rst345
ADMESH_BASE_URL=https://api.useadmesh.com
```

### Environment Variables in Code

```javascript
// JavaScript/Node.js
const apiKey = process.env.ADMESH_API_KEY;
const baseUrl = process.env.ADMESH_BASE_URL || 'https://api.useadmesh.com';

const response = await fetch(`${baseUrl}/recommend`, {
  headers: { 'Authorization': `Bearer ${apiKey}` }
});
```

```python
# Python
import os

api_key = os.environ.get('ADMESH_API_KEY')
base_url = os.environ.get('ADMESH_BASE_URL', 'https://api.useadmesh.com')

response = requests.post(
    f'{base_url}/recommend',
    headers={'Authorization': f'Bearer {api_key}'}
)
```

## API Key Permissions

All AdMesh API keys provide access to:
- **Get Recommendations** - Core recommendation engine
- **Click Tracking** - Automatic click tracking via admesh_link URLs
- **Analytics** - View performance metrics in dashboard

:::info
AdMesh uses a simplified permission model. All API keys have the same permissions for the recommendation endpoint.
:::

### Testing Your API Key

```bash
# Test with cURL
curl -X POST "https://api.useadmesh.com/recommend" \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{"query": "test query", "format": "auto"}'
```

## Error Responses

### Invalid API Key

**HTTP Status:** `401 Unauthorized`

```json
{
  "detail": "Invalid API key"
}
```

**Common causes:**
- Typo in API key
- API key has been revoked
- Using wrong environment key

### Missing API Key

**HTTP Status:** `401 Unauthorized`

```json
{
  "detail": "Authorization header required"
}
```

### Invalid Request Format

**HTTP Status:** `400 Bad Request`

```json
{
  "detail": "Low intent confidence"
}
```

### Server Error

**HTTP Status:** `500 Internal Server Error`

```json
{
  "detail": "Failed to detect intent from query"
}
```

## Error Handling in Code

### JavaScript

```javascript
const getRecommendations = async (query) => {
  try {
    const response = await fetch('https://api.useadmesh.com/recommend', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, format: 'auto' })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`API Error (${response.status}): ${error.detail}`);
    }

    const data = await response.json();
    return data.response.recommendations;
  } catch (error) {
    console.error('Failed to get recommendations:', error.message);
    return []; // Return empty array as fallback
  }
};
```

### Python

```python
import requests

def get_recommendations(query):
    try:
        response = requests.post(
            'https://api.useadmesh.com/recommend',
            headers={
                'Authorization': 'Bearer your_api_key',
                'Content-Type': 'application/json'
            },
            json={'query': query, 'format': 'auto'}
        )

        response.raise_for_status()  # Raises exception for 4xx/5xx status codes

        data = response.json()
        return data['response']['recommendations']
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e.response.status_code} - {e.response.text}")
        return []
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return []
```

## Security Best Practices

### ✅ Do's

1. **Store API keys securely**
   ```bash
   # Use environment variables
   export ADMESH_API_KEY="your_api_key"

   # Or use a .env file
   echo "ADMESH_API_KEY=your_api_key" > .env
   ```

2. **Use different keys for different environments**
   ```javascript
   // Different keys for dev/prod
   const apiKey = process.env.NODE_ENV === 'production'
     ? process.env.ADMESH_PROD_API_KEY
     : process.env.ADMESH_DEV_API_KEY;
   ```

3. **Keep API keys on the server**
   ```javascript
   // ✅ Correct - API calls from backend
   // pages/api/recommendations.js
   export default async function handler(req, res) {
     const response = await fetch('https://api.useadmesh.com/recommend', {
       headers: { 'Authorization': `Bearer ${process.env.ADMESH_API_KEY}` }
     });
     res.json(await response.json());
   }
   ```

### ❌ Don'ts

1. **Never commit API keys to version control**
   ```bash
   # Add to .gitignore
   echo ".env" >> .gitignore
   echo ".env.local" >> .gitignore
   ```

2. **Don't expose keys in client-side code**
   ```javascript
   // ❌ Wrong - API key exposed in browser
   const response = await fetch('https://api.useadmesh.com/recommend', {
     headers: { 'Authorization': 'Bearer admesh_prod_abc123xyz789' }
   });

   // ✅ Correct - API key stays on server
   const response = await fetch('/api/recommendations');
   ```

## Testing Your Integration

### Test API Key

```bash
# Test with cURL
curl -X POST "https://api.useadmesh.com/recommend" \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "best CRM software",
    "format": "auto"
  }'
```

### Expected Success Response

```json
{
  "session_id": "sess_1703123456_abc123",
  "intent": {
    "categories": ["crm", "software"],
    "goal": "Find the best CRM solution",
    "llm_intent_confidence_score": 0.89
  },
  "response": {
    "summary": "Here are CRM tools that match your goal",
    "recommendations": [
      {
        "title": "HubSpot CRM",
        "reason": "Perfect for startups with free tier",
        "intent_match_score": 0.92,
        "admesh_link": "https://useadmesh.com/track?ad_id=hubspot-123",
        "ad_id": "hubspot-123",
        "product_id": "hubspot-crm"
      }
    ]
  },
  "tokens_used": 500,
  "model_used": "mistralai/mistral-7b-instruct"
}
```

## Next Steps

- **[API Reference](/api/recommendations)** - Complete API documentation
- **[Quick Start Guide](/getting-started/quick-start)** - Make your first API call
- **[UI SDK Integration](/ui-sdk/installation)** - Display recommendations with React components
- **[Get API Keys](https://dashboard.useadmesh.com)** - Obtain your API credentials
