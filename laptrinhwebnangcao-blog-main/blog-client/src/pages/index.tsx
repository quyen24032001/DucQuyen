import PageLayout from "components/PageLayout";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>LTWNC - Blog</title>
        <meta name="description" content="Blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        home
      </PageLayout>
    </>
  );
};

export default HomePage;
