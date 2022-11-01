import PageLayout from "components/PageLayout";
import type { NextPage } from "next";
import Head from "next/head";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>LTWNC - Blog</title>
        <meta name="description" content="Blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>login</PageLayout>
    </>
  );
};

export default LoginPage;
