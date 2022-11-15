import React from 'react';

import Head from 'next/head';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import Layout from '@components/layout/Layout';

import { store } from '@services/redux/store/store';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
