import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '9cb'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '12a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'ea9'),
            routes: [
              {
                path: '/ad-units/citation',
                component: ComponentCreator('/ad-units/citation', '413'),
                exact: true
              },
              {
                path: '/ad-units/ecommerce-cards',
                component: ComponentCreator('/ad-units/ecommerce-cards', '59a'),
                exact: true
              },
              {
                path: '/ad-units/expandable-unit',
                component: ComponentCreator('/ad-units/expandable-unit', '1a4'),
                exact: true
              },
              {
                path: '/ad-units/layout',
                component: ComponentCreator('/ad-units/layout', 'b85'),
                exact: true
              },
              {
                path: '/ad-units/one-line-ad',
                component: ComponentCreator('/ad-units/one-line-ad', '88c'),
                exact: true
              },
              {
                path: '/ad-units/overview',
                component: ComponentCreator('/ad-units/overview', '8ba'),
                exact: true
              },
              {
                path: '/ad-units/product-card',
                component: ComponentCreator('/ad-units/product-card', '8b8'),
                exact: true
              },
              {
                path: '/api/authentication',
                component: ComponentCreator('/api/authentication', '255'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api/recommendations',
                component: ComponentCreator('/api/recommendations', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/examples/ai-assistant',
                component: ComponentCreator('/examples/ai-assistant', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/examples/integration-examples',
                component: ComponentCreator('/examples/integration-examples', 'cba'),
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
                path: '/getting-started/quick-start',
                component: ComponentCreator('/getting-started/quick-start', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/privacy-and-security/compliance-standards',
                component: ComponentCreator('/privacy-and-security/compliance-standards', 'bec'),
                exact: true
              },
              {
                path: '/privacy-and-security/pii-sanitization',
                component: ComponentCreator('/privacy-and-security/pii-sanitization', 'f12'),
                exact: true
              },
              {
                path: '/ui-sdk/customization',
                component: ComponentCreator('/ui-sdk/customization', 'ea7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-sdk/installation',
                component: ComponentCreator('/ui-sdk/installation', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-sdk/layout-component',
                component: ComponentCreator('/ui-sdk/layout-component', 'ec6'),
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
