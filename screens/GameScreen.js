import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../utils/random';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { GameDirection } from '../utils/gameText';
import {Color} from '../utils/colors'
import {Card} from '../components/ui/Card'

export const GameScreen = ({ enteredNumber, onGameOver }) => {
  let boundary = {
    higher: 100,
    lower: 1,
  };

  const currentGuessValue = generateRandomBetween(
    boundary.lower,
    boundary.higher,
    enteredNumber
  );

  const [currentGuess, setCurrentGuess] = useState(currentGuessValue);


  useEffect(() => {
    if(currentGuess === enteredNumber) {
      onGameOver();
    }
  }, [currentGuess, enteredNumber])

  const handleNextGameGuess = (direction) => {
    // direction => lower or higher string

    if (GameDirection.HIGHER === direction && currentGuess > enteredNumber) {
      Alert.alert(
        'You Know that',
        'This current guess is greater than user entered Number..',
        [{ text: 'Cancle', style: 'cancel' }]
      );
      return;
    }

    if (GameDirection.LOWER === direction && currentGuess < enteredNumber) {
      Alert.alert(
        'You Know that',
        'This current guess is lower than user entered Number..',
        [{ text: 'Cancle', style: 'cancel' }]
      );
      return;
    }

    if (GameDirection.LOWER === direction) {
      boundary.higher = currentGuess;
    } else {
      boundary.lower = currentGuess + 1;
    }
    setCurrentGuess(
      generateRandomBetween(boundary.lower, boundary.higher, currentGuess)
    );
  };

  return (
    <View style={styles.screen}>
      <Title customStyles={[styles.title]}>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card customStyles={[styles.card]}>
        <Title customStyles={[styles.instructionTitle]}>Higher or Lower</Title>

        <View style={styles.gameButtonContainer}>
          <PrimaryButton
            onPressButton={handleNextGameGuess.bind(this, 'higher')}
            customStyles={styles.gameButton}
          >
            +
          </PrimaryButton>
          <PrimaryButton
            onPressButton={handleNextGameGuess.bind(this, 'lower')}
            customStyles={styles.gameButton}
          >
            -
          </PrimaryButton>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
  instructionTitle: {
    fontSize: 24,
    color: Color.yellow500,
    alignSelf: 'center',
    marginBottom: 6,
  },
  gameButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gameButton: {
    flex: 1,
  },
  card: {
    marginTop: 30,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
});
