import {View, StyleSheet} from 'react-native';

export const Card = ({children, customStyles}) => {
  return <View style={[...customStyles]}>{children}</View>;
}
