import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getConversionDate, getConversionRate } from '../services/moedas.service';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native';

export default function Conversao({ route }) {
  const { titulo, codigo } = route.params;

  const [inputValue, setInputValue] = useState('');
  const [calculatedValue, setCalculatedValue] = useState('');
  const [updateInfo, setUpdateInfo] = useState('');

  const calcularValor = async () => {
    if (inputValue) {
      try {
        const bid = await getConversionRate(codigo);
        const convertedValue = (inputValue * bid).toFixed(2).replace('.', ',');
        setCalculatedValue(`${convertedValue}`);

        const create_date = await getConversionDate(codigo);
        const updateInfoText = `Atualizado em ${create_date.substring(8, 10)}/${create_date.substring(5, 7)}/${create_date.substring(2, 4)} às ${create_date.substring(11, 16)}.`;
        setUpdateInfo(updateInfoText);
      } 
      catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    setInputValue('');
    setCalculatedValue('');
    setUpdateInfo('');

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      setInputValue('');
      setCalculatedValue('');
      setUpdateInfo('');
      return true;
    }); 

    return () => backHandler.remove();}, 
  []);

  useFocusEffect(
    React.useCallback(() => {
      setInputValue('');
      setCalculatedValue('');
      setUpdateInfo('');
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/coin.png')}
        style={styles.image}
      />

      <Text style={styles.sectionLabel}>Valor em {titulo.split('->')[0].trim()}</Text>
      
      <TextInput
        placeholder={`Digite o valor em ${titulo.split('->')[0].trim()}`}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={[styles.input]} 
      />

      <Text style={styles.sectionLabel}>Valor em {titulo.split('->')[1].trim()}</Text>
      <Text style={styles.calculatedValue}>{calculatedValue}</Text>
      <Text style={styles.updateInfo}>{updateInfo}</Text>

      <TouchableOpacity
        style={styles.customButton}
        onPress={calcularValor}>
        <Text style={styles.customButtonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom:30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  sectionLabel: {
    fontSize: 22,
    marginTop: 30,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    width: '100%',
    height: '8%',
    fontSize: 20,
  },
  calculatedValue: {
    fontSize: 20,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    textAlign: 'center',
    width: '100%',
    height: '8%',
  },
  updateInfo: {
    fontSize: 12,
    marginTop: 10,
    color: '#8c9494',
  },
  customButton: {
    backgroundColor: '#008081',
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
  },
  customButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
  },
});
