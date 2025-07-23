---
sidebar_position: 3
title: PII Sanitization Quick Start
---

# PII Sanitization Quick Start

Get started with AdMesh's privacy-preserving PII sanitization in under 5 minutes. This feature automatically removes sensitive information while maintaining recommendation quality.

## 🚀 5-Minute Setup

### Python
```bash
# Install or update AdMesh Python SDK
pip install admesh --upgrade
```

```python
from admesh import sanitize_and_build

# Test with sample input
user_input = "Hi, I'm Sarah (sarah@test.com). I'm 28 years old, building a fintech app."
result = sanitize_and_build(user_input)

print("Clean Prompt:", result["prompt"])
print("Removed PII:", result["removed"])
print("Context:", result["extracted_context"])
```

### TypeScript/JavaScript
```bash
# Install or update AdMesh TypeScript SDK
npm install admesh@latest
```

```typescript
import { sanitizeAndBuild } from 'admesh';

// Test with sample input
const userInput = "Hi, I'm Sarah (sarah@test.com). I'm 28 years old, building a fintech app.";
const result = sanitizeAndBuild(userInput);

console.log("Clean Prompt:", result.prompt);
console.log("Removed PII:", result.removed);
console.log("Context:", result.extracted_context);
```

## ✅ Expected Output
```json
{
  "prompt": "Suggest tools for a 28-year-old female building a fintech app.",
  "removed": {
    "name": "Sarah",
    "email": "sarah@test.com", 
    "phone": null
  },
  "extracted_context": {
    "age": 28,
    "gender": "female",
    "goal": "building a fintech app"
  }
}
```

## 🧪 Try These Examples

Copy and paste these examples to test different scenarios:

### Example 1: Complete Information
```
"Hello! I'm Alex Chen (alex@startup.io, 555-123-4567). I'm a 30-year-old guy building a social media analytics platform."
```

### Example 2: Partial Information  
```
"I'm 25 years old and working on creating a mobile app for fitness tracking."
```

### Example 3: Goal Only
```
"Looking for tools to help with building an e-commerce website for sustainable fashion."
```

### Example 4: Contact Info Only
```
"You can reach me at developer@company.com or call (555) 987-6543."
```

### Example 5: Edge Case
```
"I'm Mike! 🚀 Building a crypto-trading bot... Age: 27!!! Email: mike@crypto.io"
```

## 🔗 Integration with Recommendations

### Python Integration
```python
import os
from admesh import Admesh, sanitize_and_build

client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))

def get_safe_recommendations(user_input: str):
    # Sanitize input
    sanitized = sanitize_and_build(user_input)
    
    # Get recommendations with clean prompt
    response = client.recommend.get_recommendations(
        query=sanitized["prompt"],
        format="auto"
    )
    
    return response, sanitized["removed"]

# Example usage
user_input = "I'm John (john@email.com), building a SaaS platform"
recommendations, removed_pii = get_safe_recommendations(user_input)

print(f"Got {len(recommendations.response.recommendations)} recommendations")
print(f"Protected PII: {removed_pii}")
```

### TypeScript Integration
```typescript
import Admesh, { sanitizeAndBuild } from 'admesh';

const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

async function getSafeRecommendations(userInput: string) {
  // Sanitize input
  const sanitized = sanitizeAndBuild(userInput);
  
  // Get recommendations with clean prompt
  const response = await client.recommend.getRecommendations({
    query: sanitized.prompt,
    format: 'auto'
  });
  
  return { recommendations: response, removedPII: sanitized.removed };
}

// Example usage
const userInput = "I'm John (john@email.com), building a SaaS platform";
const { recommendations, removedPII } = await getSafeRecommendations(userInput);

console.log(`Got ${recommendations.response?.recommendations?.length} recommendations`);
console.log(`Protected PII:`, removedPII);
```

## 🔒 Privacy Guarantees

### What Happens Locally
- ✅ PII detection and removal
- ✅ Context extraction (age, gender, goals)
- ✅ Clean prompt generation
- ✅ Immediate disposal of original input

### What Never Leaves Your Environment
- ❌ Names, emails, phone numbers
- ❌ Original user input
- ❌ Detected PII information
- ❌ Processing logs or traces

### What Gets Sent to AdMesh API
- ✅ Clean, sanitized prompts only
- ✅ Contextual information (age, gender, goals)
- ✅ No personally identifiable information

## 📊 Performance Metrics

- **Processing Time**: < 100ms for typical inputs
- **Accuracy**: 95%+ PII detection rate
- **Memory Usage**: Minimal (pre-compiled patterns)
- **Network Impact**: Zero (local processing only)

## 🛠️ Advanced Configuration

### Custom Workflows
```python
from admesh.sanitizer import PIISanitizer
from admesh.builder import PromptBuilder

# Use components separately
sanitizer = PIISanitizer()
builder = PromptBuilder()

# Analyze input
analysis = sanitizer.analyze_text("I'm Sarah, building an app")

# Custom prompt building
if analysis['extracted_context']['age']:
    custom_prompt = f"Age-specific tools for {analysis['extracted_context']['goal']}"
else:
    custom_prompt = builder.build_complete_prompt(
        analysis['sanitized_text'], 
        analysis['extracted_context']
    )
```

### Validation Testing
```python
def validate_pii_removal(input_text: str):
    result = sanitize_and_build(input_text)
    
    # Check that no PII remains in prompt
    for pii_type, pii_value in result["removed"].items():
        if pii_value and pii_value in result["prompt"]:
            raise ValueError(f"PII not removed: {pii_type} = {pii_value}")
    
    print("✅ PII successfully removed")
    return result

# Test your inputs
validate_pii_removal("I'm John (john@test.com), building an app")
```

## 🚨 Common Gotchas

### ❌ Don't Do This
```python
# DON'T send raw user input to API
response = client.recommend.get_recommendations(
    query="I'm John (john@email.com), building an app"  # Contains PII!
)
```

### ✅ Do This Instead
```python
# DO sanitize first
sanitized = sanitize_and_build("I'm John (john@email.com), building an app")
response = client.recommend.get_recommendations(
    query=sanitized["prompt"]  # Clean prompt only
)
```

## 📚 Next Steps

1. **Test More Examples**: Try the [PII Testing Guide](./pii-testing-guide) with comprehensive examples
2. **Review Compliance**: Check our [Compliance Standards](../privacy-and-security/compliance-standards) for regulatory requirements
3. **Read Full Documentation**: Explore the complete [PII Sanitization Guide](../privacy-and-security/pii-sanitization)
4. **Join Community**: Ask questions in our [GitHub Discussions](https://github.com/admesh/discussions)

## 📞 Need Help?

- 📧 **Technical Support**: support@useadmesh.com
- 📧 **Privacy Questions**: privacy@useadmesh.com
- 📚 **Documentation**: [docs.useadmesh.com](https://docs.useadmesh.com)
- 💬 **Community**: [GitHub Issues](https://github.com/admesh/issues)

---

**🎉 You're all set!** Your application now automatically protects user privacy while maintaining high-quality recommendations.
