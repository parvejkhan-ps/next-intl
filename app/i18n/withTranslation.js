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
          defaultValue,
          context,
          ns,
          lng,
          returnObjects,
          ...vars
        } = opts;
        const [namespace, messageKey] = key.split(':');
        console.log("values",opts,defaultValue,namespace,messageKey)
        // console.log("==>tramsmmss",translators[namespace].has(messageKey))
        if (!translators[namespace].has(messageKey)) {
          console.log("name",namespace)
          return defaultValue || key;
        }
         // Context support
        // key_male / key_female
        // ----------------------------

        if (context) {
          console.log("context ===>",context)
          const contextKey = `${realKey}_${context}`;

          try {
            return translators[namespace](contextKey, values);
          } catch (e) {
          }
        }
try {
          return translators[namespace](messageKey, values);
        } catch (err) {
          console.log("error",err)
          // No crash → fallback
          if (defaultValue) return defaultValue;

          return values || key;
        }
        return translators[namespace](messageKey, values);
      };

      return <WrappedComponent {...props} t={t} />;
    };
  };
}
