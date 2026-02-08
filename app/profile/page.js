import {getTranslations} from 'next-intl/server';

export default async function ProfilePage() {
  const t = await getTranslations('campaignProfile');

  return <h1>{t('editBtn')}</h1>;
}
