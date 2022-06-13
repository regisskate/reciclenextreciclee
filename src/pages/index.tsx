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
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <button type="button" onClick={handleCloseNewProductionRecordModal} className="react-modal-close">
              <img src="/images/close.svg" alt="fechar modal" />
            </button>
            <h1>Aqui vai ser o formulário</h1>
            <p>
              hora <br></br>
              <input type="date" name="Data" /><br></br>
              Cor
              <input type="color" value="#2d04fd" /><br></br>

              Inicio
              <input type="time" name="Inicio" /><br></br>
              fim
              <input type="time" name="Fim" />
            </p>
          </Modal>
        </section>
      </main>
    </>
  )
}
