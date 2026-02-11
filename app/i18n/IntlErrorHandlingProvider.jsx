'use client';
 
import {NextIntlClientProvider} from 'next-intl';
 
export default function IntlErrorHandlingProvider({children}) {
  return (
    <NextIntlClientProvider
    locale="en"
    //   onError={(error) => console.error("Error in Intl handling:", error)}
    //   getMessageFallback={({namespace, key,}) => `Missing translation for ${namespace}.${key}`}
    >
      {children}
    </NextIntlClientProvider>
  );
}