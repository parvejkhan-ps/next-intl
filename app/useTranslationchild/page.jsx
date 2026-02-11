import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react'
import Child from './Child';

export default function page() {
    const t = useTranslations("common");
  return (<>
    <div>{t('title', {name: 'Parvej khan', surname: ''})}</div>
    <Child/>
  </>)
}
