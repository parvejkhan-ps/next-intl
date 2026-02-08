import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations()

  return (
    <div>
      <h1>{t('common.description',{count: 10})}</h1>
      <p>{t('common.title', { name: 'Parvej' })}</p>
      <p>{t('dashboard.userName', { userName: 'Parvej' })}</p>
      <p>{t('dashboard.missed', {default:"No missed messages"})}</p>
    </div>
  );
}
