import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  return {
    locale: 'en',
    // messages: (await import(`../../messages/${locale}.json`)).default,
    messages: {
      common:(await import(`../../static/locales/en/common.json`)).default,
      // campaignProfile:(await import(`../../static/locales/en/campaignProfile.json`)).default
  }};
});
