export async function getMessages(namespaces = []) {
  const messages = {};

  for (const ns of namespaces) {
    messages[ns] = (await import(`../../static/locales/en/${ns}.json`)).default;
  }

  return messages;
}
