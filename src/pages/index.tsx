import styles from './home.module.scss';
import * as Popover from '@radix-ui/react-popover';
import Head from 'next/head';




export default function Home() {
  return (
    <>
      <Head>
        <title>Recicle</title>
      </Head>
      <main>
        <div>Recicle</div>
        <section className={styles.homeContainer}>
          <button>
            <img src="/images/aglutinador.svg" alt="aglutinador" />
            <span>Aglutinador</span>
          </button>
          <button>
            <img src="/images/prensa.svg" alt="prensa" />
            <span>Prensa</span>
          </button>
        </section>
      </main>
    </>
  )
}
