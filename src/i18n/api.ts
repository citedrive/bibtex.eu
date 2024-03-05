import { UI, defaultLang } from './languages'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in UI) return lang as keyof typeof UI
	return defaultLang
}

export function useTranslations(lang: keyof typeof UI) {
	return function t(key: keyof (typeof UI)[typeof defaultLang]) {
		return UI[lang][key] || UI[defaultLang][key]
	}
}
