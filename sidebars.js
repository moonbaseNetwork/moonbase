/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{
    type: 'category',
    label: 'MoonBase',
    items: [
      'MoonBase/intro',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-basics',
    items: [
      'MoonBase/tutorial-basics/congratulations',
      'MoonBase/tutorial-basics/create-a-blog-post',
      'MoonBase/tutorial-basics/create-a-document',
      'MoonBase/tutorial-basics/create-a-page',
      'MoonBase/tutorial-basics/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',
    items: [
      'MoonBase/tutorial-extras/manage-docs-versions',
      'MoonBase/tutorial-extras/translate-your-site',
  
    ],
  },],

  mySidebar: [{type: 'category',
  label: 'Events',
  items: [
    'Events/welcome',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'tutorial-basics',
    items: [
      'Events/tutorial-basics/congratulations',
      'Events/tutorial-basics/create-a-blog-post',
      'Events/tutorial-basics/create-a-document',
      'Events/tutorial-basics/create-a-page',
      'Events/tutorial-basics/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',
    items: [
      'Events/tutorial-extras/manage-docs-versions',
      'Events/tutorial-extras/translate-your-site',
  
    ],
  },],

  mySidebar2: [{type: 'category',
  label: 'Podcasts',
  items: [
  
    'Podcasts/welcome',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'tutorial-basics',
    items: [
      'Podcasts/tutorial-basics/congratulations',
      'Podcasts/tutorial-basics/create-a-blog-post',
      'Podcasts/tutorial-basics/create-a-document',
      'Podcasts/tutorial-basics/create-a-page',
      'Podcasts/tutorial-basics/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',
    items: [
      'Podcasts/tutorial-extras/manage-docs-versions',
      'Podcasts/tutorial-extras/translate-your-site',
  
    ],
  },],
  
   
  
};
 
module.exports = sidebars;
