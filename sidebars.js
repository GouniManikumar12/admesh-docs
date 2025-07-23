/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Modern, organized sidebar structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },

    // Quick Start Section
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/api-keys',
        'getting-started/quick-start',
        'getting-started/pii-quick-start',
        'getting-started/pii-testing-guide',
        'getting-started/earnings',
      ],
    },

    // Ad Units Section
    {
      type: 'category',
      label: 'Ad Units',
      collapsed: false,
      items: [
        'ad-units/overview',
        {
          type: 'category',
          label: 'Components',
          items: [
            'ad-units/one-line-ad',
            'ad-units/product-card',
            'ad-units/conversation-summary',
            'ad-units/citation',
            'ad-units/floating-recommendations',
            'ad-units/sidebar',
            'ad-units/layout',
          ],
        },
      ],
    },

    // SDK Documentation
    {
      type: 'category',
      label: 'Python SDK',
      items: [
        'python-sdk/installation',
      ],
    },
    {
      type: 'category',
      label: 'TypeScript SDK',
      items: [
        'typescript-sdk/installation',
      ],
    },

    {
      type: 'category',
      label: 'UI SDK',
      items: [
        'ui-sdk/installation',
      ],
    },



    // Privacy & Security
    {
      type: 'category',
      label: 'Privacy & Security',
      items: [
        'privacy-and-security/pii-sanitization',
        'privacy-and-security/compliance-standards',
      ],
    },

    // API Reference
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/authentication',
      ],
    },

    // Examples & Tutorials
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/ai-assistant',
      ],
    },

    // Advanced Topics
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          type: 'link',
          label: 'GitHub Issues',
          href: 'https://github.com/GouniManikumar12/admesh-docs/issues',
        },
        {
          type: 'link',
          label: 'Status Page',
          href: 'https://status.useadmesh.com',
        },
      ],
    },

    // Help & Support
    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'search-help',
        {
          type: 'link',
          label: 'Support',
          href: 'mailto:mani@useadmesh.com',
        },
      ],
    },

    // External Links
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'link',
          label: 'Live Examples',
          href: 'https://storybook.useadmesh.com',
        },
        {
          type: 'link',
          label: 'Earnings Calculator',
          href: 'https://useadmesh.com/agents#earnings-calculator',
        },
        {
          type: 'link',
          label: 'Dashboard',
          href: 'https://useadmesh.com',
        },
      ],
    },
  ],
};

module.exports = sidebars;
