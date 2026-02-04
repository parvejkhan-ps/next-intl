import { useTranslations } from 'next-intl';

export function useTranslation() {
  const t = useTranslations();

  return (key, values) => {
    // Convert namespace:key → namespace.key
    const normalized = key.replace(':', '.');
    return t(normalized, values);
  };
}
