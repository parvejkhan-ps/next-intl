'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export default function withTranslation(namespaces) {
  return function (WrappedComponent) {
    return function WithTranslation(props) {
      const nsArray = Array.isArray(namespaces)
        ? namespaces
        : [namespaces];

      const t = {};

      nsArray.forEach((ns) => {
        t[ns] = useTranslations(ns);
      });

      return <WrappedComponent {...props} t={t} />;
    };
  };
}
