import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native';
import axios from 'axios';

export default function Conversao({ route }) {
  const { nome, codigo } = route.params;

  const [inputValue, setInputValue] = useState('');
  const [calculatedValue, setCalculatedValue] = useState('');
  const [updateInfo, setUpdateInfo] = useState('');

  // Função para calcular o valor
  const calcularValor = async () => {
    if (inputValue) {
      try {
        const response = await axios.get(`https://economia.awesomeapi.com.br/last/${codigo}`);
        const currencyCode = Object.keys(response.data)[0];
        const { bid, create_date } = response.data[currencyCode];
  
        const convertedValue = (inputValue * bid).toFixed(2).replace('.', ',');
        setCalculatedValue(`R$ ${convertedValue}`);
        const updateInfoText = `Atualizado em ${create_date.substring(8, 10)}/${create_date.substring(5, 7)}/${create_date.substring(2, 4)} às ${create_date.substring(11, 16)}`;
        setUpdateInfo(updateInfoText);
      } catch (error) {
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

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Seu Aplicativo de Conversão</Text>

      <Text style={styles.sectionLabel}>Valor em Reais</Text>
      <TextInput
        placeholder="Digite o valor em Real"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={[styles.input, { textAlign: 'center' }]} // Centralize o texto
      />

      <Text style={styles.sectionLabel}>Valor em Dólar</Text>
      <Text style={styles.calculatedValue}>{calculatedValue}</Text>

      <Text style={styles.updateInfo}>{updateInfo}</Text>

      <TouchableOpacity
        style={styles.customButton}
        onPress={calcularValor}
      >
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
    width: 150,
    height: 150,
    marginTop: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  sectionLabel: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  calculatedValue: {
    fontSize: 20,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    textAlign: 'center',
  },
  updateInfo: {
    fontSize: 12,
    marginTop: 10,
    color: '#8c9494',
  },
  customButton: {
    backgroundColor: '#009688',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  customButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
