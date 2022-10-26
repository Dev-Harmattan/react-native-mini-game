import { View, Text, Pressable, StyleSheet } from 'react-native';

export const PrimaryButton = ({ children, onPressButton }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressButton}
        android_ripple={{ color: '#640233' }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.iosRipple]
            : styles.buttonInnerContainer
        }
        // style={(pressed) => pressed && ''}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    // width: 120
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    backgroundColor: '#73063c',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  iosRipple: {
    opacity: 0.75,
  },
});
