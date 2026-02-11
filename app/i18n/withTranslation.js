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
        let opts = values || {};

        // Support: t('key', 'fallback')
        if (typeof values === 'string') {
          opts = { defaultValue: values };
        }
        const {
          defaultValue
        } = opts;
        // console.log("values=============>",values)
        const [namespace, messageKey] = key.split(':');
        // console.log("values",opts,defaultValue,namespace,messageKey)
        // console.log("==>tramsmmss",translators[namespace].has(messageKey))
        if (!translators[namespace].has(messageKey)) {
          console.log("name",namespace)
          
          return defaultValue || "";
        }
        return translators[namespace](messageKey, values);
      };

      return <WrappedComponent {...props} t={t} />;
    };
  };
}
