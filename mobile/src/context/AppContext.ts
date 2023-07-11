import { createContext, Dispatch, SetStateAction } from 'react'

export interface Value {
  difficulty: number
  setDifficulty: Dispatch<SetStateAction<number>>
}

const INITIAL_STATE: Value = {
  difficulty: 0,
  setDifficulty: () => 0
}

const AppContext = createContext(INITIAL_STATE)

export default AppContext