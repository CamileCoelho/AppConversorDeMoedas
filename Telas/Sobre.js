import { View, Text } from "react-native";

export default function Sobre(){
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text style={{ fontSize: 15, textAlign: 'center', marginLeft: 10, marginRight: 10, marginTop: -100 }}>
            O aplicativo de conversão de moedas foi desenvolvido por <Text style={{ fontWeight: 'bold' }}>Tales Reig Cordova</Text> como parte do seu aprendizado 
            na disciplina de Tópicos Especiais em Programação. O objetivo deste aplicativo é demonstrar os conhecimentos 
            adquiridos durante o curso.
         </Text>
      </View>
   );
}
