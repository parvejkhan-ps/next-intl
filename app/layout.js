import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from '@/lib/i18n/getMessages';

export default async function RootLayout({children}) {
  const locale = 'en';

  const messages = await getMessages(locale, ['dashboard','campaignProfile','giveCommon']);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
