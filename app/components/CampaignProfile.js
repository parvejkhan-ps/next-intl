'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function CampaignProfile({ count , data}) {
  const t = useTranslations('campaignProfile');
  return (
    <div>
      <p>{t('giveFrom')}</p>
    </div>
  );
}
