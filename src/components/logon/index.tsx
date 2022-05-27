
import React, { useState } from 'react';
// import Modal from 'react-modal'
import { FiLogIn } from 'react-icons/fi';
import styles from './styles.module.scss';

export function Logon() {
  const [newRegisterOpen, setNewRegisterOpen] = useState(false);

  function handleOpenNewRegisterOpen() {
    setNewRegisterOpen(true);
  }

  function handleCloseNewRegisterOpen() {
    setNewRegisterOpen(false);
  }

  return (
    <div className={styles.logonContainer}>
      <img src='/images/logo.png' alt="Recicle sua produção" />
      <section className="form">
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Usuário" />
          <input type="password" placeholder="Sua senha" />
          <button type="button" onClick={handleOpenNewRegisterOpen}>
            Entrar
          </button>
          <a href="../Home" >
            <FiLogIn size={16} color=" #E02041 " />
            Não tenho cadastro
          </a>

          {/* <Modal
                        isOpen={newRegisterOpen}
                        onRequestClose={handleCloseNewRegisterOpen}
                    >
                        <h2>Cadastro</h2>
                    </Modal> */}
        </form>
      </section>

    </div>
  )
}