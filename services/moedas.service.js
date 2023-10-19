import axios from 'axios';

const getConversionRate = async (codigo) => {
  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/last/${codigo}`);
    const currencyCode = Object.keys(response.data)[0];
    const { bid } = response.data[currencyCode];
    return bid;
  } 
  catch (error) {
    console.error('Erro ao obter as taxas de câmbio:', error);
    throw error;
  }
};

const getConversionDate = async (codigo) => {
  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/last/${codigo}`);
    const currencyCode = Object.keys(response.data)[0];
    const { create_date } = response.data[currencyCode];

    return create_date;
  } 
  catch (error) {
    console.error('Erro ao obter a data de atualização:', error);
    throw error;
  }
};

export { getConversionRate };
export { getConversionDate };
