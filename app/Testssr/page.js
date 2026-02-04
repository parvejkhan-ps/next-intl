// import {getTranslations} from 'next-intl/server';

import { getPostData } from '../api';
import { getTranslation } from '@/lib/i18n/getTranslations';
 
export default async function HomePage() {
  const data = await getPostData("1");
  console.log("data",data);
  
  const t = await getTranslation();
  return <>
  <h1>{t('giveCommon:userName', { userName: data.name })}</h1>
  <h1>{t('dashboard:userName', { userName: data.name })}</h1>
  </>;
}

// dashboard.userName
// champrofile.userName 