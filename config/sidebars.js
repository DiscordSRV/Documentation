/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'index'
    },
    {
      type: 'doc',
      label: 'Frequently Asked Questions',
      id: 'faq',
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'installation/index'
      },
      items: [
        {
          type: 'doc',
          label: 'Initial Setup',
          id: 'installation/initial-setup',
        },
        {
          type: 'doc',
          label: 'Sync Setup',
          id: 'installation/sync-setup',
        },
        {
          type: 'doc',
          label: 'Voice Setup',
          id: 'installation/voice-setup',
        },
        {
          type: 'doc',
          label: 'Link to Join Setup',
          id: 'installation/link-to-join-setup',
        },
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Configs',
      items: [
        {
          label: 'alerts.yml',
          id: 'alerts/index',
          type: 'doc'
        },
        {
          label: 'config.yml',
          id: 'config',
          type: 'doc'
        },
        {
          label: 'linking.yml',
          id: 'linking',
          type: 'doc'
        },
        {
          label: 'messages.yml',
          id: 'messages',
          type: 'doc'
        },
        {
          label: 'synchronization.yml',
          id: 'synchronization',
          type: 'doc'
        },
        {
          label: 'voice.yml',
          id: 'voice',
          type: 'doc'
        },
      ],
    },
    {
      type: 'doc',
      label: 'Commands',
      id: 'commands',
    },
    {
      label: 'Permissions',
      type: 'doc',
      id: 'permissions',
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Hooked plugin features',
      items: [
        {
          type: 'doc',
          id: 'lp-contexts',
          label: 'LuckPerms Contexts'
        },
        {
          type: 'doc',
          id: 'papi-placeholders',
          label: 'PlaceholderAPI Placeholders'
        },
      ],
    },
    {
      label: 'Intent Application',
      type: 'doc',
      id: 'intent-application'
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Troubleshooting',
      items: [
        {
          type: 'link',
          href: 'https://github.com/DiscordSRV/DiscordSRV/issues',
          label: 'Report a bug'
        },
        {
          type: 'link',
          href: 'https://github.com/DiscordSRV/DiscordSRV/issues',
          label: 'Request a feature'
        },
        {
          type: 'link',
          href: 'https://discordsrv.com/discord',
          label: 'Ask for support'
        },
      ],
    },
  ],
  ascensionSidebar: [
    {
      type: 'doc',
      id: 'ascension/index',
      label: 'Ascension Home'
    },
    {
      type: 'doc',
      id: 'ascension/compatibility',
      label: 'Compatibility'
    },
    {
      type: 'doc',
      id: 'ascension/performance',
      label: 'Performance'
    },
    {
      type: 'doc',
      id: 'ascension/security',
      label: 'Security'
    },
    {
      type: 'doc',
      id: 'ascension/placeholders',
      label: 'Placeholders'
    },
      {
      type: 'doc',
      id: 'ascension/commands',
      label: 'Commands',
    },
    {
      type: 'doc',
      id: 'ascension/permissions',
      label: 'Permissions'
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Configuration',
      items: [
        {
          type: 'doc',
          id: 'ascension/config/discord-messages',
          label: 'Discord Message Format'
        },
        {
          type: 'doc',
          id: 'ascension/config/config',
          label: 'config.yaml'
        },
        // {
        //   type: 'doc',
        //   id: 'ascension/proxy-config',
        //   label: 'Proxy config.yaml'
        // },
        {
          type: 'doc',
          id: 'ascension/config/connections',
          label: 'connections.yaml'
        },
        {
          type: 'doc',
          id: 'ascension/config/messages',
          label: 'messages.yaml'
        },
      ],
    },
    /*{
      type: 'category',
      collapsed: false,
      label: 'Troubleshooting',
      items: [
        {
          type: 'link',
          href: 'https://github.com/DiscordSRV/DiscordSRV/issues',
          label: 'Report a bug'
        },
        {
          type: 'link',
          href: 'https://github.com/DiscordSRV/DiscordSRV/issues',
          label: 'Request a feature'
        },
        {
          type: 'link',
          href: 'https://discordsrv.com/discord',
          label: 'Ask for support'
        },
      ],
    },*/
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
