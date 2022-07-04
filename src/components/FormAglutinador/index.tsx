import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { RecordsContext } from '../../RecordsContext';
import styles from './styles.module.scss';



export function FormAglutinador() {
  const { createRecord } = useContext(RecordsContext);


  // const [date, setDate] = useState('');
  const [category, setCategory] = useState('cores');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [amount, setAmount] = useState(0);



  async function handleCreateNewRecord(event: FormEvent) {
    event.preventDefault();
    await createRecord({
      // date,
      category,
      startTime,
      endTime,
      amount,
    })
    setCategory('cores');
    setStartTime('');
    setEndTime('')
    setAmount(0)


  };

  return (

    <main className={styles.formContainer}>
      <form onSubmit={handleCreateNewRecord} className={styles.formContent}>

        <h1>AGLUTINADOR</h1><br />


        <span>Data: </span>
        {/* <input
          type="date"
          className="form-control"
          value={date}
          onChange={event => setDate(event.target.value)}
        /><br></br> */}
        tipo de material<br></br>
        <section className={styles.typeMaterial}>
          <button
            type="button"
            className={category === 'cores' ? 'active' : ''}
            onClick={() => { setCategory('cores'); }}

          >
            <span>Cores</span>
          </button>
          <button
            type="button"
            className={category === 'strech' ? 'active' : ''}
            onClick={() => { setCategory('strech'); }}
          >
            <span>Strech</span>
          </button>

          <button
            type="button"
            className={category === 'azul' ? 'active' : ''}
            onClick={() => { setCategory('azul'); }}
          >
            <span>Azul</span>
          </button>
          <button
            type="button"
            className={category === 'pvdc' ? 'active' : ''}
            onClick={() => { setCategory('pvdc'); }}
          >

            <span>Pvdc</span>
          </button> <br></br>
        </section>
        <span></span>
        Inicio
        <input
          type="time"
          value={startTime}
          onChange={event => setStartTime(event.target.value)}
        /><br></br>
        fim
        <input
          type="time"
          value={endTime}
          onChange={event => setEndTime(event.target.value)}
        />
        <input
          type="number"
          placeholder="Peso"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <button type="submit">Enviar</button>

      </form>
    </main>
  )
}