import {Text, View, StyleSheet, Image} from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import {Title} from '../components/ui/Title';
import {Color} from '../utils/colors'

export const GameOver = ({rounds, enteredNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title customStyles={[styles.title]}>Game Over Screen</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your needed <Text style={styles.highlightText}>{rounds}</Text> rounds to
        get the number of{' '}
        <Text style={styles.highlightText}>{enteredNumber}</Text>.
      </Text>
      <PrimaryButton onPressButton={onStartNewGame}>
        Start new Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
    marginBottom: 24
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Color.primary800,
    margin: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlightText: {
    color: Color.primary500,
    fontFamily: 'open-sans-bold'
  } 
});
