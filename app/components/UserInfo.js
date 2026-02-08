'use client';

import { useTranslations } from 'next-intl';

export default function UserInfo({ count }) {
  const t = useTranslations('dashboard');

  return (
    <div>
      <p>{t('stats', { count })}</p>
    </div>
  );
}
