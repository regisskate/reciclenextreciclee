import { useState } from "react";
import styles from './styles.module.scss';
import Modal from "react-modal"

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
          <h1>Aqui vai ser o formulário</h1>
          <p>
            Data <br></br>
            <input type="date" name="Data" className="form-control" /><br></br>
            tipo de material<br></br>
            <button type="button" className="cores">Cores</button>
            <button type="button" className="strech">Strech</button>
            <button type="button" className="azul">Azul</button>
            <button type="button" className="pvdc">Pvdc</button> <br></br>

            Inicio
            <input
              type="time"
              name="Inicio"
            /><br></br>
            fim
            <input type="time" name="Fim" />
          </p>
          <button type="submit">Enviar</button>
        </Modal>
      </section>
    </main>
  )
}