import { useTranslations } from 'next-intl';
import React from 'react';

export default function withTranslation(namespaces) {
  return function (WrappedComponent) {
    return function WithTranslation(props) {
      const nsArray = Array.isArray(namespaces)
        ? namespaces
        : [namespaces];

      // Create translation functions per namespace
      const translators = {};
      nsArray.forEach((ns) => {
        translators[ns] = useTranslations(ns);
      });

      // Single t() function
      const t = (key, values) => {
        const [namespace, messageKey] = key.split(':');

        if (!translators[namespace]) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`Missing namespace: ${namespace}`);
          }
          return key;
        }

        return translators[namespace](messageKey, values);
      };

      return <WrappedComponent {...props} t={t} />;
    };
  };
}
