import { HEADER } from './translations/header'
import { FOOTER } from './translations/footer'
import { HERO } from './translations/hero'
import { FEATURES } from './translations/home-features'
import { MISSINGTRANSLATION } from './translations/messages/missing-translation'
import { META } from './translations/meta'
import { BIBTEX_STYLE_TEMPLATE } from './translations/bibtex-style-teamplate'
import { SMALL_BANNER } from './translations/ads/small-banner'

export const languages = {
	en: 'English',
	de: 'Deutsch',
	cs: 'Čeština',
	es: 'Español',
	pt: 'Português',
	fr: 'Français',
	sv: 'Svenska',
	tr: 'Türkçe',
	'zh-cn': '中文（中国',
	da: 'Dansk',
	it: 'Italiano',
	ja: '日本語',
	ko: '한국어',
	no: 'Norsk',
	ru: 'Русский'
} as const

export const defaultLang = 'en'

export const UI = {
	en: {
		...HEADER.en,
		...FOOTER.en,
		...HERO.en,
		...FEATURES.en,
		...MISSINGTRANSLATION.en,
		...META.en,
		...BIBTEX_STYLE_TEMPLATE.en,
		...SMALL_BANNER.en
	},
	de: {
		...HEADER.de,
		...FOOTER.de,
		...HERO.de,
		...FEATURES.de,
		...MISSINGTRANSLATION.de,
		...META.de,
		...BIBTEX_STYLE_TEMPLATE.de,
		...SMALL_BANNER.de
	},
	cs: {
		...HEADER.cs,
		...FOOTER.cs,
		...HERO.cs,
		...FEATURES.cs,
		...MISSINGTRANSLATION.cs,
		...META.cs,
		...BIBTEX_STYLE_TEMPLATE.cs,
		...SMALL_BANNER.cs
	},
	es: {
		...HEADER.es,
		...FOOTER.es,
		...HERO.es,
		...FEATURES.es,
		...MISSINGTRANSLATION.es,
		...META.es,
		...BIBTEX_STYLE_TEMPLATE.es,
		...SMALL_BANNER.es
	},
	pt: {
		...HEADER.pt,
		...FOOTER.pt,
		...HERO.pt,
		...FEATURES.pt,
		...MISSINGTRANSLATION.pt,
		...META.pt,
		...BIBTEX_STYLE_TEMPLATE.pt,
		...SMALL_BANNER.pt
	},
	fr: {
		...HEADER.fr,
		...FOOTER.fr,
		...HERO.fr,
		...FEATURES.fr,
		...MISSINGTRANSLATION.fr,
		...META.fr,
		...BIBTEX_STYLE_TEMPLATE.fr,
		...SMALL_BANNER.fr
	},
	sv: {
		...HEADER.sv,
		...FOOTER.sv,
		...HERO.sv,
		...FEATURES.sv,
		...MISSINGTRANSLATION.sv,
		...META.sv,
		...BIBTEX_STYLE_TEMPLATE.sv,
		...SMALL_BANNER.sv
	},
	tr: {
		...HEADER.tr,
		...FOOTER.tr,
		...HERO.tr,
		...FEATURES.tr,
		...MISSINGTRANSLATION.tr,
		...META.tr,
		...BIBTEX_STYLE_TEMPLATE.tr,
		...SMALL_BANNER.tr
	},
	'zh-cn': {
		...HEADER['zh-cn'],
		...FOOTER['zh-cn'],
		...HERO['zh-cn'],
		...FEATURES['zh-cn'],
		...MISSINGTRANSLATION['zh-cn'],
		...META['zh-cn'],
		...BIBTEX_STYLE_TEMPLATE['zh-cn'],
		...SMALL_BANNER['zh-cn']
	},
	da: {
		...HEADER.da,
		...FOOTER.da,
		...HERO.da,
		...FEATURES.da,
		...MISSINGTRANSLATION.da,
		...META.da,
		...BIBTEX_STYLE_TEMPLATE.da,
		...SMALL_BANNER.da
	},
	it: {
		...HEADER.it,
		...FOOTER.it,
		...HERO.it,
		...FEATURES.it,
		...MISSINGTRANSLATION.it,
		...META.it,
		...BIBTEX_STYLE_TEMPLATE.it,
		...SMALL_BANNER.it
	},
	ja: {
		...HEADER.ja,
		...FOOTER.ja,
		...HERO.ja,
		...FEATURES.ja,
		...MISSINGTRANSLATION.ja,
		...META.ja,
		...BIBTEX_STYLE_TEMPLATE.ja,
		...SMALL_BANNER.ja
	},
	ko: {
		...HEADER.ko,
		...FOOTER.ko,
		...HERO.ko,
		...FEATURES.ko,
		...MISSINGTRANSLATION.ko,
		...META.ko,
		...BIBTEX_STYLE_TEMPLATE.ko,
		...SMALL_BANNER.ko
	},
	no: {
		...HEADER.no,
		...FOOTER.no,
		...HERO.no,
		...FEATURES.no,
		...MISSINGTRANSLATION.no,
		...META.no,
		...BIBTEX_STYLE_TEMPLATE.no,
		...SMALL_BANNER.no
	},
	ru: {
		...HEADER.ru,
		...FOOTER.ru,
		...HERO.ru,
		...FEATURES.ru,
		...MISSINGTRANSLATION.ru,
		...META.ru,
		...BIBTEX_STYLE_TEMPLATE.ru,
		...SMALL_BANNER.ru
	}
}
