import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { Color } from '../utils/colors';

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleNumberInput = (value) => {
    setEnteredNumber(value);
  };

  const handleNumberReset = () => {
    setEnteredNumber('');
  };

  const handleButtonPress = () => {
    const numberValue = parseInt(enteredNumber, 10);
    if (isNaN(numberValue) || numberValue <= 0 || numberValue > 99) {
      Alert.alert(
        'Invalid Number',
        'The number must be a number between 1 and 99',
        [{ text: 'Ok', style: 'destructive', onPress: handleNumberReset }]
      );
      return;
    }
    onPickNumber(numberValue);
  };

  return (
    <View style={[styles.inputContainer, styles.shadowProp]}>
      <TextInput
        style={styles.numberInput}
        underlineColorAndroid="transparent"
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={handleNumberInput}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressButton={handleNumberReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressButton={handleButtonPress}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    borderBottomColor: Color.yellow500,
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: 'bold',
    color: Color.yellow500,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
