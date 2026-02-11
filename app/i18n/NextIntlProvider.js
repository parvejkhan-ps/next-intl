import { NextIntlClientProvider } from 'next-intl'
import React from 'react'

export default function NextIntlProvider(props) {
  return (
    <NextIntlClientProvider {...props}>
        {props.children}
    </NextIntlClientProvider>
  )
}
