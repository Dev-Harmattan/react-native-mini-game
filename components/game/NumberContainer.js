import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../../utils/colors';

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Color.yellow500,
    margin: 24,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: Color.yellow500,
    fontSize: 36,
    // fontWeight: 'bold',
    // textAlign: 'center',
    fontFamily: 'open-sans-bold'
  },
});
