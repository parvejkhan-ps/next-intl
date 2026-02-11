import { NextIntlClientProvider } from 'next-intl';
import NextIntlProvider from '../i18n/NextIntlProvider';
import ClassBased from '../components/ClassBased';
import { getMessages } from 'next-intl/server';
import { loadNamespaces } from '../i18n/loadNamespaces';
import { getPostData } from '../api';
export default async function Page() {
  const baseMessages = await getMessages(); // from request.ts
    const messages = {
      ...baseMessages,
      ...(await loadNamespaces(['dashboard']))
    };
  return    <NextIntlProvider
          messages={messages}
          >
              <ClassBased />
          </NextIntlProvider>;
}
