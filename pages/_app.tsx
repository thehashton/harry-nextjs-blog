import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.styled'
import GlobalStyles from '../styles/Global.styled'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
        <Layout pageTitle="Home" description="Harry's Personal Blog">
          <Component {...pageProps} />
          <Footer />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp
