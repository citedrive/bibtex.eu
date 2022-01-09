const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BibTeX',
  tagline: 'BibTeX is a literature management software for formatting references for LaTeX. ',
  url: 'https://bibtex.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'citedrive', // Usually your GitHub org/user name.
  projectName: 'bibtex.eu', // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        blogTitle: "BibTeX bibliography and citation styles",
        /**
         * Required for any multi-instance plugin
         */
        id: "styles",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "styles",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./styles",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        blogTitle: "BibTeX / BibLaTeX fields",
        /**
         * Required for any multi-instance plugin
         */
        id: "fields",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "fields",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./fields",
        blogSidebarTitle: 'BibTeX Fields',
         blogSidebarCount: 'ALL',
      },
    ],
    ],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'BibTeX Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [


        {
          href: '/overleaf-citedrive',
          label: 'Overleaf + CiteDrive',
          position: 'left',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/citedrive/bibtex.eu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',

      links: [
        /*
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/citedrive/bibtex.eu',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BibTeX.eu - Open source docs - Sponsored by CiteDrive LLC.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
           routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/citedrive/bibtex.eu/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/citedrive/bibtex.eu/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
