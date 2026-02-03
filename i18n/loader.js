import {
  hasNamespace,
  registerNamespace,
  getNamespace
} from './registry';

/**
 * Load single namespace
 */
export async function loadNamespace(locale, ns) {
  if (hasNamespace(locale, ns)) {
    return getNamespace(locale, ns);
  }

  try {
    const data = await import(
      `../static/locales/${locale}/${ns}.json`
    );

    const messages = data.default || data;

    registerNamespace(locale, ns, messages);

    return messages;
  } catch (err) {
    console.warn(
      `Missing namespace: ${locale}/${ns}`
    );

    registerNamespace(locale, ns, {});
    return {};
  }
}

/**
 * Load multiple namespaces (IMPORTANT)
 */
export async function loadNamespaces(locale, namespaces = []) {
  const result = {};

  for (const ns of namespaces) {
    result[ns] = await loadNamespace(locale, ns);
  }

  return result;
}
