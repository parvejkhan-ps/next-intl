"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

let currentLocale = "en";

export let i18n = {};

export function withTranslation(namespaces) {
  return function (WrappedComponent) {
    return function WithTranslation(props) {
      const locale = useLocale();
      const router = useRouter();

      const nsArray = Array.isArray(namespaces) ? namespaces : [namespaces];

      const translators = {};
      nsArray.forEach((ns) => {
        translators[ns] = useTranslations(ns);
      });

      const defaultNamespace = nsArray[0];

      const t = (key, fallbackOrValues, maybeValues) => {
        let defaultValue;
        let values;

        if (typeof fallbackOrValues === "string") {
          defaultValue = fallbackOrValues;
          values = maybeValues;
        } else {
          defaultValue = fallbackOrValues?.defaultValue;
          values = fallbackOrValues;
        }

        let namespace = defaultNamespace;
        let messageKey = key;

        if (key.includes(":")) {
          const parts = key.split(":");
          namespace = parts[0];
          messageKey = parts[1];
        }

        const translator = translators[namespace];

        // ✅ If translation exists → use next-intl interpolation
        if (translator?.has(messageKey)) {
          return translator(messageKey, values);
        }

        // ✅ If missing but fallback exists → manually interpolate
        if (defaultValue) {
          if (!values) return defaultValue;

          return defaultValue.replace(
            /\{(.*?)\}/g,
            (_, match) => values?.[match.trim()] ?? "",
          );
        }

        return "";
      };

      i18n = {
        get language() {
          return currentLocale;
        },

        set language(newLocale) {
          currentLocale = newLocale;
        },
        changeLanguage(newLocale) {
          document.cookie = `locale=${newLocale}; path=/`;
          currentLocale = newLocale;
          router.refresh()
        },
      };
      return <WrappedComponent {...props} t={t} i18n={i18n} />;
    };
  };
}

export default { withTranslation, i18n };
