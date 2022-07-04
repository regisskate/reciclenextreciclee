import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Record {
  id: number;
  // title: string;
  // date: string;
  amount: number;
  // type: string;
  category: string;
  startTime: string;
  endTime: string;
  createdAt: string;
}

type RecordInput = Omit<Record, 'id' | 'createdAt'>;

interface RecordsProviderProps {
  children: ReactNode;
}

interface RecordsContextData {
  records: Record[];
  createRecord: (record: RecordInput) => Promise<void>;
}

export const RecordsContext = createContext<RecordsContextData>(
  {} as RecordsContextData
);

export function RecordsProvider({ children }: RecordsProviderProps) {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    api.get('records')
      .then(response => setRecords(response.data.records))
  }, []);

  async function createRecord(recordInput: RecordInput) {

    const response = await api.post('/records', {
      ...recordInput,
      createdAt: new Date(),
    })

    const { record } = response.data;

    setRecords([
      ...records,
      record,
    ]);
  }
  return (
    <RecordsContext.Provider value={{ records, createRecord }}>
      {children}
    </RecordsContext.Provider>
  )
}

