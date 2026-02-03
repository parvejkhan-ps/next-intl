const registry = new Map();

/**
 * Key format: `${locale}:${namespace}`
 */
export function hasNamespace(locale, ns) {
  return registry.has(`${locale}:${ns}`);
}

export function getNamespace(locale, ns) {
  return registry.get(`${locale}:${ns}`);
}

export function registerNamespace(locale, ns, messages) {
  registry.set(`${locale}:${ns}`, messages);
}

export function getAllNamespaces(locale) {
  const result = {};

  for (const [key, value] of registry.entries()) {
    if (key.startsWith(locale + ':')) {
      const ns = key.split(':')[1];
      result[ns] = value;
    }
  }

  return result;
}
