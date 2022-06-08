import styles from './styles.module.scss';
import { FaRecycle } from 'react-icons/fa'

interface HeaderProps {
  onOpenDdsModal: () => void;
}

export function Header({ onOpenDdsModal }: HeaderProps) {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <nav>
            <a href=""><FaRecycle /></a>
            <a className={styles.active}>Home</a>
          </nav>
          <button type="button" onClick={onOpenDdsModal}>
            DDS
          </button>
        </div>
      </header>

    </>
  )
}