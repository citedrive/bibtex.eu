import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
const site = 'https://bibtex.eu/';


// https://astro.build/config
export default defineConfig({
  site,
  integrations: [starlight({
    // head: [{
    //   tag: 'script',
    //   attrs: {
    //     async: true,
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9078114372269384',
    //     'crossorigin': 'anonymous'
    //   }
    // }],
    title: 'BibTeX',
    logo: {
      light: './src/assets/images/logo.svg',
      dark: './src/assets/images/logo_dark.svg',
      replacesTitle: true
    },
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/citedrive/bibtex.eu' },
      { icon: 'x.com', label: 'Twitter', href: 'https://twitter.com/bibtex_eu' },
    ],
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
      translations: {
        "de-DE": "Grundlagen",
        "cs-CZ": "Základy",
        "es-ES": "Conceptos básicos",
        "pt-PT": "Noções básicas",
        "fr-FR": "Fondamentaux",
        "sv-SE": "Grundläggande",
        "tr-TR": "Temel",
        "zh-CN": "基础",
        "da-DK": "Grundlæggende",
        "it-IT": "Principi",
        "ja-JP": "基本",
        "ko-KR": "기초",
        "no-NO": "Grunnleggende",
        "ru-RU": "Основы"
      },
      items: [{
        label: 'Using LaTeX (Quick start)',
        link: '/',
        translations: {
          "de-DE": "Verwendung von LaTeX (Schnellstart)",
          "cs-CZ": "Použití LaTeXu (Rychlý start)",
          "es-ES": "Uso de LaTeX (Inicio rápido)",
          "pt-PT": "Usando LaTeX (Início rápido)",
          "fr-FR": "Utilisation de LaTeX (Démarrage rapide)",
          "sv-SE": "Använda LaTeX (Snabbstart)",
          "tr-TR": "LaTeX Kullanımı (Hızlı başlangıç)",
          "zh-CN": "使用 LaTeX（快速入门）",
          "da-DK": "Brug af LaTeX (Hurtig start)",
          "it-IT": "Utilizzo di LaTeX (Avvio rapido)",
          "ja-JP": "LaTeX の使用（クイックスタート）",
          "ko-KR": "LaTeX 사용하기 (빠른 시작)",
          "no-NO": "Bruk av LaTeX (Hurtigstart)",
          "ru-RU": "Использование LaTeX (Быстрый старт)"
        }
      }, {
        label: 'Natbib (In-depth Tutorial)',
        link: '/natbib/',
        translations: {
          "de-DE": "Natbib (Ausführliches Tutorial)",
          "cs-CZ": "Natbib (Podrobný průvodce)",
          "es-ES": "Natbib (Tutorial detallado)",
          "pt-PT": "Natbib (Tutorial detalhado)",
          "fr-FR": "Natbib (Tutoriel approfondi)",
          "sv-SE": "Natbib (Djupgående handledning)",
          "tr-TR": "Natbib (Detaylı Kılavuz)",
          "zh-CN": "Natbib（深入教程）",
          "da-DK": "Natbib (Dybdegående vejledning)",
          "it-IT": "Natbib (Tutorial approfondito)",
          "ja-JP": "Natbib（詳細なチュートリアル）",
          "ko-KR": "Natbib 사용법 (심층 튜토리얼)",
          "no-NO": "Natbib (Dypgående veiledning)",
          "ru-RU": "Natbib (Подробное руководство)"
        }
      }, {
        label: 'Using BibLaTeX (Quick start)',
        link: '/biblatex/',
        translations: {
          "de-DE": "Verwendung von BibLaTeX (Schnellstart)",
          "cs-CZ": "Použití BibLaTeXu (Rychlý start)",
          "es-ES": "Uso de BibLaTeX (Inicio rápido)",
          "pt-PT": "Usando BibLaTeX (Início rápido)",
          "fr-FR": "Utilisation de BibLaTeX (Démarrage rapide)",
          "sv-SE": "Använda BibLaTeX (Snabbstart)",
          "tr-TR": "BibLaTeX Kullanımı (Hızlı başlangıç)",
          "zh-CN": "使用 BibLaTeX（快速入门）",
          "da-DK": "Brug af BibLaTeX (Hurtig start)",
          "it-IT": "Utilizzo di BibLaTeX (Avvio rapido)",
          "ja-JP": "BibLaTeX の使用（クイックスタート）",
          "ko-KR": "BibLaTeX 사용하기 (빠른 시작)",
          "no-NO": "Bruk av BibLaTeX (Hurtigstart)",
          "ru-RU": "Использование BibLaTeX (Быстрый старт)"
        }
      }, {
        label: 'Using Quarto (RStudio/Posit) (Quick start)',
        link: '/quarto/',
        translations: {
          "de-DE": "Verwendung von Quarto (RStudio/Posit) (Schnellstart)",
          "cs-CZ": "Použití Quarto (RStudio/Posit) (Rychlý start)",
          "es-ES": "Uso de Quarto (RStudio/Posit) (Inicio rápido)",
          "pt-PT": "Usando Quarto (RStudio/Posit) (Início rápido)",
          "fr-FR": "Utilisation de Quarto (RStudio/Posit) (Démarrage rapide)",
          "sv-SE": "Använda Quarto (RStudio/Posit) (Snabbstart)",
          "tr-TR": "Quarto Kullanımı (RStudio/Posit) (Hızlı başlangıç)",
          "zh-CN": "使用 Quarto (RStudio/Posit)（快速入门）",
          "da-DK": "Brug af Quarto (RStudio/Posit) (Hurtig start)",
          "it-IT": "Utilizzo di Quarto (RStudio/Posit) (Avvio rapido)",
          "ja-JP": "Quarto の使用（RStudio/Posit）（クイックスタート）",
          "ko-KR": "Quarto 사용하기 (RStudio/Posit) (빠른 시작)",
          "no-NO": "Bruk av Quarto (RStudio/Posit) (Hurtigstart)",
          "ru-RU": "Использование Quarto (RStudio/Posit) (Быстрый старт)"
        }
      }, {
        label: 'Using R Markdown (Quick start)',
        link: '/rmarkdown/',
        translations: {
          "de-DE": "Verwendung von R Markdown (Schnellstart)",
          "cs-CZ": "Použití R Markdown (Rychlý start)",
          "es-ES": "Uso de R Markdown (Inicio rápido)",
          "pt-PT": "Usando R Markdown (Início rápido)",
          "fr-FR": "Utilisation de R Markdown (Démarrage rapide)",
          "sv-SE": "Använda R Markdown (Snabbstart)",
          "tr-TR": "R Markdown Kullanımı (Hızlı başlangıç)",
          "zh-CN": "使用 R Markdown（快速入门）",
          "da-DK": "Brug af R Markdown (Hurtig start)",
          "it-IT": "Utilizzo di R Markdown (Avvio rapido)",
          "ja-JP": "R Markdown の使用（クイックスタート）",
          "ko-KR": "R Markdown 사용하기 (빠른 시작)",
          "no-NO": "Bruk av R Markdown (Hurtigstart)",
          "ru-RU": "Использование R Markdown (Быстрый старт)"
        }
      }, {
        label: 'Using Overleaf (Quick start)',
        link: '/overleaf/',
        translations: {
          "de-DE": "Verwendung von Overleaf (Schnellstart)",
          "cs-CZ": "Použití Overleaf (Rychlý start)",
          "es-ES": "Uso de Overleaf (Inicio rápido)",
          "pt-PT": "Usando Overleaf (Início rápido)",
          "fr-FR": "Utilisation d'Overleaf (Démarrage rapide)",
          "sv-SE": "Använda Overleaf (Snabbstart)",
          "tr-TR": "Overleaf Kullanımı (Hızlı başlangıç)",
          "zh-CN": "使用 Overleaf（快速入门）",
          "da-DK": "Brug af Overleaf (Hurtig start)",
          "it-IT": "Utilizzo di Overleaf (Avvio rapido)",
          "ja-JP": "Overleaf の使用（クイックスタート）",
          "ko-KR": "Overleaf 사용하기 (빠른 시작)",
          "no-NO": "Bruk av Overleaf (Hurtigstart)",
          "ru-RU": "Использование Overleaf (Быстрый старт)"
        }
      }]
    }, {
      collapsed: true,
      label: 'Reference Types',
      translations: {
        "de-DE": "Referenztypen",
        "cs-CZ": "Typy referencí",
        "es-ES": "Tipos de referencia",
        "pt-PT": "Tipos de referência",
        "fr-FR": "Types de référence",
        "sv-SE": "Referenstyper",
        "tr-TR": "Referans Türleri",
        "zh-CN": "参考类型",
        "da-DK": "Referencestyper",
        "it-IT": "Tipi di riferimento",
        "ja-JP": "参照タイプ",
        "ko-KR": "참조 유형",
        "no-NO": "Referansetyper",
        "ru-RU": "Типы ссылок"
      },
      autogenerate: {
        directory: 'types'
      }
    }, {
      collapsed: true,
      label: 'Fields',
      translations: {
        "de-DE": "Felder",
        "cs-CZ": "Pole",
        "es-ES": "Campos",
        "pt-PT": "Campos",
        "fr-FR": "Champs",
        "sv-SE": "Fält",
        "tr-TR": "Alanlar",
        "zh-CN": "字段",
        "da-DK": "Felter",
        "it-IT": "Campi",
        "ja-JP": "フィールド",
        "ko-KR": "필드",
        "no-NO": "Felter",
        "ru-RU": "Поля"
      },
      autogenerate: {
        directory: 'fields'
      }
    }, {
      collapsed: true,
      label: 'BibTeX FAQ',
      translations: {
        "de-DE": "BibTeX FAQ",
        "cs-CZ": "BibTeX FAQ",
        "es-ES": "Preguntas frecuentes sobre BibTeX",
        "pt-PT": "FAQ do BibTeX",
        "fr-FR": "FAQ BibTeX",
        "sv-SE": "BibTeX FAQ",
        "tr-TR": "BibTeX SSS",
        "zh-CN": "BibTeX 常见问题",
        "da-DK": "BibTeX FAQ",
        "it-IT": "FAQ su BibTeX",
        "ja-JP": "BibTeX FAQ",
        "ko-KR": "BibTeX FAQ",
        "no-NO": "BibTeX FAQ",
        "ru-RU": "BibTeX FAQ"
      },
      autogenerate: {
        directory: 'faq'
      }
    }, {
      collapsed: true,
      label: 'Citation & Bibliography Styles',
      translations: {
        "de-DE": "Zitations- und Bibliographiestile",
        "cs-CZ": "Styly citací a bibliografie",
        "es-ES": "Estilos de citas y bibliografía",
        "pt-PT": "Estilos de citação e bibliografia",
        "fr-FR": "Styles de citation et de bibliographie",
        "sv-SE": "Citat- och bibliografistilar",
        "tr-TR": "Atıf ve Kaynakça Stilleri",
        "zh-CN": "引用和参考文献样式",
        "da-DK": "Citat- og bibliografistile",
        "it-IT": "Stili di citazione e bibliografia",
        "ja-JP": "引用・参考文献スタイル",
        "ko-KR": "인용 및 참고문헌 스타일",
        "no-NO": "Sitat- og bibliografistiler",
        "ru-RU": "Стили цитирования и библиографии"
      },
      items: [{
        label: 'A',
        link: '/citation-and-bibliography-styles/a/'
      }, {
        label: 'B–D',
        link: '/citation-and-bibliography-styles/b-d/'
      }, {
        label: 'E–G',
        link: '/citation-and-bibliography-styles/e-g/'
      }, {
        label: 'H–J',
        link: '/citation-and-bibliography-styles/h-j/'
      }, {
        label: 'K–P',
        link: '/citation-and-bibliography-styles/k-p/'
      }, {
        label: 'R–Z',
        link: '/citation-and-bibliography-styles/r-z/'
      }]
    }, {
      label: 'BibTeX resources',
      translations: {
        "de-DE": "BibTeX-Ressourcen",
        "cs-CZ": "BibTeX zdroje",
        "es-ES": "Recursos de BibTeX",
        "pt-PT": "Recursos BibTeX",
        "fr-FR": "Ressources BibTeX",
        "sv-SE": "BibTeX-resurser",
        "tr-TR": "BibTeX kaynakları",
        "zh-CN": "BibTeX 资源",
        "da-DK": "BibTeX ressourcer",
        "it-IT": "Risorse BibTeX",
        "ja-JP": "BibTeX リソース",
        "ko-KR": "BibTeX 자료",
        "no-NO": "BibTeX ressurser",
        "ru-RU": "Ресурсы BibTeX"
      },
      items: [{
        label: 'Blog',
        link: '/blog/'
      }, {
        label: 'Overleaf + CiteDrive',
        link: '/overleaf-citedrive/'
      }]
    }, {
      label: 'Links',
      translations: {
        "de-DE": "Links",
        "cs-CZ": "Odkazy",
        "es-ES": "Enlaces",
        "pt-PT": "Links",
        "fr-FR": "Liens",
        "sv-SE": "Länkar",
        "tr-TR": "Bağlantılar",
        "zh-CN": "链接",
        "da-DK": "Links",
        "it-IT": "Collegamenti",
        "ja-JP": "リンク",
        "ko-KR": "링크",
        "no-NO": "Lenker",
        "ru-RU": "Ссылки"
      },
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
  }), sitemap(), react()]
});