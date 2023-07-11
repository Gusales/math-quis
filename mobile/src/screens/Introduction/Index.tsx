import { Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from "./style";
import { RootStackParams } from "../../@types";


export default function Introduction() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  function openScreen() {
    navigation.navigate('Game')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Introdução </Text>
      <Text style={styles.paragraph}>Seja muito bem vindo(a) ao Math Quiz! Um game sobre matemática de forma dinâmica.</Text>
      <Image source={require('../../assets/images/thumb.jpeg')} style={styles.image} />
      <Text style={styles.title}> Regras </Text>
      <View>
        <Text style={styles.listContent}>
          1- As perguntas são relacionadas a qualquer conteúdo de matemática ja visto durante os ensinos fundamental e médio.
        </Text>

        <Text style={styles.listContent}>
        2- Você terá até 10 chances de responder 6 questões corretamente, caso obtenha a resposta certa, a dificuldade aumentará
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={openScreen}>
        <Text style={styles.buttonText}>Começar o jogo</Text>
      </TouchableOpacity>
    </View>
  )
}