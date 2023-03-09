import { store } from '@/services/redux/store/store';
import '@/styles/index.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Layout from '@/views/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next JS Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider defaultTheme="light" attribute="class">
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
