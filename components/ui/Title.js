import {Text, StyleSheet} from 'react-native'; 
import {Color} from '../../utils/colors'
export const Title = ({children, customStyles}) => {
  return <Text  style={[...customStyles]}>{children}</Text>;
};


// const styles = StyleSheet.create({
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     borderWidth: 2,
//     borderColor: 'white',
//     padding: 12,
//   },
// });