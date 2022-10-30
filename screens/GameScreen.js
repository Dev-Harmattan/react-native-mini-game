import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../utils/random';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { GameDirection } from '../utils/gameText';

export const GameScreen = ({ enteredNumber }) => {
  let boundary = {
    higher: 100,
    lower: 1,
  };

  const currentGuessValue = generateRandomBetween(
    boundary.lower,
    boundary.higher,
    enteredNumber
  );

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

  const [currentGuess, setCurrentGuess] = useState(currentGuessValue);
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton
            onPressButton={handleNextGameGuess.bind(this, 'higher')}
          >
            +
          </PrimaryButton>
          <PrimaryButton
            onPressButton={handleNextGameGuess.bind(this, 'lower')}
          >
            -
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
