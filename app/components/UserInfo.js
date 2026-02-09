'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function UserInfo({ count , data}) {
  const t = useTranslations('dashboard');
  const [countState, setCountState] = useState(count);
  useEffect(() => {

    setTimeout(() => {  
      setCountState(2000)
      console.log('t in setTimeout', t('stats', { count }));
    }, 10000);
    console.log('t in useEffect', t('stats', { count }));
  }, [ count]);
  return (
    <div>
      <p>{t('stats', { count:countState })}</p>
      <p>{t('stats', { count:data?.name  })}</p>
    </div>
  );
}
