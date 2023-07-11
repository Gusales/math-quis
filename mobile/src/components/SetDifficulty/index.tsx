import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

import AppContext from '../../context/AppContext'


export default function SetDifficuly() {
  const { setDifficulty } = useContext(AppContext)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafios</Text>
      <Text style={styles.paragraph}>Escolha a dificuldade inicial</Text>

      <View>
        <TouchableOpacity onPress={() => setDifficulty(1)}>
          <Text>Fácil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDifficulty(2)}>
          <Text>Médio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDifficulty(3)}>
          <Text>Dificil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}