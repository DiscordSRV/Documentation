// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DiscordSRV Documentation',
  tagline: 'The most powerful, configurable, open-source Discord bridge plugin out there.',
  favicon: 'assets/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.discordsrv.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DiscordSRV',
  projectName: 'Documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './config/sidebars.js',
          editUrl: 'https://github.com/DiscordSRV/Documentation/edit/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        },
      },
      image: 'assets/logo.png',
      navbar: {
        title: 'DiscordSRV Documentation',
        logo: {
          alt: 'DiscordSRV Logo',
          src: 'assets/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            label: 'Home',
            sidebarId: 'mainSidebar',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'ascensionSidebar',
            label: 'Ascension',
            position: 'left'
          },
          {
            href: 'https://github.com/DiscordSRV/Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordsrv.com/discord',
              },
              {
                label: 'Appeal a ban from the Discord server',
                href: 'https://discordsrv.com/discord/ban-appeal'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DiscordSRV/DiscordSRV',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DiscordSRV. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['groovy', 'diff']
      },
      markdown: {
        format: "detect"
      },
      imageZoom: {
        options: {
          background: 'rgba(0,0,0,0.6)'
        }
      }
    }),
  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: 'installation/index.md',
            from: '/Installation.md'
          },
          {
            to: 'papi-placeholders.md',
            from: '/PAPI-Placeholders.md'
          },
          {
            to: 'lp-contexts.md',
            from: '/LPContext.md'
          },
          {
            to: 'faq.md',
            from: '/FAQ.md'
          },
          {
            to: 'commands.md',
            from: '/Commands.md'
          },
          {
            to: 'permissions.md',
            from: '/Permissions.md'
          },
          {
            to: 'installation/initial-setup.md',
            from: '/installation/basic-setup.md'
          },
        ],
        createRedirects: (existingPath) => {
          return ['/master/' + existingPath, '/develop/' + existingPath];
        },
      }
    ]
  ],
  themes: [
    [
        require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        indexBlog: false,
        hashed: true,
        docsRouteBasePath: "/"
      })
    ],
  ]
};

export default config;
