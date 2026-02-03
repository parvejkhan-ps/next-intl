import { loadNamespaces } from './loader';

/**
 * Wrap server components
 */
export async function withNamespaces(
  Component,
  namespaces = []
) {
  return async function Wrapper(props) {
    const locale = 'en';

    const messages = await loadNamespaces(locale, namespaces);

    return <Component {...props} messages={messages} />;
  };
}
