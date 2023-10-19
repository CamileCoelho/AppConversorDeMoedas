import axios from 'axios';

export class MoedaService {
  static async getMonetaryData(moedaPair) {
    try {
      const response = await axios.get(`https://economia.awesomeapi.com.br/last/${moedaPair}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
