    import { getTranslations } from 'next-intl/server';
import ProfileHead from '../components/ProfileHead';

export default async function Page() {
  const t = await getTranslations('campaignProfile');

  return <ProfileHead />;
}
