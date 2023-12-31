// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
title: 'How to find out your Childs Interest ?',
tagline: "MoonBase",
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://moonbasenet.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MoonBase', // Usually your GitHub org/user name.
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
        apiKey: 'a18d6ff1451c8dc954cc7fb399354639',
        indexName: 'MoonBase',
        contextualSearch: false,
        placeholder: 'Enter name here ',
        appId: '68WPID8VPC',

      },
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MoonBase',
        logo: {
          alt: '',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'MoonBase',
          // },
          {
            type: 'docSidebar',
            routeBasePath:'/',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'Events',
          },
          {
            type: 'docSidebar',
            routeBasePath:'/',
            sidebarId: 'mySidebar2',
            position: 'left',
            label: 'Podcasts',
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
        title: 'MoonBase',
        items: [
        {
        label: 'Podcasts',
        to: '/Podcasts/welcome',
        },
        
        
        
        
        ],
        },
        {
        title: 'Events',
        items: [
          {
            label: 'Events',
            to: '/Events/welcome',
            },
        ],
        },
        {
        title: 'Community',
        items: [
        {
        label: 'Twitter/X',
        href: 'https://twitter.com/OpencogMind',
        },
        ],
        },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} moonbase.network`,
        },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
       
        
      },
    },
};

module.exports = config;