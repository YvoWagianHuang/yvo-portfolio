import 'server-only';

const dictionaries = {
  zh: () => import('./zh.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  fi: () => import('./fi.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'zh' | 'en' | 'fi') => {
  return dictionaries[locale]();
};
