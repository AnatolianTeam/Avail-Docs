// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avail Docs',
  tagline: 'The official documentation hub for the Avail Project.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://avail-docs.anatolianteam.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anatolianteam', // Usually your GitHub org/user name.
  projectName: 'Avail-Docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
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
    (
      {
        metadata: [
          {
            name: 'description',
            content:
              'Welcome to the Avail Project Documentation, the official documentation for Avail.',
          },
        ],
        // Replace with your project's social card
        image: 'img/avail-doc-social-card.jpg',
        navbar: {
        logo: {
          alt: 'Avail Project',
          src: 'img/avail-logo.png',
        },
        items: [
          {
            position: 'left',
            label: 'Dokümanlarda Gezinin',
            items: [
              {
                href: '/introduction/',
                label: 'Avail Nedir?',
                target: '_self',
                rel: null,
              },
              {
                href: '/get-started/quickstart/',
                label: 'Hızlı Başlangıç',
                target: '_self',
                rel: null,
              },
              {
                href: '/get-started/networks/',
                label: 'Ağ Bilgisi',
                target: '_self',
                rel: null,
              },
              {
                href: '/category/node-%C3%A7al%C4%B1%C5%9Ft%C4%B1r/',
                label: 'Node Çalıştır',
                target: '_self',
                rel: null,
              },
              {
                href: '/category/validator-olun/',
                label: 'Validator Olun',
                target: '_self',
                rel: null,
              },
            ],          
          },
          {
            href: '/category/clash-of-nodes/',
            label: 'Clash of Nodes',
            position: 'left',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Veri Kullanılabilirliği Kaynakları',
            items: [
              {
                href: 'https://blog.availproject.org/the-data-availability-problem/',
                label: 'Veri Kullanılabilirliği Sorunu',
              },
              {
                href: 'https://blog.availproject.org/introducing-avail-by-a-robust-general-purpose-scalable-data-availability-layer/',
                label: 'Avail Nedir?',
              },
              {
                href: 'https://blog.availproject.org/data-attestation-bridge/',
                label: 'Veri Tasdik Köprüsü',
              },
              {
                href: 'https://blog.availproject.org/abilitytoscalepart3/',
                label: 'Ölçeklendirme Yeteneği',
              },
              {
                href: 'https://github.com/availproject/data-availability/blob/master/reference%20document/Data%20Availability%20-%20Reference%20Document.pdf',
                label: 'Referans Dokümanı',
              },
            ],
          },
          {
            title: 'Node Repoları',
            items: [
              {
                href: 'https://github.com/availproject/avail-light',
                label: 'Light Client',
              },
              {
                href: 'https://github.com/availproject/avail',
                label: 'Full Node',
              },
              {
                href: 'https://github.com/availproject/avail-light-bootstrap',
                label: 'Bootstrap Node',
              },
              {
                href: 'https://github.com/availproject/avail-light-relay',
                label: 'Relay Node',
              },
            ],
          },
          {
            title: 'Ağ Rehberleri',
            items: [
              {
                href: '/operate-a-node/node-types/',
                label: 'Node Rehberi',
              },
              {
                href: '/category/validator-olun/',
                label: 'Validator Rehberi',
              },
            ],
          },
          {
            title: 'Topluluk',
            items: [
              {
                href: 'https://discord.com/invite/y6fHnxZQX8',
                label: 'Discord',
              },
              {
                href: 'https://twitter.com/AvailProject',
                label: 'Twitter',
              },
              {
                href: 'https://github.com/availproject',
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/company/availproject/',
                label: 'LinkedIn',
              },
            ],
          },
          {
            title: 'Anatolian Team',
            items: [
              {
                label: 'Website',
                href: 'https://anatolianteam.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AnatolianTeam',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/AnatolianTeam',
              },
              {
                label: 'Link3',
                href: 'https://link3.to/AnatolianTeam',
              },          
              {
                label: 'Telegram',
                href: 'https://t.me/AnatolianTeam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Avail Project. Translated into Turkish by Anatolian Team 🐆`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          docsRouteBasePath: '/',
          language: 'tr'
        }
      ]
    ],
};

export default config;
