
import { Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { RecordsContext } from "../../RecordsContext";

import styles from './styles.module.scss';


export function RecordsTable() {
  const { records } = useContext(RecordsContext);

  return (
    <div className={styles.container}>
      <table className={styles.content}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Material</th>
            <th>Inicil</th>
            <th>Fim</th>
            <th>Peso</th>
          </tr>
        </thead>

        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(record.createdAt)
                )}
              </td>
              <td>{record.category}</td>
              <td>{record.startTime}</td>
              <td>{record.endTime}</td>
              <td>{record.amount}</td>
              <button><Trash size={20} /></button>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}