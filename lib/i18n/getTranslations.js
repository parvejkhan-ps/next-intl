import { getTranslations } from 'next-intl/server';

export async function getTranslation() {
  const t = await getTranslations();

  return (key, values) => {
    // Convert namespace:key → namespace.key
    const normalized = key.replace(':', '.');
    return t(normalized, values);
  };
}

