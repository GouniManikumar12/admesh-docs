---
sidebar_position: 2
---

# Getting Your API Key

Get your API key to start using AdMesh.

## Get Your API Key

1. **Sign up** at [dashboard.useadmesh.com](https://dashboard.useadmesh.com)
2. **Verify your email** - Check your inbox and click the verification link
3. **Generate API key** - Go to API Keys section and click "Generate New API Key"
4. **Copy and save** - Store your API key securely (you'll only see it once)

:::warning
Never commit API keys to version control or share them publicly.
:::

## Using Your API Key

Store your API key as an environment variable:

```bash
# .env file
ADMESH_API_KEY=your_api_key_here
```

Use it in your code:

```javascript
// JavaScript/Node.js
const response = await fetch('https://api.useadmesh.com/v1/recommendations', {
  headers: {
    'Authorization': `Bearer ${process.env.ADMESH_API_KEY}`
  }
});
```

```python
# Python
import os
import requests

response = requests.post(
    'https://api.useadmesh.com/v1/recommendations',
    headers={'Authorization': f'Bearer {os.environ["ADMESH_API_KEY"]}'}
)
```

## Next Steps

Now that you have your API key, continue to the [Quick Start Guide](./quick-start) to make your first API call.
