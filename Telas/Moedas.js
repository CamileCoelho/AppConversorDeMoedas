import { FlatList } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Moedas({navigation}) {
   const listaContatos = [
      {id: 0, titulo: 'Real Brasileiro -> Dólar Americano', codigo: 'BRL-USD'},
      {id: 1, titulo: 'Real Brasileiro -> Dólar Canadense', codigo: 'BRL-CAD'},
      {id: 2, titulo: 'Real Brasileiro -> Euro', codigo: 'BRL-EUR'},
      {id: 3, titulo: 'Real Brasileiro -> Libra Esterlina', codigo: 'BRL-GBP'},
      {id: 4, titulo: 'Real Brasileiro -> Peso Argentino', codigo: 'BRL-ARS'},
      {id: 5, titulo: 'Real Brasileiro -> Iene Japonês', codigo: 'BRL-JPY'},
      {id: 6, titulo: 'Real Brasileiro -> Franco Suíço', codigo: 'BRL-CHF'},
      {id: 7, titulo: 'Real Brasileiro -> Dólar Australiano', codigo: 'BRL-AUD'},
      {id: 8, titulo: 'Dólar Americano -> Real Brasileiro', codigo: 'USD-BRL'},
      {id: 9, titulo: 'Dólar Canadense -> Real Brasileiro', codigo: 'CAD-BRL'},
      {id: 10, titulo: 'Euro -> Real Brasileiro', codigo: 'EUR-BRL'},
      {id: 11, titulo: 'Libra Esterlina -> Real Brasileiro', codigo: 'GBP-BRL'},
      {id: 12, titulo: 'Peso Argentino -> Real Brasileiro', codigo: 'ARS-BRL'},
      {id: 13, titulo: 'Iene Japonês -> Real Brasileiro', codigo: 'JPY-BRL'},
      {id: 14, titulo: 'Franco Suíço -> Real Brasileiro', codigo: 'CHF-BRL'},
      {id: 15, titulo: 'Dólar Australiano -> Real Brasileiro', codigo: 'AUD-BRL'},
   ]

   return (
      <View style={{ flex: 1 }}>
         <FlatList 
            data= { listaContatos }
            renderItem={ ({item}) =>
            <TouchableOpacity onPress={() => navigation.navigate('Conversao', {titulo: item.titulo, codigo: item.codigo })}>
               <View style={{ flexDirection: 'row', borderBottomWidth: 1, width: '100%', alignItems: 'center', padding: 10 }}>
                  
                  <View style={{ flex: 1 }}>
                     <Image source={ require('../assets/coin-dark.png') } resizeMode='contain' style={{ width:50, height: 50}} ></Image>
                  </View>
                  
                  <View style={{ flex:5, marginLeft: 10 }}>
                     <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.titulo}</Text>
                     <Text>{item.codigo}</Text>
                  </View>
                  
               </View>
            </TouchableOpacity> 
            }
         />
      </View>
   );
}
