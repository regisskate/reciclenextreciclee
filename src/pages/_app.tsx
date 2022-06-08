import { useState } from 'react';
import Modal from 'react-modal';
import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [ddsOpenModal, setDdsOpenModal] = useState(false);

  function handleOpenDdsModal() {
    setDdsOpenModal(true);
  }

  function handleCloseDdsModal() {
    setDdsOpenModal(false)
  }
  return (
    <>
      <Header onOpenDdsModal={handleOpenDdsModal} />
      <Component {...pageProps} />
      <Modal
        isOpen={ddsOpenModal}
        onRequestClose={handleCloseDdsModal}
      >
        <h1>DDS</h1>
        <h2>Proteção das mãos</h2>
        <p>Por ser uma parte do corpo que está em constante exposição, é necessária a proteção adequada, com o uso de luvas. Dessa forma, é possível evitar acidentes, como cortes ou queimaduras, comuns quando não estão protegidas.</p>
      </Modal>
    </>
  )
}

export default MyApp
