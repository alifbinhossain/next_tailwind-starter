import Head from 'next/head';
import '../styles/index.css';
import Layout from 'src/components/layout/Layout';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { store } from '@services/redux/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
