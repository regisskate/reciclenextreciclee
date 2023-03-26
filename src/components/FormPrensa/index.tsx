import styles from './styles.module.scss';

export function FormPrensa() {


  return (
    <main className={styles.formContainer}>
      <form className={styles.formContent}>

        <h1>PRENSA</h1><br />
        <span>tipo de material</span>

        <section className={styles.typeMaterial}>
          <button type="button" className="colorType"><span>Papelão</span></button>
          <button type="button" className="colorType"><span>Fita</span></button>
          <button type="button" className="colorType"><span>Bombona</span></button>
          <button type="button" className="colorType"><span>Pet</span></button>
          <button type="button" className="colorType"><span>Botas</span></button>
          <button type="button" className="colorType"><span>Ráfia</span></button>
          <button type="button" className="colorType"><span>Bandejas</span></button>
          <button type="button" className="colorType"><span>Line</span></button> <br></br>
        </section>
        <span></span>
        Inicio
        <input
          type="time"
          name="Inicio"
        /><br></br>
        fim
        <input type="time" name="Fim" />
        <input type="number" placeholder="Peso" />
        <button type="submit">Enviar</button>
      </form>
    </main>
  )
}