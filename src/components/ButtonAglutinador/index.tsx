import { useState } from "react";
import styles from './styles.module.scss';
import Modal from "react-modal"
import { FormAglutinador } from "../FormAglutinador";

export function ButtonAglutinador() {

  const [newProductionRecordOpenModal, setNewProductionRecordOpenModal] = useState(false);
  function handleOpenNewProductionRecordModal() {
    setNewProductionRecordOpenModal(true);
  }

  function handleCloseNewProductionRecordModal() {
    setNewProductionRecordOpenModal(false)
  }
  return (
    <main className={styles.aglutinadorContainer}>
      <section className={styles.aglutinadorContent}>
        <button type="button" onClick={handleOpenNewProductionRecordModal}>
          <img src="/images/aglutinador.svg" alt="aglutinador" />
          <span>Aglutinador</span>
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
          <FormAglutinador />

        </Modal>
      </section>
    </main>
  )
}