import { useState } from 'react';
import Modal from 'react-modal';
import styles from './home.module.scss';
import Head from 'next/head';




export default function Home() {
  const [newProductionRecordOpenModal, setNewProductionRecordOpenModal] = useState(false);

  function handleOpenNewProductionRecordModal() {
    setNewProductionRecordOpenModal(true);
  }

  function handleCloseNewProductionRecordModal() {
    setNewProductionRecordOpenModal(false)
  }
  return (
    <>
      <Head>
        <title>Recicle</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.homeContent}>
          <button type="button" onClick={handleOpenNewProductionRecordModal}>
            <img src="/images/aglutinador.svg" alt="aglutinador" />
            <span>Aglutinador</span>
          </button>
          <button type="button" onClick={handleOpenNewProductionRecordModal}>
            <img src="/images/prensa.svg" alt="prensa" />
            <span>Prensa</span>
          </button>
          <Modal
            isOpen={newProductionRecordOpenModal}
            onRequestClose={handleCloseNewProductionRecordModal}
          >
            <h1>Aqui vai ser o formulário</h1>
          </Modal>
        </section>
      </main>
    </>
  )
}
