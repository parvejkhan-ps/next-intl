import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server';
import React from 'react'
import { loadNamespaces } from './loadNamespaces';

export default async function NextIntlProvider(props) {
  const baseMessages = await getMessages(); // from request.ts
    const messages = {
      ...baseMessages,
      ...(await loadNamespaces(props.namespaces || [])),
    };
  return (
    <NextIntlClientProvider {...props} messages={messages}>
        {props.children}
    </NextIntlClientProvider>
  )
}