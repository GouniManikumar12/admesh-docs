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
  // Clean, user-friendly sidebar structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },

    // Essential Getting Started
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/api-keys',
      ],
    },

    // Core API Documentation
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api/authentication',
        'api/recommendations',
      ],
    },

    // Frontend Integration
    {
      type: 'category',
      label: 'Frontend Integration',
      collapsed: true,
      items: [
        'ui-sdk/installation',
        'ui-sdk/layout-component',
        'ui-sdk/customization',
      ],
    },

    // Examples & Guides
    {
      type: 'category',
      label: 'Examples & Guides',
      collapsed: true,
      items: [
        'examples/integration-examples',
        'examples/ai-assistant',
      ],
    },

    // Resources
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Live Examples',
          href: 'https://storybook.useadmesh.com',
        },
        {
          type: 'link',
          label: 'Get API Key',
          href: 'https://dashboard.useadmesh.com',
        },
        {
          type: 'link',
          label: 'Support',
          href: 'mailto:mani@useadmesh.com',
        },
      ],
    },
  ],
};

module.exports = sidebars;
