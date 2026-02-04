import { useTranslation } from '@/lib/i18n/useTranslations';
// import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslation();
  return <>
  <h1>{t('giveCommon:userName', { userName: "parvej khan" })}</h1>
  <h1>{t('dashboard:userName', { userName: "parvej khan" })}</h1>
  </>;
}