import {View, Text, StyleSheet} from 'react-native';
import {Title} from '../components/Title';

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  
})