import {useState} from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import {GameScreen} from './screens/GameScreen';
import { Color } from './utils/colors';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);

  const handlePickedNumber = (number) => {
    setPickedNumber(number);
  }

  let screen = <StartGameScreen onPickNumber={handlePickedNumber} />

  if(pickedNumber){
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={[Color.primary800, Color.yellow500]} style={styles.rootScreen}>
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
    opacity: 0.15
  }
});
