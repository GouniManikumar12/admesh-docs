---
sidebar_position: 1
---

# Integration Examples

Ready-to-use code examples for different languages and frameworks.

## Quick Examples

<details>
<summary><strong>🟨 JavaScript/Node.js</strong></summary>

### Basic Function
```javascript
async function getRecommendations(query) {
  const response = await fetch('https://api.useadmesh.com/recommend', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.ADMESH_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, format: 'auto' })
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.response.recommendations;
}

// Usage
const recommendations = await getRecommendations('best CRM for startups');
```

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

### Next.js API Route
```javascript
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
```

### React Frontend Component
```tsx
import React, { useState } from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';

function RecommendationSearch() {
  const [recommendations, setRecommendations] = useState([]);

  const searchRecommendations = async (query) => {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });

    const recs = await response.json();
    setRecommendations(recs);
  };

  return (
    <div>
      <input
        placeholder="Search for products..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') searchRecommendations(e.target.value);
        }}
      />

      <AdMeshLayout
        recommendations={recommendations}
        layout="auto"
        onRecommendationClick={(adId, admeshLink) => window.open(admeshLink)}
      />
    </div>
  );
}
```

</details>

<details>
<summary><strong>🐍 Python</strong></summary>

### Basic Function
```python
import requests
import os

def get_recommendations(query):
    response = requests.post(
        'https://api.useadmesh.com/recommend',
        headers={'Authorization': f'Bearer {os.environ.get("ADMESH_API_KEY")}'},
        json={'query': query, 'format': 'auto'}
    )

    response.raise_for_status()
    data = response.json()
    return data['response']['recommendations']

# Usage
recommendations = get_recommendations('best CRM for startups')
for rec in recommendations:
    print(f"{rec['title']}: {rec['reason']}")
```

### Flask API Route
```python
from flask import Flask, request, jsonify
import requests
import os

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

### Django View
```python
from django.http import JsonResponse
import requests
import json
import os

@csrf_exempt
def get_recommendations(request):
    data = json.loads(request.body)
    query = data.get('query')

    response = requests.post(
        'https://api.useadmesh.com/recommend',
        headers={'Authorization': f'Bearer {os.environ.get("ADMESH_API_KEY")}'},
        json={'query': query, 'format': 'auto'}
    )

    return JsonResponse(response.json()['response']['recommendations'], safe=False)
```

</details>

<details>
<summary><strong>🐘 PHP</strong></summary>

### Basic Function
```php
<?php
function getRecommendations($query) {
    $data = json_encode(['query' => $query, 'format' => 'auto']);

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => [
                'Authorization: Bearer ' . $_ENV['ADMESH_API_KEY'],
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
foreach ($recommendations as $rec) {
    echo $rec['title'] . ": " . $rec['reason'] . "\n";
}
?>
```

### Laravel Controller
```php
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RecommendationController extends Controller
{
    public function getRecommendations(Request $request)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('ADMESH_API_KEY')
        ])->post('https://api.useadmesh.com/recommend', [
            'query' => $request->query,
            'format' => 'auto'
        ]);

        $data = $response->json();
        return response()->json($data['response']['recommendations']);
    }
}
```

</details>

## Framework Examples

<details>
<summary><strong>🔧 Error Handling</strong></summary>

### JavaScript with Retry Logic
```javascript
async function getRecommendationsWithRetry(query, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch('https://api.useadmesh.com/recommend', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.ADMESH_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, format: 'auto' })
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key');
        }
        if (response.status >= 500 && attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          continue;
        }
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.response.recommendations;
    } catch (error) {
      if (attempt === maxRetries) {
        console.error('Failed after retries:', error);
        return [];
      }
    }
  }
}
```

</details>

## Next Steps

- **[Quick Start Guide](/getting-started/quick-start)** - Step-by-step integration
- **[API Reference](/api/recommendations)** - Complete endpoint documentation
- **[Frontend Integration](/ui-sdk/installation)** - React components for displaying recommendations
