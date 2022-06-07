import styles from './styles.module.scss';
import { FaRecycle } from 'react-icons/fa'
export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <nav>
            <a href=""><FaRecycle /></a>
            <a className={styles.active}>Home</a>
          </nav>
          <button>DDS</button>
        </div>
      </header>

    </>
  )
}