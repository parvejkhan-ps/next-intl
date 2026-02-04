'use client';

import {useTranslations,  useLocale} from 'next-intl';

/**
 * i18next-compatible HOC for next-intl
 */
export function withTranslation(defaultNamespaces = ['common']) {

  return function (WrappedComponent) {

    function WithIntl(props) {

      const locale = useLocale();

      // Load translators safely
      const translators = {};

      defaultNamespaces.forEach((ns) => {
        try {
          translators[ns] = useTranslations(ns);
        } catch {
          translators[ns] = null;
        }
      });

      /**
       * Main t() function (i18next style)
       */
      function t(key, options) {

        let opts = options || {};

        // Support: t('key', 'fallback')
        if (typeof options === 'string') {
          opts = { defaultValue: options };
        }

        const {
          defaultValue,
          count,
          context,
          ns,
          lng,
          returnObjects,
          ...vars
        } = opts;

        // ----------------------------
        // Resolve namespace
        // ----------------------------

        let namespace = defaultNamespaces[0] || 'common';
        let realKey = key;

        // dashboard:title
        if (key.includes(':')) {
          const parts = key.split(':');
          namespace = parts[0];
          realKey = parts[1];
        }

        // Override by ns option
        if (ns) {
          namespace = Array.isArray(ns) ? ns[0] : ns;
        }

        const translator = translators[namespace];
        // console.log("translator", translator.has(namespace));
        if (translator?.has(namespace)) {
          return defaultValue || key;
        }

        // ----------------------------
        // Context support
        // key_male / key_female
        // ----------------------------

        if (context) {
          const contextKey = `${realKey}_${context}`;

          try {
            return translator(contextKey, vars);
          } catch {
            // fallback
          }
        }

        // ----------------------------
        // Plural support (count)
        // key_one / key_other
        // ----------------------------

        if (typeof count === 'number') {
          try {
            return translator(realKey, {
              ...vars,
              count
            });
          } catch {
            // fallback
          }
        }

        // ----------------------------
        // Normal translation
        // ----------------------------

        try {
          return translator(realKey, vars);
        } catch (err) {

          // No crash → fallback
          if (defaultValue) return defaultValue;

          return key;
        }
      }

      // Fake i18n object (partial)
      const i18n = {
        language: locale,

        changeLanguage: (lng) => {
          console.warn(
            'next-intl: changeLanguage must be implemented via routing/cookies'
          );
        }
      };

      return (
        <WrappedComponent
          {...props}
          t={t}
          i18n={i18n}
        />
      );
    }

    return WithIntl;
  };
}
