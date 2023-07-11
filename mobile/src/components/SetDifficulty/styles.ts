import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 0,
	    height: 2,
    },
    textShadowRadius: 3.84
  },
  paragraph: {
    marginTop: 12,
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 0,
	    height: 2,
    },
    textShadowRadius: 3.84
  },
})

export default styles