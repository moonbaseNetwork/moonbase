// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
title: 'MoonBase',
tagline: "How to find out your child's interest?",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opencogmind', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    {
      algolia:{
        apiKey: '03bc6eb8078009a4ba5ca6b0f7b8920d',
        indexName: 'OpenCogMind',
        contextualSearch: false,
        placeholder: 'Enter name here ',
        appId: 'AGDCIFUF3C',

      },
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenCogMind',
        logo: {
          alt: '',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'AGI',
          },
          {
            type: 'docSidebar',
            routeBasePath:'/',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'AI Safety',
          },
          {
            type: 'docSidebar',
            routeBasePath:'/',
            sidebarId: 'mySidebar2',
            position: 'left',
            label: 'Apps',
          },
          {
            type: 'docSidebar',
            routeBasePath:'/',
            sidebarId: 'demo',
            position: 'left',
            label: 'New Demo',
          },
          {to: '/blog', label: 'Blogs', position: 'left'},
          // {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            // label: 'GitHub',
            // position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        {
        title: 'OpenCogMind',
        items: [
        {
        label: 'AGI',
        to: '/agi/intro',
        },
        
        {
        label: 'AI Safety',
        to: '/aisafety/welcome',
        },
        
        ],
        },
        {
        title: 'Apps',
        items: [
        {
        label: 'GitHub',
        href: 'https://github.com/facebook/docusaurus',
        },
        {
        label: 'Youtube',
        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        }
        ],
        },
        {
        title: 'Community',
        items: [
        {
        label: 'Slack',
        href: 'https://app.slack.com/client/T0632A15V71/D063K9K7FE0',
        },
        {
        label: 'Twitter/X',
        href: 'https://twitter.com/OpencogMind',
        },
        ],
        },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenCogMind.com`,
        },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
       
        
      },
    },
};

module.exports = config;