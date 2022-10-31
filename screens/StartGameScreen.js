import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, useWindowDimensions } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { Color } from '../utils/colors';
import {Card} from '../components/ui/Card'

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const {width, height} = useWindowDimensions();


  const marginTopDistance = height < 380 ? 18 : 100

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
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title customStyles={[styles.title]}>Guess My Number</Title>
      <Card customStyles={[styles.inputContainer, styles.shadowProp]}>
        <Text style={styles.textInstruction}>Enter Number</Text>
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
            <PrimaryButton onPressButton={handleNumberReset}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressButton={handleButtonPress}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  textInstruction: {
    color: Color.yellow500,
    fontSize: 32,
    fontFamily: 'open-sans',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
  },
});
