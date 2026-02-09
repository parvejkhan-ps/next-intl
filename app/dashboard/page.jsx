import {getMessages, getTranslations} from 'next-intl/server';
import UserInfo from '../components/UserInfo';
import UserInfoSSR from '../components/UserInfossr';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { loadNamespaces } from '../i18n/loadNamespaces';
import { getPostData } from '../api';
// import { getMessages } from '../i18n/getMessages';
export async function generateMetadata({params}) {
  const data = await getPostData("1");
  return {
    title: `${data.name}'s Profile`,
  };
}
export default async function DashboardPage() {
  // const messages = await getMessages(['common','dashboard']); // from request.ts
   const baseMessages = await getMessages(); // from request.ts
  const data = await getPostData("1");

  const messages = {
    ...baseMessages,
    ...(await loadNamespaces(['dashboard']))
  };
  console.log("Mess",messages);
  
  // const t =  await getTranslations();
  // const t2 =  useTranslations();
// console.log("t",t('dashboard.userName', {userName: 'Parvej khan T@2'}));
  return (
    <>
    <NextIntlClientProvider
    messages={messages}
    >
    <div>
      {/* <h1>{t('common.shareProfileHeader')}</h1> */}
      {/* <h1>{t('dashboard.userName', {userName: 'Parvej khan'})}</h1> */}
      {/* <h1>{t('common.title', {name: data.name})}</h1> */}
      {/* <h1>{t2('dashboard.userName', {userName: 'Parvej khan T@2'})}</h1>
      <h1>{t2('missingKey', {default: 'fallback text'})}</h1> */}
      <UserInfo count={10} data={data}/>
    </div>
    </NextIntlClientProvider>

      {/* <h1>{t('dashboard.userName', {userName: 'Parvej khan'})}</h1> */}
    </>
  );
}
