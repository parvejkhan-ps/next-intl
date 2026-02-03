'use client';

import React from 'react';
import {
  useTranslations,
  useLocale,
  useMessages
} from 'next-intl';

export function withTranslation(namespaces = []) {
  const nsArray = Array.isArray(namespaces)
    ? namespaces
    : [namespaces];

  return function (WrappedComponent) {

    // 🔥 Attach metadata for SSR
    WrappedComponent.i18nNamespaces = nsArray;

    return function Wrapper(props) {
      const locale = useLocale();
      const messages = useMessages();

      const translators = {};

      nsArray.forEach((ns) => {
        try {
          translators[ns] = useTranslations(ns);
        } catch {
          translators[ns] = null;
        }
      });

      const t = (key, values = {}) => {
        let namespace = 'common';
        let subKey = key;

        if (key.includes(':')) {
          const parts = key.split(':');
          namespace = parts[0];
          subKey = parts.slice(1).join(':');
        }

        const translator = translators[namespace];

        if (!translator) return key;

        try {
          return translator(subKey, values);
        } catch {
          return key;
        }
      };

      const i18n = {
        language: locale,
        locale,
        messages
      };

      return (
        <WrappedComponent
          {...props}
          t={t}
          i18n={i18n}
        />
      );
    };
  };
}
