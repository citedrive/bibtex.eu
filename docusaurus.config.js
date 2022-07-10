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
          label: 'Overleaf',
          position: 'right',
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
        {
          title: 'CiteDrive',
          items: [
            {
              label: 'CiteDrive - Home',
              to: 'https://citedrive.com/en/',
            },
            {
              label: 'CiteDrive - App',
              to: 'https://app.citedrive.com/',
            },
            {
              label: 'CiteDrive - Forum',
              to: 'http://forum.citedrive.com/',
            },
          ],
        },

        {
          title: 'BibTeX',
          items: [
            {
              label: 'BibTeX - Fields',
              to: '/category/fields',
            },
            // {
            //   label: 'BibTeX - Types',
            //   to: '/types',
            // },
          ],
        },


        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/citedrive',
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/citedrive',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/citedrive',
            },
            {
              label: 'YouTube',
              to: 'https://www.youtube.com/channel/UC3ouAJ9bMVs4wti5cRUd9ag',
            },
          ],
        },
            /*
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
            'https://github.com/citedrive/bibtex.eu/blob/main/',
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
