import { cookies } from "next/headers";

const namespaceCache = {};

export async function loadNamespaces(namespaces = []) {
  const locale = cookies().get("locale")?.value || "en";

  if (!namespaceCache[locale]) {
    namespaceCache[locale] = {};
  }

  const messages = {};

  for (const ns of namespaces) {
    if (!namespaceCache[locale][ns]) {
      console.log(`Loading ${locale}/${ns}`);

      namespaceCache[locale][ns] =
        (await import(`../../static/locales/${locale}/${ns}.json`)).default;
    } else {
      console.log(`Using cached ${locale}/${ns}`);
    }

    messages[ns] = namespaceCache[locale][ns];
  }

  return messages;
}
