import {Text, StyleSheet} from 'react-native'; 
import {Color} from '../utils/colors'
export const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.yellow500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Color.yellow500,
    padding: 12,
  },
});