import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../../utils/colors';

export const GuessItemList = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Oponent's guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: Color.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.yellow500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.35,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
