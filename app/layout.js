import { log } from 'console';
import { NextIntlClientProvider } from 'next-intl';
import IntlErrorHandlingProvider from './i18n/IntlErrorHandlingProvider';
// import { getMessages } from 'next-intl/server';

export default async function RootLayout({ children }) {
  // const messages = await getMessages();
  // console.log('Messages in RootLayout:', messages);
  

  return (
    <html lang="en">
      <body>
         {/* <NextIntlClientProvider >  */}
        {/* <IntlErrorHandlingProvider > */}
          {children}
          {/* </IntlErrorHandlingProvider> */}
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
