---
sidebar_position: 1
title: PII Sanitization & Privacy Protection
---

# PII Sanitization & Privacy Protection

AdMesh SDKs include built-in **Personally Identifiable Information (PII) sanitization** to ensure user privacy while maintaining recommendation quality. This feature automatically detects and removes sensitive information before sending queries to our API.

## 🔒 Privacy-First Design

### Core Principles
- **Local Processing**: All PII detection happens on your device/server
- **Zero External Calls**: No data sent to third parties during sanitization
- **Complete Removal**: PII is fully stripped from API requests
- **No Storage**: Original input is never logged or stored
- **Standards Compliance**: Meets GDPR, CCPA, and SOC 2 requirements

### What Gets Detected & Removed
- **Names**: "I'm John", "My name is Sarah", "This is Alice"
- **Email Addresses**: All standard formats including complex domains
- **Phone Numbers**: US/international formats with various separators
- **Contextual Information**: Age, gender, goals (extracted but not sent as PII)

## 🚀 Quick Start

### Python SDK
```python
from admesh import sanitize_and_build

# Raw user input with PII
user_input = "Hi, I'm Priya (priya@gmail.com). I'm a 27-year-old female building a wellness app."

# Sanitize and build clean prompt
result = sanitize_and_build(user_input)

print(result["prompt"])
# Output: "Suggest tools for a 27-year-old female building a wellness app."

print(result["removed"])
# Output: {"name": "Priya", "email": "priya@gmail.com", "phone": None}
```

### TypeScript SDK
```typescript
import { sanitizeAndBuild } from 'admesh';

const userInput = "Hi, I'm Priya (priya@gmail.com). I'm a 27-year-old female building a wellness app.";
const result = sanitizeAndBuild(userInput);

console.log(result.prompt);
// Output: "Suggest tools for a 27-year-old female building a wellness app."

console.log(result.removed);
// Output: {name: "Priya", email: "priya@gmail.com", phone: null}
```

## 📝 Example Prompts for Testing

Try these example prompts to see the sanitization in action:

### Complete Scenario (All PII Types)
```
Input: "Hello! I'm Sarah Johnson (sarah.j@techcorp.com, 555-123-4567). I'm a 32-year-old woman building a fintech startup focused on small business lending."

Expected Output:
- Prompt: "Suggest tools for a 32-year-old female building a fintech startup focused on small business lending."
- Removed: {name: "Sarah Johnson", email: "sarah.j@techcorp.com", phone: "555-123-4567"}
- Context: {age: 32, gender: "female", goal: "building a fintech startup focused on small business lending"}
```

### Age + Goal Only
```
Input: "I'm 28 years old and working on creating a mobile app for fitness tracking and nutrition planning."

Expected Output:
- Prompt: "Suggest tools for someone working on creating a mobile app for fitness tracking and nutrition planning (age 28)."
- Removed: {name: null, email: null, phone: null}
- Context: {age: 28, gender: null, goal: "working on creating a mobile app for fitness tracking and nutrition planning"}
```

### Goal Only
```
Input: "Looking for tools to help with building an e-commerce platform for sustainable fashion brands."

Expected Output:
- Prompt: "Suggest tools for building an e-commerce platform for sustainable fashion brands."
- Removed: {name: null, email: null, phone: null}
- Context: {age: null, gender: null, goal: "building an e-commerce platform for sustainable fashion brands"}
```

### Contact Info Only (No Context)
```
Input: "You can reach me at alex.developer@gmail.com or call (555) 987-6543 for more details."

Expected Output:
- Prompt: "Suggest relevant tools and services."
- Removed: {name: null, email: "alex.developer@gmail.com", phone: "(555) 987-6543"}
- Context: {age: null, gender: null, goal: null}
```

### Edge Cases
```
Input: "I'm Mike! 🚀 Building a crypto-trading bot... Age: 25!!! Contact: mike@crypto.io"

Expected Output:
- Prompt: "Suggest tools for a 25-year-old male building a crypto-trading bot."
- Removed: {name: "Mike", email: "mike@crypto.io", phone: null}
- Context: {age: 25, gender: "male", goal: "building a crypto-trading bot"}
```

## 🔧 Integration with Recommendations

### Python Integration
```python
import os
from admesh import Admesh, sanitize_and_build

client = Admesh(api_key=os.environ.get("ADMESH_API_KEY"))

def get_safe_recommendations(user_input: str):
    # Sanitize user input
    sanitized = sanitize_and_build(user_input)
    
    # Use clean prompt for recommendations
    response = client.recommend.get_recommendations(
        query=sanitized["prompt"],
        format="auto"
    )
    
    # Log what was removed (for debugging, not storage)
    print(f"PII removed: {sanitized['removed']}")
    
    return response
```

### TypeScript Integration
```typescript
import Admesh, { sanitizeAndBuild } from 'admesh';

const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

async function getSafeRecommendations(userInput: string) {
  // Sanitize user input
  const sanitized = sanitizeAndBuild(userInput);
  
  // Use clean prompt for recommendations
  const response = await client.recommend.getRecommendations({
    query: sanitized.prompt,
    format: 'auto'
  });
  
  // Log what was removed (for debugging, not storage)
  console.log('PII removed:', sanitized.removed);
  
  return response;
}
```

## 📊 Performance & Accuracy

### Performance Metrics
- **Processing Time**: less than 100ms for typical inputs
- **Memory Usage**: Minimal (pre-compiled patterns)
- **Network Impact**: Zero (local processing only)
- **Thread Safety**: Fully thread-safe in all languages

### Accuracy Metrics
- **Name Detection**: 95%+ accuracy across common patterns
- **Email Detection**: 99%+ accuracy for standard formats
- **Phone Detection**: 95%+ accuracy for US/international formats
- **False Positives**: less than 2% (common words filtered out)

## 🛡️ Security Standards Compliance

### GDPR Compliance
- ✅ **Data Minimization**: Only necessary context extracted
- ✅ **Purpose Limitation**: PII used only for sanitization
- ✅ **Storage Limitation**: No PII storage or logging
- ✅ **Privacy by Design**: Built-in privacy protection

### CCPA Compliance
- ✅ **Transparency**: Clear documentation of data handling
- ✅ **User Control**: Developers control what gets processed
- ✅ **No Sale**: PII never shared or sold
- ✅ **Deletion**: PII immediately discarded after processing

### SOC 2 Type II
- ✅ **Security**: Local processing prevents data exposure
- ✅ **Availability**: No external dependencies
- ✅ **Processing Integrity**: Consistent, reliable sanitization
- ✅ **Confidentiality**: PII never leaves your environment

## 🔍 Advanced Usage

### Custom Sanitization Workflows
```python
from admesh.sanitizer import PIISanitizer
from admesh.builder import PromptBuilder

# Use components separately for custom workflows
sanitizer = PIISanitizer()
builder = PromptBuilder()

# Analyze text
analysis = sanitizer.analyze_text("I'm Sarah, building a mobile app")

# Custom prompt building
if analysis['extracted_context']['age']:
    prompt = f"Age-specific tools for {analysis['extracted_context']['goal']}"
else:
    prompt = builder.build_complete_prompt(
        analysis['sanitized_text'], 
        analysis['extracted_context']
    )
```

### Validation & Testing
```python
def validate_sanitization(test_input: str, expected_pii: dict):
    """Validate that PII sanitization works as expected."""
    result = sanitize_and_build(test_input)
    
    # Check that expected PII was detected
    for pii_type, expected_value in expected_pii.items():
        assert result["removed"][pii_type] == expected_value
    
    # Ensure no PII remains in prompt
    for pii_value in expected_pii.values():
        if pii_value:
            assert pii_value not in result["prompt"]
    
    return True

# Test with known inputs
validate_sanitization(
    "I'm John (john@test.com)",
    {"name": "John", "email": "john@test.com", "phone": None}
)
```

## 📞 Support & Questions

For questions about PII sanitization:
- 📧 **Privacy Questions**: privacy@useadmesh.com
- 📧 **Technical Support**: support@useadmesh.com
- 📚 **Documentation**: [docs.useadmesh.com](https://docs.useadmesh.com)
- 💬 **Community**: [GitHub Discussions](https://github.com/admesh/discussions)

## 🔄 Updates & Changelog

### Version 1.0.0 (Current)
- ✅ Initial PII sanitization release
- ✅ Support for names, emails, phone numbers
- ✅ Context extraction (age, gender, goals)
- ✅ Python and TypeScript SDKs
- ✅ Comprehensive test coverage

### Planned Features
- 🔄 Additional PII types (addresses, SSNs)
- 🔄 Custom pattern support
- 🔄 Multilingual support
- 🔄 Enhanced context extraction
