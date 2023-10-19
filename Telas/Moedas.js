import { View, Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

export default function Moedas({navigation}) {
   const listaContatos = [
      {id: 0, nome: 'Dólar Americano/Real Brasileiro', codigo: 'BRL-USD'},
      {id: 1, nome: 'Dólar Canadense/Real Brasileiro', codigo: 'BRL-CAD'},
      {id: 2, nome: 'Euro/Real Brasileiro', codigo: 'BRL-EUR'},
      {id: 3, nome: 'Libra Esterlina/Real Brasileiro', codigo: 'BRL-GBP'},
      {id: 4, nome: 'Peso Argentino/Real Brasileiro', codigo: 'BRL-ARS'},
      {id: 5, nome: 'Iene Japonês/Real Brasileiro', codigo: 'BRL-JPY'},
      {id: 6, nome: 'Franco Suíço/Real Brasileiro', codigo: 'BRL-CHF'},
      {id: 7, nome: 'Dólar Australiano/Real Brasileiro', codigo: 'BRL-AUD'},
   ]

   return (
      <View style={{ flex: 1 }}>
         <FlatList 
            data= { listaContatos }
            renderItem={ ({item}) =>
            <TouchableOpacity onPress={() => navigation.navigate('Conversao', {nome: item.nome, codigo: item.codigo })}>
               <View style={{ flexDirection: 'row', borderBottomWidth: 1, width: '100%', alignItems: 'center', padding: 10 }}>
                  <View style={{ flex: 1 }}>
                     <Image source={ require('../assets/profile.png') } resizeMode='contain' style={{ width:50, height: 50}} ></Image>
                  </View>
                  <View style={{ flex:5, marginLeft: 10 }}>
                     <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.nome}</Text>
                     <Text>{item.codigo}</Text>
                  </View>
               </View>
            </TouchableOpacity> 
            }
         />
      </View>
   );
}
