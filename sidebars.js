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
    label: 'AGI',
    items: [
      'agi/intro',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-basics',
    items: [
      'agi/tutorial-basics/congratulations',
      'agi/tutorial-basics/create-a-blog-post',
      'agi/tutorial-basics/create-a-document',
      'agi/tutorial-basics/create-a-page',
      'agi/tutorial-basics/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',
    items: [
      'agi/tutorial-extras/manage-docs-versions',
      'agi/tutorial-extras/translate-your-site',
  
    ],
  },],

  mySidebar: [{type: 'category',
  label: 'AI Safety',
  items: [
    'aisafety/welcome',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'tutorial-basics',
    items: [
      'aisafety/tutorial-basics/congratulations',
      'aisafety/tutorial-basics/create-a-blog-post',
      'aisafety/tutorial-basics/create-a-document',
      'aisafety/tutorial-basics/create-a-page',
      'aisafety/tutorial-basics/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',
    items: [
      'aisafety/tutorial-extras/manage-docs-versions',
      'aisafety/tutorial-extras/translate-your-site',
  
    ],
  },],

  mySidebar2: [{type: 'category',
  label: 'Apps',
  items: [
  
    'Apps/welcome',
    // Add more documentation links as needed
  ],},
  {
    type: 'category',
    label: 'tutorial-basics',
    items: [
      'Apps/tutorial-basics/congratulations',
      'Apps/tutorial-basics/create-a-blog-post',
      'Apps/tutorial-basics/create-a-document',
      'Apps/tutorial-basics/create-a-page',
      'Apps/tutorial-basics/deploy-your-site',
    ],
  },
  {
    type: 'category',
    label: 'tutorial-extras',
    items: [
      'Apps/tutorial-extras/manage-docs-versions',
      'Apps/tutorial-extras/translate-your-site',
  
    ],
  },],
  
  demo: [{ type:'category', label:'demo',
          items:[
            'demo/intro',
          ],},],
  
};
 
module.exports = sidebars;
