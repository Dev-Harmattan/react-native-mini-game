import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { GameScreen } from './screens/GameScreen';
import { Color } from './utils/colors';
import { GameOver } from './screens/GameOverScreen';
import {StatusBar} from 'expo-status-bar'

export default function App() {
  const [pickedNumber, setPickedNumber] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState([]);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const handleNumberOfRands = (guessRound) => {
    setNumberOfRounds((prev) => [guessRound, ...prev]);
  }

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handlePickedNumber = (number) => {
    setPickedNumber(number);
  };

  const handleStartNewGame = () => {
    console.log('Click')
    setPickedNumber('');
    setGameOver(false);
    setNumberOfRounds(0)
  }

  if (!fontLoaded) return <AppLoading />;

  let screen = <StartGameScreen onPickNumber={handlePickedNumber} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        enteredNumber={pickedNumber}
        onGameOver={handleGameOver}
        handleNumberOfRands={handleNumberOfRands}
        numberOfRounds={numberOfRounds}
      />
    );
  }

  if (gameOver) {
    screen = <GameOver enteredNumber={pickedNumber} rounds={numberOfRounds.length} onStartNewGame={handleStartNewGame} />;
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Color.primary800, Color.yellow500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background-image.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
