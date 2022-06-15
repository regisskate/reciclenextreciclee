import styles from './styles.module.scss';

export function FormAglutinador() {


  return (
    <main className={styles.formContainer}>
      <form className={styles.formContent}>

        <h1>AGLUTINADOR</h1><br />


        Data <br></br>
        <input type="date" name="Data" className="form-control" /><br></br>
        tipo de material<br></br>
        <section className={styles.typeMaterial}>
          <button type="button" className="colorType"><span>Cores</span></button>
          <button type="button" className="colorType"><span>Strech</span></button>
          <button type="button" className="colorType"><span>Azul</span></button>
          <button type="button" className="colorType"><span>Pvdc</span></button> <br></br>
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