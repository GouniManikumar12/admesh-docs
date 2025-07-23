---
sidebar_position: 4
title: PII Sanitization Testing Guide
---

# PII Sanitization Testing Guide

This guide provides comprehensive examples for testing AdMesh's PII sanitization functionality. Use these examples to validate that sensitive information is properly detected and removed while maintaining recommendation quality.

## 🧪 Test Categories

### 1. Complete PII Scenarios
Test inputs that contain all types of PII (names, emails, phones) plus contextual information.

#### Example 1: Professional Introduction
```
Input: "Hello! I'm Sarah Johnson (sarah.j@techcorp.com, 555-123-4567). I'm a 32-year-old woman building a fintech startup focused on small business lending."

Expected Results:
✅ Prompt: "Suggest tools for a 32-year-old female building a fintech startup focused on small business lending."
✅ Removed: {name: "Sarah Johnson", email: "sarah.j@techcorp.com", phone: "555-123-4567"}
✅ Context: {age: 32, gender: "female", goal: "building a fintech startup focused on small business lending"}
```

#### Example 2: Casual Introduction
```
Input: "Hi there! My name is Alex Chen, you can reach me at alex.chen@startup.io or call (415) 555-9876. I'm a 28-year-old guy working on creating a social media analytics platform."

Expected Results:
✅ Prompt: "Suggest tools for a 28-year-old male working on creating a social media analytics platform."
✅ Removed: {name: "Alex Chen", email: "alex.chen@startup.io", phone: "(415) 555-9876"}
✅ Context: {age: 28, gender: "male", goal: "working on creating a social media analytics platform"}
```

#### Example 3: International Format
```
Input: "I'm Maria Rodriguez (maria@innovate.es, +34-91-123-4567). I'm a 35-year-old female developing an AI-powered language learning app."

Expected Results:
✅ Prompt: "Suggest tools for a 35-year-old female developing an AI-powered language learning app."
✅ Removed: {name: "Maria Rodriguez", email: "maria@innovate.es", phone: "+34-91-123-4567"}
✅ Context: {age: 35, gender: "female", goal: "developing an AI-powered language learning app"}
```

### 2. Partial Information Scenarios
Test inputs with some PII and context, but not all types.

#### Example 4: Age + Goal Only
```
Input: "I'm 28 years old and working on creating a mobile app for fitness tracking and nutrition planning."

Expected Results:
✅ Prompt: "Suggest tools for someone working on creating a mobile app for fitness tracking and nutrition planning (age 28)."
✅ Removed: {name: null, email: null, phone: null}
✅ Context: {age: 28, gender: null, goal: "working on creating a mobile app for fitness tracking and nutrition planning"}
```

#### Example 5: Name + Goal Only
```
Input: "I'm David and I'm building a marketplace for sustainable fashion brands."

Expected Results:
✅ Prompt: "Suggest tools for building a marketplace for sustainable fashion brands."
✅ Removed: {name: "David", email: null, phone: null}
✅ Context: {age: null, gender: null, goal: "building a marketplace for sustainable fashion brands"}
```

#### Example 6: Gender + Goal Only
```
Input: "I'm a woman developing a mental health support platform for teenagers."

Expected Results:
✅ Prompt: "Suggest tools for a female developing a mental health support platform for teenagers."
✅ Removed: {name: null, email: null, phone: null}
✅ Context: {age: null, gender: "female", goal: "developing a mental health support platform for teenagers"}
```

### 3. Minimal Context Scenarios
Test inputs where only goal information can be extracted.

#### Example 7: Goal Only
```
Input: "Looking for tools to help with building an e-commerce platform for sustainable fashion brands."

Expected Results:
✅ Prompt: "Suggest tools for building an e-commerce platform for sustainable fashion brands."
✅ Removed: {name: null, email: null, phone: null}
✅ Context: {age: null, gender: null, goal: "building an e-commerce platform for sustainable fashion brands"}
```

#### Example 8: Business Context
```
Input: "Need recommendations for creating a B2B SaaS platform for inventory management."

Expected Results:
✅ Prompt: "Suggest tools for creating a B2B SaaS platform for inventory management."
✅ Removed: {name: null, email: null, phone: null}
✅ Context: {age: null, gender: null, goal: "creating a B2B SaaS platform for inventory management"}
```

### 4. PII-Only Scenarios
Test inputs with contact information but no useful context.

#### Example 9: Contact Info Only
```
Input: "You can reach me at alex.developer@gmail.com or call (555) 987-6543 for more details."

Expected Results:
✅ Prompt: "Suggest relevant tools and services."
✅ Removed: {name: null, email: "alex.developer@gmail.com", phone: "(555) 987-6543"}
✅ Context: {age: null, gender: null, goal: null}
```

#### Example 10: Multiple Contacts
```
Input: "Contact me at work@company.com or personal@gmail.com. Phone: (555) 123-4567 or 555.987.6543."

Expected Results:
✅ Prompt: "Suggest relevant tools and services."
✅ Removed: {name: null, email: "work@company.com", phone: "(555) 123-4567"}
✅ Context: {age: null, gender: null, goal: null}
```

### 5. Edge Cases & Special Characters
Test inputs with unusual formatting, special characters, and edge cases.

#### Example 11: Special Characters
```
Input: "I'm Mike! 🚀 Building a crypto-trading bot... Age: 25!!! Contact: mike@crypto.io"

Expected Results:
✅ Prompt: "Suggest tools for a 25-year-old male building a crypto-trading bot."
✅ Removed: {name: "Mike", email: "mike@crypto.io", phone: null}
✅ Context: {age: 25, gender: "male", goal: "building a crypto-trading bot"}
```

#### Example 12: Mixed Case & Punctuation
```
Input: "HEY! I'm Jennifer... working on DEVELOPING a wellness app for seniors (age 29) - jen.dev@health.co"

Expected Results:
✅ Prompt: "Suggest tools for a 29-year-old female developing a wellness app for seniors."
✅ Removed: {name: "Jennifer", email: "jen.dev@health.co", phone: null}
✅ Context: {age: 29, gender: "female", goal: "developing a wellness app for seniors"}
```

#### Example 13: Multiple Names
```
Input: "I'm John Smith, but you can call me Johnny. Building a food delivery app. Email: j.smith@food.app"

Expected Results:
✅ Prompt: "Suggest tools for building a food delivery app."
✅ Removed: {name: "John Smith", email: "j.smith@food.app", phone: null}
✅ Context: {age: null, gender: null, goal: "building a food delivery app"}
```

## 🔧 Testing Implementation

### Python Testing Script
```python
from admesh import sanitize_and_build

def test_pii_sanitization():
    test_cases = [
        {
            "input": "I'm Sarah (sarah@test.com), 30 years old, building a fintech app.",
            "expected_prompt_contains": ["30-year-old", "female", "fintech app"],
            "expected_removed": {"name": "Sarah", "email": "sarah@test.com", "phone": None},
            "expected_context": {"age": 30, "gender": "female", "goal": "building a fintech app"}
        },
        # Add more test cases...
    ]
    
    for i, case in enumerate(test_cases):
        print(f"Testing case {i+1}...")
        result = sanitize_and_build(case["input"])
        
        # Validate prompt
        for expected in case["expected_prompt_contains"]:
            assert expected in result["prompt"], f"Expected '{expected}' in prompt"
        
        # Validate removed PII
        for key, expected_value in case["expected_removed"].items():
            assert result["removed"][key] == expected_value, f"PII removal mismatch for {key}"
        
        # Validate context
        for key, expected_value in case["expected_context"].items():
            assert result["extracted_context"][key] == expected_value, f"Context mismatch for {key}"
        
        print(f"✅ Case {i+1} passed")
    
    print("🎉 All tests passed!")

if __name__ == "__main__":
    test_pii_sanitization()
```

### TypeScript Testing Script
```typescript
import { sanitizeAndBuild } from 'admesh';

interface TestCase {
  input: string;
  expectedPromptContains: string[];
  expectedRemoved: {
    name: string | null;
    email: string | null;
    phone: string | null;
  };
  expectedContext: {
    age: number | null;
    gender: string | null;
    goal: string | null;
  };
}

function testPIISanitization() {
  const testCases: TestCase[] = [
    {
      input: "I'm Sarah (sarah@test.com), 30 years old, building a fintech app.",
      expectedPromptContains: ["30-year-old", "female", "fintech app"],
      expectedRemoved: { name: "Sarah", email: "sarah@test.com", phone: null },
      expectedContext: { age: 30, gender: "female", goal: "building a fintech app" }
    },
    // Add more test cases...
  ];
  
  testCases.forEach((testCase, index) => {
    console.log(`Testing case ${index + 1}...`);
    const result = sanitizeAndBuild(testCase.input);
    
    // Validate prompt
    testCase.expectedPromptContains.forEach(expected => {
      if (!result.prompt.includes(expected)) {
        throw new Error(`Expected '${expected}' in prompt`);
      }
    });
    
    // Validate removed PII
    Object.entries(testCase.expectedRemoved).forEach(([key, expectedValue]) => {
      if (result.removed[key as keyof typeof result.removed] !== expectedValue) {
        throw new Error(`PII removal mismatch for ${key}`);
      }
    });
    
    // Validate context
    Object.entries(testCase.expectedContext).forEach(([key, expectedValue]) => {
      if (result.extracted_context[key as keyof typeof result.extracted_context] !== expectedValue) {
        throw new Error(`Context mismatch for ${key}`);
      }
    });
    
    console.log(`✅ Case ${index + 1} passed`);
  });
  
  console.log('🎉 All tests passed!');
}

testPIISanitization();
```

## 📊 Validation Checklist

When testing PII sanitization, verify:

### ✅ Privacy Protection
- [ ] No names appear in final prompts
- [ ] No email addresses appear in final prompts  
- [ ] No phone numbers appear in final prompts
- [ ] Original input is not stored or logged

### ✅ Context Preservation
- [ ] Age information is correctly extracted and used
- [ ] Gender information is normalized (male/female)
- [ ] Goal information maintains business context
- [ ] Prompts remain natural and useful

### ✅ Edge Case Handling
- [ ] Special characters don't break parsing
- [ ] Multiple PII instances are all detected
- [ ] International formats are supported
- [ ] Empty/minimal inputs don't cause errors

### ✅ Performance Requirements
- [ ] Processing completes in less than 100ms
- [ ] No external network calls during sanitization
- [ ] Memory usage remains minimal
- [ ] Thread safety maintained

## 🚨 Common Issues & Solutions

### Issue: Names Not Detected
**Problem**: Common words being treated as names
**Solution**: Check if the name is in the common words filter

### Issue: Context Not Extracted
**Problem**: Goal or age information not being captured
**Solution**: Verify the input matches expected patterns

### Issue: Phone Format Variations
**Problem**: International phone numbers not detected
**Solution**: Test with various formats and update patterns if needed

### Issue: Performance Concerns
**Problem**: Sanitization taking too long
**Solution**: Profile the regex patterns and optimize if necessary

## 📞 Support

If you encounter issues during testing:
- 📧 **Technical Support**: support@useadmesh.com
- 📚 **Documentation**: [docs.useadmesh.com](https://docs.useadmesh.com)
- 💬 **Community**: [GitHub Issues](https://github.com/admesh/issues)
