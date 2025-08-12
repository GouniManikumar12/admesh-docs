---
sidebar_position: 1
---

# Quick Start Guide

Get AdMesh recommendations in 3 simple steps.

## Step 1: Get Your API Key

Sign up at [dashboard.useadmesh.com](https://dashboard.useadmesh.com) to get your free API key.

## Step 2: Make Your First API Call

<details>
<summary><strong>📋 Basic Example (Click to expand)</strong></summary>

```bash
curl -X POST "https://api.useadmesh.com/recommend" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "best CRM for startups",
    "format": "auto"
  }'
```

**Response:**
```json
{
  "response": {
    "recommendations": [
      {
        "title": "HubSpot CRM",
        "reason": "Perfect for startups with excellent free tier",
        "admesh_link": "https://useadmesh.com/track?ad_id=hubspot-123",
        "pricing": "Free tier available, paid plans from $45/month"
      }
    ]
  }
}
```

</details>

## Step 3: Choose Your Language

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
    return response.json()['response']['recommendations']

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

## Next Steps (Optional)

<details>
<summary><strong>🎨 Display Recommendations (Frontend)</strong></summary>

If you're building a frontend, you can use our React components to display recommendations:

```bash
npm install admesh-ui-sdk
```

```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

function MyApp() {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async (query) => {
    // Call your backend API (which calls AdMesh)
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

[Learn more about UI components →](/ui-sdk/installation)

</details>

<details>
<summary><strong>🔧 Backend Integration Examples</strong></summary>

### Express.js API Route
```javascript
app.post('/api/recommendations', async (req, res) => {
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
});
```

### Flask API Route
```python
@app.route('/api/recommendations', methods=['POST'])
def get_recommendations():
    data = request.get_json()
    query = data.get('query')

    response = requests.post(
        'https://api.useadmesh.com/recommend',
        headers={'Authorization': f'Bearer {os.environ.get("ADMESH_API_KEY")}'},
        json={'query': query, 'format': 'auto'}
    )

    return jsonify(response.json()['response']['recommendations'])
```

[See more backend examples →](/examples/integration-examples)

</details>

<details>
<summary><strong>🔍 Understanding the Response</strong></summary>

Each recommendation includes:

- **`title`** - Product/service name
- **`reason`** - Why it's recommended for this query
- **`admesh_link`** - Tracking URL (use this for clicks)
- **`pricing`** - Cost information
- **`features`** - Key features list
- **`trial_days`** - Free trial period

[View complete API reference →](/api/recommendations)

</details>

## ✅ You're Ready!

That's it! You now have AdMesh recommendations working in your application.

### What's Next?

- **Need help?** → [Contact Support](mailto:mani@useadmesh.com)
- **Want UI components?** → [Frontend Integration Guide](/ui-sdk/installation)
- **More examples?** → [Integration Examples](/examples/integration-examples)
- **Complete API docs?** → [API Reference](/api/recommendations)

### Quick Links

- 🔑 [Get API Key](https://dashboard.useadmesh.com)
- 📊 [View Dashboard](https://dashboard.useadmesh.com)
- 🎨 [Live Examples](https://storybook.useadmesh.com)
