import Modal from "react-modal";

interface RecordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RecordModal({ isOpen, onRequestClose }: RecordModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      appElement={document.getElementById('app')}
    >
      <h1>DDS</h1>
      <h2>Proteção das mãos</h2>
      <p>Por ser uma parte do corpo que está em constante exposição, é necessária a proteção adequada, com o uso de luvas. Dessa forma, é possível evitar acidentes, como cortes ou queimaduras, comuns quando não estão protegidas.</p>
    </Modal>
  );
}