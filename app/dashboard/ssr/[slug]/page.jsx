import {getMessages, getTranslations} from 'next-intl/server';
import UserInfo from '../../../components/UserInfo';
import { loadNamespaces } from '../../../i18n/loadNamespaces';
import { getPostData } from '../../../api';
import { NextIntlClientProvider } from 'next-intl';
export async function generateMetadata({params}) {
  const data = await getPostData(params.slug);
  return {
    title: `${data.name}'s Profile`,
  };
}
export default async function DashboardPage({params}) {
  const baseMessages = await getMessages(); // from request.ts
    const data = await getPostData(params.slug);
  
    const messages = {
      ...baseMessages,
      ...(await loadNamespaces(['dashboard']))
    };
  // const t = await getTranslations('dashboard');
  // const t2 = await getTranslations();

  return (
    <NextIntlClientProvider
        messages={messages}
        >
    <div>
      {/* <h1>{t('userName', {userName: 'Parvej khan'})}</h1>
      <h1>{t2('dashboard.userName', {userName: 'Parvej khan T@2'})}</h1>
      <h1>{t2('common.title', {name: 'Parvej khan common@2'})}</h1>
      <h1>{t2('missingKey', {default: 'fallback text'})}</h1> */}
      <UserInfo count={10} data={data}/>
    </div>
    </NextIntlClientProvider>
  );
}
