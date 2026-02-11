import { IntlErrorCode } from 'next-intl';
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  return {
    locale: 'en',
    //   if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    //     // Missing translations are expected and should only log an error
    //     console.error("Missing translation error:", error);
    //   } else {
    //     // Other errors indicate a bug in the app and should be reported
    //     reportToErrorTracking(error);
    //   }
    // },
 
    // getMessageFallback({namespace, key, error}) {
    //   const path = [namespace, key].filter((part) => part != null).join('.');
 
    //   if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    //     return path + ' is not yet translated';
    //   } else {
    //     return 'Dear developer, please fix this message: ' + path;
    //   }
    // },
    messages: {
      common:(await import(`../../static/locales/en/common.json`)).default,
      dashboard:(await import(`../../static/locales/en/dashboard.json`)).default,
  }
};
});
