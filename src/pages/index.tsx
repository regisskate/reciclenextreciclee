import Head from 'next/head';
import { Logon } from '../components/logon';

export default function Home() {
  return (
    <>
      <Logon />
      <Head>
        <title>Recicle</title>
      </Head>
      <h1>
        🖤 Ana 🖤
      </h1>
    </>
  )
}
