import styles from './home.module.scss';
import Head from 'next/head';
import { ButtonAglutinador } from '../components/ButtonAglutinador';
import { ButtonPrensa } from '../components/ButtonPrensa';




export default function Home() {

  return (
    <>
      <Head>
        <title>Recicle</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.homeContent}>
          <ButtonAglutinador />
          <ButtonPrensa />

        </section>
      </main>
    </>
  )
}
