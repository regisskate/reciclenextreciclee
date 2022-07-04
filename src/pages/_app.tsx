import { useState } from 'react';
import Modal from 'react-modal';
import { createServer, Model } from 'miragejs'
import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import { DdsModal } from '../components/DdsModal';
import { RecordsProvider } from '../RecordsContext';

import '../styles/global.scss';

Modal.setAppElement('body')

createServer({
  models: {
    record: Model,
  },

  seeds(server) {
    server.db.loadData({
      records: [
        {
          id: '1',
          category: 'cores',
          // type: 'cores',
          startTime: new Date('2022-02-02'),
          endTime: new Date('2022-02-02'),
          amount: 640,
          createdAt: new Date('2022-02-02 10:00:55')
        },
        {
          id: '2',
          category: 'strech',
          startTime: new Date('2022-02-02'),
          endTime: new Date('2022-02-02'),
          amount: 7000,
          createdAt: new Date('2022-02-02 09:00:55')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/records', () => {
      return this.schema.all('record')
    })

    this.post('/records', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('record', data)
    })
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const [ddsOpenModal, setDdsOpenModal] = useState(false);

  function handleOpenDdsModal() {
    setDdsOpenModal(true);
  }

  function handleCloseDdsModal() {
    setDdsOpenModal(false);
  }
  return (
    <RecordsProvider>
      <Header onOpenDdsModal={handleOpenDdsModal} />
      <Component {...pageProps} />
      <DdsModal
        isOpen={ddsOpenModal}
        onRequestClose={handleCloseDdsModal}
      />
    </RecordsProvider>
  )
}

export default MyApp
