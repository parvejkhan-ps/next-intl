import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react'

export default async function page() {
    const t = await getTranslations();
    const t2 = await getTranslations("common");
  return (<>
    <div>{t('common.title', {name: 'Parvej khan', surname: ''})}</div>
    <div>{t2('title', {name: 'Parvej khan', surname: ''})}</div>
    </>
  )
}
