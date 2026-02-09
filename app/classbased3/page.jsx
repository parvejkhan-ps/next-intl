import { NextIntlClientProvider } from 'next-intl';
import ClassBased from '../components/ClassBased';
import { getMessages } from 'next-intl/server';
import { loadNamespaces } from '../i18n/loadNamespaces';
import { getPostData } from '../api';

export default async function Page() {
  const baseMessages = await getMessages(); // from request.ts
    const data = await getPostData("2");
    const messages = {
      ...baseMessages,
      ...(await loadNamespaces(['campaignProfile']))
    };
  return    <NextIntlClientProvider
          messages={messages}
          >
            <ClassBased />
          </NextIntlClientProvider>;
}
