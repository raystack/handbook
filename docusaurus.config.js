const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'ODPF Handbook',
  tagline: 'Handbook for ODPF developers',
  url: 'https://odpf.github.io/',
  baseUrl: '/handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'ODPF',
  projectName: 'handbook',

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        gtag: {
          trackingID: 'G-XXX',
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/odpf/handbook/edit/master/docs/',
          sidebarCollapsed: false,
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/theme.css'),
            require.resolve('./src/css/icons.css'),
          ],
        },
      })
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Handbook',
        logo: { src: '/logo.svg', },
        hideOnScroll: true,
        items: [
          {
            href: 'https://bit.ly/2RzPbtn',
            position: 'right',
            className: 'header-slack-link',
          },
          {
            href: 'https://github.com/odpf/handbook',
            className: 'navbar-item-github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
});
