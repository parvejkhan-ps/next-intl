import { useTranslations } from 'next-intl';
import React from 'react'

export default function Child() {
    const t = useTranslations();
      return (<>
        <div>{t('dashborad.userName', {userName: 'Parvej khan'})}</div>
        
      </>)
}
