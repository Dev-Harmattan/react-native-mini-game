import { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../utils/random';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { GameDirection } from '../utils/gameText';
import { Color } from '../utils/colors';
import { Card } from '../components/ui/Card';
import { GuessItemList } from '../components/game/GuessItemList';

export const GameScreen = ({
  enteredNumber,
  onGameOver,
  handleNumberOfRands,
  numberOfRounds,
}) => {
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
    if (currentGuess === enteredNumber) {
      onGameOver();
    }
  }, [currentGuess, enteredNumber]);

  useEffect(() => {
    boundary.higher = 100;
    boundary.lower = 1;
  }, []);

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
    const guessRound = generateRandomBetween(
      boundary.lower,
      boundary.higher,
      currentGuess
    );
    handleNumberOfRands(guessRound);
    setCurrentGuess(guessRound);
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
            <AntDesign name="plus" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton
            onPressButton={handleNextGameGuess.bind(this, 'lower')}
            customStyles={styles.gameButton}
          >
            <AntDesign name="minus" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={numberOfRounds}
          renderItem={({ item, index }) => (
            <GuessItemList
              roundNumber={numberOfRounds.length - index}
              guess={currentGuess}
            />
          )}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};


const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300
  },
  instructionTitle: {
    fontSize: deviceWidth < 360 ? 12 : 24,
    color: Color.yellow500,
    alignSelf: 'center',
    marginBottom: 6,
    fontFamily: 'open-sans-bold',
    maxWidth: '100%',
    alignSelf: 'center'
  },
  gameButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gameButton: {
    flex: 1,
  },
  card: {
    marginTop: deviceWidth < 380 ? 12 : 36,
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
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
