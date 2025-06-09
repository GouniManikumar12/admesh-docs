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
    component: ComponentCreator('/', '642'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '06c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a17'),
            routes: [
              {
                path: '/ai-integration/overview',
                component: ComponentCreator('/ai-integration/overview', '037'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/api/authentication',
                component: ComponentCreator('/api/authentication', '255'),
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
                path: '/getting-started/ad-formats',
                component: ComponentCreator('/getting-started/ad-formats', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/admesh-vs-traditional',
                component: ComponentCreator('/getting-started/admesh-vs-traditional', '9ca'),
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
                path: '/python-sdk/installation',
                component: ComponentCreator('/python-sdk/installation', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typescript-sdk/installation',
                component: ComponentCreator('/typescript-sdk/installation', '9b2'),
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
