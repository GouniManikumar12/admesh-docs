---
sidebar_position: 1
---

# Python SDK

Simple Python integration for AdMesh.

## Install

```bash
pip install admesh-python
```

## Basic Usage

```python
from admesh import Admesh

# Initialize client
client = Admesh(api_key="your_api_key_here")

# Get recommendations
response = client.recommend.get_recommendations(
    query="best laptop for programming",
    format="auto"
)

# Print results
for rec in response.response.recommendations:
    print(f"{rec.title}: {rec.reason}")
```

## Environment Variables

```bash
# .env file
ADMESH_API_KEY=your_api_key_here
```

```python
import os
from admesh import Admesh

client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))
```

## Handling Personal Information (PII)

**Important**: If user queries contain personal information like names, emails, or phone numbers, you should remove them first for privacy and better recommendations.

### What is PII?
Personal Identifiable Information includes:
- Names (John Doe, Sarah Smith)
- Email addresses (john@example.com)
- Phone numbers (555-123-4567)
- Addresses, SSNs, etc.

### PII Removal Example

```python
from admesh import Admesh

client = Admesh(api_key="your_api_key_here")

# User query with PII
user_input = "Hi, I'm John Doe from john@example.com and I need a good CRM for my startup"

# Step 1: Remove PII
pii_response = client.pii.remove_pii(text=user_input)
print(f"Original: {user_input}")
print(f"Cleaned: {pii_response.cleaned_text}")
# Output: "Hi, I need a good CRM for my startup"

# Step 2: Get recommendations with cleaned text
response = client.recommend.get_recommendations(
    query=pii_response.cleaned_text,
    format="auto"
)

# Display results
for rec in response.response.recommendations:
    print(f"Product: {rec.title}")
    print(f"Reason: {rec.reason}")
```

## Try with Sample Data

Test the SDK with these sample queries:

```python
# Sample queries for testing
sample_queries = [
    "best project management tool for small teams",
    "affordable email marketing software",
    "CRM with good mobile app",
    "video conferencing tool for remote work",
    "accounting software for freelancers"
]

for query in sample_queries:
    response = client.recommend.get_recommendations(
        query=query,
        format="auto"
    )
    print(f"\nQuery: {query}")
    for rec in response.response.recommendations:
        print(f"- {rec.title}")
```

## Error Handling

```python
try:
    response = client.recommend.get_recommendations(
        query="best laptop for programming",
        format="auto"
    )
except Exception as e:
    print(f"Error: {e}")
```

## UI Components (Optional)

If you're building a React frontend, we have pre-built UI components that work seamlessly with the Python SDK:

```bash
# In your React app
npm install @admesh/ui-sdk
```

```jsx
import { AdMeshProductCard } from '@admesh/ui-sdk';

// Use recommendations from Python backend
<AdMeshProductCard
  recommendations={recommendationsFromBackend}
  showMatchScores={true}
/>
```

The UI SDK provides ready-to-use React components for displaying recommendations. It's completely optional - you can build your own UI or use our components, your choice.

## Next Steps

- [Quick Start Guide](../getting-started/quick-start) - Complete integration guide
- [UI SDK](../ui-sdk/installation) - Pre-built React components (optional)
- [API Reference](../api/authentication) - Full API documentation

For support, contact [mani@useadmesh.com](mailto:mani@useadmesh.com)
