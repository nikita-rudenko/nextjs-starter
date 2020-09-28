import Head from 'next/head';

import { HEAD_TITLE } from '@constants/seo';
import HomeView from '@views/Home';

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>{HEAD_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </>
  );
}

export default HomePage;
