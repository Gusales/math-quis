import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    
    display: 'flex',
    flexDirection: 'column',
    gap: 16,

    paddingVertical: 16,
    paddingHorizontal: 16
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
  image: {
    width: '100%',
    height: 250
  },
  listContent: {
    color: colors.text,
    fontSize: 16,
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 0,
	    height: 2,
    },
    textShadowRadius: 3.84,
    lineHeight: 24
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.auxiliar,
    alignItems: 'center',
    borderRadius: 12
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16
  }
})

export default styles