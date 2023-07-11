import { useContext } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import AppContext from '../../context/AppContext'
import SetDifficuly from '../../components/SetDifficulty'

export default function Game() {
  const { difficulty } = useContext(AppContext)
  return (
    <View style={styles.container}>
      { difficulty === 0 ? <SetDifficuly /> : <Text> Dificuldade setada </Text> }
    </View>
  )
}