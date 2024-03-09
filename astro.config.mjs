import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
const site = 'https://bibtex.eu/';


// https://astro.build/config
export default defineConfig({
  site,
  integrations: [starlight({
    title: 'BibTeX',
    logo: {
      light: './src/assets/images/logo.svg',
      dark: './src/assets/images/logo_dark.svg',
      replacesTitle: true
    },
    head: [{
      tag: 'script',
      attrs: {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7DVBN2XB65',
        type: "text/partytown"
      }
    }],
    social: {
      github: 'https://github.com/citedrive/bibtex.eu',
      twitter: 'https://twitter.com/bibtex_eu '
    },
    defaultLocale: 'root',
    editLink: {
      baseUrl: 'https://github.com/citedrive/bibtex.eu/edit/main/'
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en' // lang is required for root locales
      },
      de: {
        label: 'Deutsch',
        lang: 'de-DE'
      },
      cs: {
        label: 'Čeština',
        lang: 'cs-CZ'
      },
      es: {
        label: 'Español',
        lang: 'es-ES'
      },
      pt: {
        label: 'Português',
        lang: 'pt-PT'
      },
      fr: {
        label: 'Français',
        lang: 'fr-FR'
      },
      sv: {
        label: 'Svenska',
        lang: 'sv-SE'
      },
      tr: {
        label: 'Türkçe',
        lang: 'tr-TR'
      },
      "zh-cn": {
        label: '简体中文',
        lang: 'zh-CN'
      },
      da: {
        label: 'Dansk',
        lang: 'da-DK'
      },
      it: {
        label: 'Italiano',
        lang: 'it-IT'
      },
      ja: {
        label: '日本語',
        lang: 'ja-JP'
      },
      ko: {
        label: '한국어',
        lang: 'ko-KR'
      },
      no: {
        label: 'Norsk',
        lang: 'no-NO'
      },
      ru: {
        label: 'Русский',
        lang: 'ru-RU'
      }
    },
    sidebar: [{
      label: 'Basics',
      items: [{
        label: 'Using LaTeX (Quick start)',
        link: '/'
      }, {
        label: 'Natbib (In-depth Tutorial)',
        link: '/natbib/'
      }, {
        label: 'Using BibLaTeX (Quick start)',
        link: '/biblatex/'
      }, {
        label: 'Using Quarto (RStudio/Posit) (Quick start)',
        link: '/quarto/'
      }, {
        label: 'Using R Markdown (Quick start)',
        link: '/rmarkdown/'
      }, {
        label: 'Using Overleaf (Quick start)',
        link: '/overleaf/'
      }]
    }, {
      collapsed: true,
      label: 'Types',
      autogenerate: {
        directory: 'types'
      }
    }, {
      collapsed: true,
      label: 'Fields',
      autogenerate: {
        directory: 'fields'
      }
    }, {
      collapsed: true,
      label: 'BibTeX FAQ',
      autogenerate: {
        directory: 'faq'
      }
    }, {
      label: 'BibTeX resources',
      items: [{
        label: 'Blog',
        link: '/blog/'
      }, {
        label: 'Overleaf + CiteDrive',
        link: '/overleaf-citedrive/'
      }]
    }, {
      label: 'Links',
      items: [{
        label: '🔗 CiteDrive',
        link: 'https://www.citedrive.com/en/'
      }, {
        label: '🔗 Datanautes',
        link: 'https://datanautes.com/en/'
      }, {
        label: '🔗 R Markdown',
        link: 'https://rmarkdown.net/'
      }, {
        label: '🔗 BehaviorCloud',
        link: 'https://www.behaviorcloud.com/en/'
      }]
    }]
  }), sitemap(), partytown()]
});