import AppContext from './AppContext'
import { ReactNode, useState } from 'react'
import { Value } from './AppContext'

interface Props {
  children: ReactNode
}
export default function AppProvider({ children }: Props) {
  const [difficulty, setDifficulty] = useState<number>(0)

  const value: Value = {
    difficulty,
    setDifficulty
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}