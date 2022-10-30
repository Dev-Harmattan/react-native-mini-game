import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { GameScreen } from './screens/GameScreen';
import { Color } from './utils/colors';
import { GameOver } from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handlePickedNumber = (number) => {
    setPickedNumber(number);
  };

  if (!fontLoaded) return <AppLoading />;

  let screen = <StartGameScreen onPickNumber={handlePickedNumber} />;

  if (pickedNumber) {
    screen = (
      <GameScreen enteredNumber={pickedNumber} onGameOver={handleGameOver} />
    );
  }

  if (gameOver) {
    screen = <GameOver />;
  }
  return (
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
