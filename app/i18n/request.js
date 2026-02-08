import { getRequestConfig } from 'next-intl/server';
import { routeNamespaces } from './namespaces';
import { headers } from 'next/headers';

function getPathname() {
  return headers().get('x-pathname') || '/';
}

async function loadMessages(locale, namespaces) {
  const messages = {};

  for (const ns of namespaces) {
    messages[ns] = (
      await import(`../../static/locales/${locale}/${ns}.json`)
    ).default;
  }

  return messages;
}

export default getRequestConfig(async () => {
  const locale = 'en'; // Fixed locale
  const pathname = getPathname();

  const namespaces = routeNamespaces[pathname] || ['common'];

  const messages = await loadMessages(locale, namespaces);

  return {
    locale,
    messages
  };
});
