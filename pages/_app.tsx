import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.styled'
import GlobalStyles from '../styles/Global.styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout pageTitle="Blog" description="Harry's Personal Blog">
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default MyApp
