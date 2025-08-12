---
sidebar_position: 2
---

# Recommendations API

Get intelligent product recommendations with a simple API call.

## Quick Start

```bash
curl -X POST "https://api.useadmesh.com/recommend" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "best CRM for startups", "format": "auto"}'
```

<details>
<summary><strong>📋 Basic Request Format</strong></summary>

**Endpoint:** `POST https://api.useadmesh.com/recommend`

**Required Headers:**
```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**Basic Request:**
```json
{
  "query": "best CRM for startups",
  "format": "auto"
}
```

</details>

<details>
<summary><strong>⚙️ Advanced Parameters (Optional)</strong></summary>

```json
{
  "query": "best CRM for startups",
  "format": "auto",
  "previous_query": "project management tools",
  "previous_summary": "We discussed project management solutions",
  "session_id": "user_session_123",
  "is_fallback_allowed": true
}
```

</details>

## Response Format

<details>
<summary><strong>📄 Example Response</strong></summary>

```json
{
  "response": {
    "recommendations": [
      {
        "title": "HubSpot CRM",
        "reason": "Perfect for startups with excellent free tier",
        "admesh_link": "https://useadmesh.com/track?ad_id=hubspot-123",
        "pricing": "Free tier available, paid plans from $45/month",
        "features": ["Contact Management", "Deal Tracking", "Email Integration"],
        "has_free_tier": true,
        "trial_days": 14
      }
    ]
  }
}
```

</details>

<details>
<summary><strong>📊 Complete Response Structure</strong></summary>

```json
{
  "session_id": "sess_1703123456_abc123",
  "intent": {
    "categories": ["crm", "software"],
    "goal": "Find the best CRM solution for startups",
    "llm_intent_confidence_score": 0.89
  },
  "response": {
    "summary": "Here are CRM tools that match your goal",
    "recommendations": [
      {
        "title": "HubSpot CRM",
        "reason": "Perfect for startups with excellent free tier",
        "intent_match_score": 0.92,
        "admesh_link": "https://useadmesh.com/track?ad_id=hubspot-123",
        "ad_id": "hubspot-123",
        "product_id": "hubspot-crm",
        "url": "https://hubspot.com",
        "description": "Free CRM with powerful features for small businesses",
        "pricing": "Free tier available, paid plans from $45/month",
        "trial_days": 14,
        "features": ["Contact Management", "Deal Tracking", "Email Integration"],
        "categories": ["crm", "sales"],
        "keywords": ["crm", "sales", "marketing"],
        "has_free_tier": true,
        "offer_trust_score": 0.95,
        "brand_trust_score": 0.92,
        "is_fallback": false
      }
    ],
    "is_fallback": false,
    "recommendation_source": "admesh"
  },
  "tokens_used": 500,
  "model_used": "mistralai/mistral-7b-instruct",
  "recommendation_id": "rec_uuid_123"
}
```

</details>

<details>
<summary><strong>🔧 Request Parameters Reference</strong></summary>

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | ✅ | User's search query or question |
| `format` | string | ❌ | Format type: `auto` (default), `product`, `conversation` |
| `previous_query` | string | ❌ | Previous query in conversation |
| `session_id` | string | ❌ | Session identifier for tracking |
| `is_fallback_allowed` | boolean | ❌ | Allow fallback recommendations (default: true) |

</details>

## Code Examples

<details>
<summary><strong>🟨 JavaScript</strong></summary>

```javascript
const getRecommendations = async (query) => {
  const response = await fetch('https://api.useadmesh.com/recommend', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, format: 'auto' })
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.response.recommendations;
};

// Usage
const recommendations = await getRecommendations('best CRM for startups');
```

</details>

<details>
<summary><strong>🐍 Python</strong></summary>

```python
import requests

def get_recommendations(query):
    response = requests.post(
        'https://api.useadmesh.com/recommend',
        headers={'Authorization': 'Bearer YOUR_API_KEY'},
        json={'query': query, 'format': 'auto'}
    )

    response.raise_for_status()
    data = response.json()
    return data['response']['recommendations']

# Usage
recommendations = get_recommendations('best CRM for startups')
```

</details>

<details>
<summary><strong>🐘 PHP</strong></summary>

```php
<?php
function getRecommendations($query) {
    $data = json_encode(['query' => $query, 'format' => 'auto']);

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => [
                'Authorization: Bearer YOUR_API_KEY',
                'Content-Type: application/json'
            ],
            'content' => $data
        ]
    ]);

    $response = file_get_contents('https://api.useadmesh.com/recommend', false, $context);
    $result = json_decode($response, true);
    return $result['response']['recommendations'];
}

// Usage
$recommendations = getRecommendations('best CRM for startups');
?>
```

</details>

<details>
<summary><strong>⚠️ Error Handling</strong></summary>

**Common Error Responses:**

- **400 Bad Request:** `{"detail": "Low intent confidence"}`
- **401 Unauthorized:** `{"detail": "Invalid API key"}`
- **500 Server Error:** `{"detail": "Failed to detect intent from query"}`

**JavaScript Error Handling:**
```javascript
try {
  const recommendations = await getRecommendations(query);
} catch (error) {
  console.error('Failed to get recommendations:', error.message);
  return []; // Return empty array as fallback
}
```

</details>

## What You Get

Each recommendation includes:
- **`title`** - Product/service name
- **`reason`** - Why it's recommended
- **`admesh_link`** - Tracking URL (use this for clicks)
- **`pricing`** - Cost information
- **`features`** - Key features list

<details>
<summary><strong>📋 Complete Field Reference</strong></summary>

**Core Fields (Always Present):**
- `title`, `reason`, `intent_match_score`, `admesh_link`, `ad_id`, `product_id`

**Optional Fields:**
- `url`, `description`, `pricing`, `features`, `categories`, `keywords`
- `has_free_tier`, `trial_days`, `offer_trust_score`, `brand_trust_score`

</details>

## Next Steps

- **[Quick Start Guide](/getting-started/quick-start)** - Step-by-step integration
- **[Authentication](/api/authentication)** - API key setup and security
- **[Frontend Integration](/ui-sdk/installation)** - Display recommendations with React components
