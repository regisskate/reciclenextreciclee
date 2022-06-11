import { useState } from 'react';
import Modal from 'react-modal';
import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss';
import { DdsModal } from '../components/DdsModal';

Modal.setAppElement('body')

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
      <DdsModal
        isOpen={ddsOpenModal}
        onRequestClose={handleCloseDdsModal}
      />
    </>
  )
}

export default MyApp
