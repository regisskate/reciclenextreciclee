import { useState } from "react";
import styles from './styles.module.scss';
import Modal from "react-modal"
import { FormPrensa } from "../FormPrensa";

export function ButtonPrensa() {

  const [newProductionRecordOpenModal, setNewProductionRecordOpenModal] = useState(false);
  function handleOpenNewProductionRecordModal() {
    setNewProductionRecordOpenModal(true);
  }

  function handleCloseNewProductionRecordModal() {
    setNewProductionRecordOpenModal(false)
  }
  return (
    <main className={styles.prensaContainer}>
      <section className={styles.prensaContent}>
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
          <FormPrensa />

        </Modal>
      </section>
    </main>
  )
}