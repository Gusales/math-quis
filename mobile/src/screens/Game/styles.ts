import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  header: {
    width: '100%',
    height: 25,
    backgroundColor: colors.secondary
  }
})

export default styles