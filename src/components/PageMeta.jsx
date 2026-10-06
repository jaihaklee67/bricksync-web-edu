import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pageMeta } from '../data/pageMeta';

export const PageMeta = ({ currentView }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const meta = (pageMeta[lang] || pageMeta.ko)[currentView] || pageMeta[lang || 'ko'].home;
    document.title = meta.title;
    document.documentElement.lang = lang;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', meta.description);
  }, [currentView, lang]);

  return null;
};
