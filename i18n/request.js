import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale = 'en';
 
  return {
    locale,
    // messages: (await import(`../static/locales/${locale}/dashboard.json`)).default
     messages: {
      common: (await import(`../static/locales/${locale}/common.json`)).default,
      dashboard: (await import(`../static/locales/${locale}/dashboard.json`)).default,
      giveCommon: (await import(`../static/locales/${locale}/giveCommon.json`)).default,
      authHeader: (await import(`../static/locales/${locale}/authHeader.json`)).default,
      campaignProfile: (await import(`../static/locales/${locale}/campaignProfile.json`)).default,
      accountTopUp: (await import(`../static/locales/${locale}/accountTopUp.json`)).default,
      agreement: (await import(`../static/locales/${locale}/agreement.json`)).default,
      notification: (await import(`../static/locales/${locale}/notification.json`)).default,
      settings: (await import(`../static/locales/${locale}/settings.json`)).default,
      charity: (await import(`../static/locales/${locale}/charity.json`)).default,
      charityProfile: (await import(`../static/locales/${locale}/charityProfile.json`)).default,
      claimCharity: (await import(`../static/locales/${locale}/claimCharity.json`)).default,
      claimCharitySuccess: (await import(`../static/locales/${locale}/claimCharitySuccess.json`)).default,
    //   claimP2P: (await import(`../static/locales/${locale}/claimP2P.json`)).default,
      donation: (await import(`../static/locales/${locale}/donation.json`)).default,
      dropDownAccountOptions: (await import(`../static/locales/${locale}/dropDownAccountOptions.json`)).default,
      error: (await import(`../static/locales/${locale}/error.json`)).default,
      friends: (await import(`../static/locales/${locale}/friends.json`)).default,
      givingGroup: (await import(`../static/locales/${locale}/givingGroup.json`)).default,
      givingProgram: (await import(`../static/locales/${locale}/givingProgram.json`)).default,
      group: (await import(`../static/locales/${locale}/group.json`)).default,
      groupProfile: (await import(`../static/locales/${locale}/groupProfile.json`)).default,
    }
  };
});