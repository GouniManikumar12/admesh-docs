import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4b8'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '2ad'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '53e'),
            routes: [
              {
                path: '/ad-units/citation',
                component: ComponentCreator('/ad-units/citation', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/conversation-summary',
                component: ComponentCreator('/ad-units/conversation-summary', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/expandable-unit',
                component: ComponentCreator('/ad-units/expandable-unit', '1a4'),
                exact: true
              },
              {
                path: '/ad-units/floating-recommendations',
                component: ComponentCreator('/ad-units/floating-recommendations', 'ff8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/layout',
                component: ComponentCreator('/ad-units/layout', 'dc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/one-line-ad',
                component: ComponentCreator('/ad-units/one-line-ad', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/overview',
                component: ComponentCreator('/ad-units/overview', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/product-card',
                component: ComponentCreator('/ad-units/product-card', 'e9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ad-units/sidebar',
                component: ComponentCreator('/ad-units/sidebar', '234'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api/authentication',
                component: ComponentCreator('/api/authentication', 'e30'),
                exact: true
              },
              {
                path: '/examples/ai-assistant',
                component: ComponentCreator('/examples/ai-assistant', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/api-keys',
                component: ComponentCreator('/getting-started/api-keys', '44b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/overview',
                component: ComponentCreator('/getting-started/overview', '204'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/quick-start',
                component: ComponentCreator('/getting-started/quick-start', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/privacy-and-security/compliance-standards',
                component: ComponentCreator('/privacy-and-security/compliance-standards', '7be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/privacy-and-security/pii-sanitization',
                component: ComponentCreator('/privacy-and-security/pii-sanitization', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/python-sdk/installation',
                component: ComponentCreator('/python-sdk/installation', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/search-help',
                component: ComponentCreator('/search-help', '84f'),
                exact: true
              },
              {
                path: '/typescript-sdk/installation',
                component: ComponentCreator('/typescript-sdk/installation', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-sdk/customization',
                component: ComponentCreator('/ui-sdk/customization', '405'),
                exact: true
              },
              {
                path: '/ui-sdk/installation',
                component: ComponentCreator('/ui-sdk/installation', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-sdk/legal-compliance',
                component: ComponentCreator('/ui-sdk/legal-compliance', '136'),
                exact: true
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
