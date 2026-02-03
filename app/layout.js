import I18nProvider from '../i18n/provider';
import { loadNamespaces } from '../i18n/loader';

export const metadata = {
  title: 'Next Intl App'
};

export default async function RootLayout({ children }) {
  const locale = 'en';

  // SSR: preload global namespaces
  await loadNamespaces(locale, ['common','campaignProfile',"dashboard",'giveCommon']);

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
