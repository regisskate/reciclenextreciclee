import { useContext, useState } from "react";
import styles from './styles.module.scss';
import Modal from "react-modal"
import { RecordsContext } from "../../RecordsContext";
import { FormAglutinador } from "../FormAglutinador";

export function ButtonAglutinador() {
  // const { records } = useContext(RecordsContext);

  // const totalKiloHours = records.reduce((acc, record) => {
  //   if (record.type === 'number') {
  //     return acc + record.amount;
  //   }
  //   return acc;
  // }, 0);

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