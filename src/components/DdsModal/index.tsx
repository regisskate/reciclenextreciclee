import Modal from "react-modal";

interface DdsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DdsModal({ isOpen, onRequestClose }: DdsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src="/images/close.svg" alt="fechar modal" />
      </button>
      <h1>DDS</h1>
      <h2>Proteção das mãos</h2>
      <p>Por ser uma parte do corpo que está em constante exposição, é necessária a proteção adequada, com o uso de luvas. Dessa forma, é possível evitar acidentes, como cortes ou queimaduras, comuns quando não estão protegidas.</p>
    </Modal>
  );
}