import { NextIntlClientProvider } from 'next-intl';
import { getAllNamespaces } from './registry';

export default function I18nProvider({
  locale,
  children,
  messages = {}
}) {
  const globalMessages = getAllNamespaces(locale);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{
        ...globalMessages,
        ...messages
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
