// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AdMesh SDK Documentation',
  tagline: 'AI Agent Integration Guide for Product Recommendations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.useadmesh.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // Vercel deployment config
  organizationName: 'GouniManikumar12',
  projectName: 'admesh-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GouniManikumar12/admesh-docs/tree/main/docs/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/admesh-social-card.jpg',

      // Enhanced metadata
      metadata: [
        {name: 'keywords', content: 'AdMesh, AI, SDK, product recommendations, agent integration, API'},
        {name: 'description', content: 'Professional AI agent integration platform for product recommendations'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'AdMesh Documentation'},
      ],

      // Color mode configuration
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false, // Disable system preference to show only two icons
      },

      navbar: {
        title: 'AdMesh',
        hideOnScroll: false,
        style: 'primary',
        // logo: {
        //   alt: 'AdMesh Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo-dark.svg',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          {
            href: 'https://storybook.useadmesh.com',
            label: 'Live Examples',
            position: 'left',
            target: '_blank',
          },

          {
            href: 'https://useadmesh.com/agents#earnings-calculator',
            label: 'Earnings Calculator',
            position: 'right',
            target: '_blank',
            className: 'navbar__link--earnings',
          },
          {
            href: 'https://useadmesh.com',
            label: 'Dashboard',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'SDKs',
            position: 'right',
            items: [
              {
                href: 'https://github.com/GouniManikumar12/admesh-python',
                label: 'Python SDK',
                target: '_blank',
              },
              {
                href: 'https://github.com/GouniManikumar12/admesh-typescript',
                label: 'TypeScript SDK',
                target: '_blank',
              },
              {
                href: 'https://github.com/GouniManikumar12/admesh-ui-sdk',
                label: 'UI SDK',
                target: '_blank',
              },
            ],
          },
         
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/overview',
              },
              {
                label: 'Ad Units',
                to: '/ad-units/overview',
              },
              {
                label: 'API Reference',
                to: '/api/authentication',
              },
              {
                label: 'Examples',
                to: '/examples/ai-assistant',
              },
            ],
          },
          {
            title: 'SDKs & Tools',
            items: [
              {
                label: 'Python SDK',
                href: 'https://github.com/GouniManikumar12/admesh-python',
                target: '_blank',
              },
              {
                label: 'TypeScript SDK',
                href: 'https://github.com/GouniManikumar12/admesh-typescript',
                target: '_blank',
              },
              {
                label: 'UI SDK',
                href: 'https://github.com/GouniManikumar12/admesh-ui-sdk',
                target: '_blank',
              },
              {
                label: 'Live Examples',
                href: 'https://storybook.useadmesh.com',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Platform',
            items: [
              {
                label: 'AdMesh Dashboard',
                href: 'https://useadmesh.com',
                target: '_blank',
              },
              {
                label: 'Earnings Calculator',
                href: 'https://useadmesh.com/agents#earnings-calculator',
                target: '_blank',
              },
              {
                label: 'Agent Signup',
                href: 'https://useadmesh.com/agents',
                target: '_blank',
              },
              {
                label: 'Brand Signup',
                href: 'https://useadmesh.com/brands',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Community & Support',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GouniManikumar12',
                target: '_blank',
              },
              {
                label: 'Support',
                href: 'mailto:mani@useadmesh.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/manikumargouni',
                target: '_blank',
              },
              {
                label: 'Status',
                href: 'https://status.useadmesh.com',
                target: '_blank',
              },
            ],
          },
        ],
        copyright: `
          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--ifm-border-color); text-align: center;">
            <p style="margin-bottom: 0.5rem; color: var(--ifm-color-content-secondary);">
              Have a question? <a href="mailto:mani@useadmesh.com" style="color: var(--ifm-color-primary); text-decoration: none;">Contact us</a> or connect on <a href="https://www.linkedin.com/in/manikumargouni" target="_blank" style="color: var(--ifm-color-primary); text-decoration: none;">LinkedIn</a>
            </p>
            <p style="margin: 0; color: var(--ifm-color-content-secondary); font-size: 0.875rem;">
              Copyright © ${new Date().getFullYear()} AdMesh. All rights reserved.
            </p>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python', 'typescript', 'javascript'],
      },

      // Algolia Search Configuration
      algolia: {
        // The application ID provided by Algolia
        appId: 'W5X8L8ZZ8V',

        // Public API key: it is safe to commit it
        apiKey: '8a928420719b5fe16b30b8592dd55e2e',

        // The index name
        indexName: 'admesh-docs',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Enhanced search parameters with suggestions
        searchParameters: {
          facetFilters: [],
          hitsPerPage: 10,
          attributesToRetrieve: [
            'hierarchy',
            'content',
            'anchor',
            'url',
            'url_without_anchor',
            'type',
            'title',
            'category',
            'keywords',
            'description'
          ],
          attributesToSnippet: ['content:15', 'description:10'],
          attributesToHighlight: ['hierarchy', 'content', 'title', 'keywords'],
          snippetEllipsisText: '...',
          typoTolerance: true,
          ignorePlurals: true,
          removeStopWords: true,
        },

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (false by default)
        insights: false,

        // Search suggestions and autocomplete
        placeholder: 'Search AdMesh docs (Press / to focus)',

        // Custom search box configuration
        searchBoxProps: {
          placeholder: 'Search documentation...',
        },
      },

      // Google Analytics Configuration
      gtag: {
        trackingID: 'G-C30NMN6PCH',
        anonymizeIP: true,
      },

    }),
};

module.exports = config;
