import { log } from 'console';
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';

export default async function RootLayout({ children }) {
  // const messages = await getMessages();
  // console.log('Messages in RootLayout:', messages);
  

  return (
    <html lang="en">
      <body>
        {/* <NextIntlClientProvider
          messages={messages}
          fallbackOnEmptyString
        > */}
          {children}
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
