export async function loadNamespaces(
  namespaces=[],
  locale = 'en'
) {
  const messages = {};

  for (const ns of namespaces) {
    messages[ns] = (
      await import(`../../static/locales/${locale}/${ns}.json`)
    ).default;
  }

  return messages;
}