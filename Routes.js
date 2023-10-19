import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Moedas from './Telas/Moedas';
import Sobre from './Telas/Sobre';
import Conversao from './Telas/Conversao';

const Drawer = createDrawerNavigator()

export default function Routes() {
   return(
      <NavigationContainer>
         <Drawer.Navigator
            screenOptions={{
            drawerActiveBackgroundColor: '#009688', // Cor de fundo ativa
            drawerActiveTintColor: '#fff', // Cor do texto ativo
            drawerInactiveTintColor: '#000', // Cor do texto inativo
            drawerLabelStyle: {
               fontWeight: 'bold', // Estilo do texto
            },
         }}>
            <Drawer.Screen name='Sobre' component={ Sobre }></Drawer.Screen>
            <Drawer.Screen name='Moedas' component={ Moedas }></Drawer.Screen>
            <Drawer.Screen name='Conversao'component={ Conversao }
               options={{
                  drawerItemStyle: { height: 0 }
                }}>
            </Drawer.Screen>
         </Drawer.Navigator>
      </NavigationContainer>
   );
}