const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "BibTeX",
  tagline:
    "BibTeX is a literature management software for formatting references for LaTeX. ",
  url: "https://bibtex.eu",
  baseUrl: "/",
  onBrokenLinks: "throw",
  trailingSlash: true,
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "citedrive", // Usually your GitHub org/user name.
  projectName: "bibtex.eu", // Usually your repo name.
  plugins: [],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "cs", "es", "pt", "fr", "sv", "tr", "zh-CN", "da", "it", "ja", "ko", "no","ru"],
  },
  themeConfig: {
    navbar: {
      title: "",

      logo: {
        alt: "BibTeX Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
        width: 32,
        height: 32
      },

      items: [
        {
          type: "localeDropdown",
          position: "right",
        },

        {
          href: "/overleaf-citedrive",
          label: "Overleaf",
          position: "right",
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/citedrive/bibtex.eu",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "CiteDrive",
          items: [
            {
              label: "CiteDrive",
              to: "https://www.citedrive.com/",
            },
            {
              label: "Login (App)",
              to: "https://app.citedrive.com/",
            },
            {
              label: "Blog",
              to: "https://www.citedrive.com/blog",
            },
            {
              label: "Docs",
              to: "https://www.citedrive.com/docs/quick-startg",
            },
            {
              label: "Overleaf integration",
              to: "https://www.citedrive.com/overleaf",
            },
             {
              label: "GitHub Discussions",
              to: "https://github.com/orgs/citedrive/discussions",
            },
          ],
        },
        {
          title: "CiteDrive Community",
          items: [
            {
              label: "Twitter",
              to: "https://twitter.com/citedrive",
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/citedrive",
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/company/citedrive",
            },
            {
              label: "YouTube",
              to: "https://www.youtube.com/channel/UC3ouAJ9bMVs4wti5cRUd9ag",
            },
          ],
        },
        {
          title: "bibtex.eu",
          items: [
            {
              label: "BibTeX",
              href: "http://bibtex.eu/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/bibtex_eu",
            },
          ],
        },

        {
          title: "rmarkdown.net",
          items: [
            {
              label: "R Markdown",
              href: "http://rmarkdown.net/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/rmarkdown",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/citedrive/bibtex.eu",
            },
            {
              label: "Datanautes",
              href: "https://datanautes.com",
            },
          ],
        },
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
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: "G-7DVBN2XB65",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/citedrive/bibtex.eu/blob/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/citedrive/bibtex.eu/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
