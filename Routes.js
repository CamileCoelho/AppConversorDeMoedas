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
            screenOptions={{ drawerActiveBackgroundColor: '#008081', 
            drawerActiveTintColor: 'white', drawerInactiveTintColor: '#000', 
            drawerLabelStyle: { fontWeight: 'bold' }}}>

            <Drawer.Screen name='Sobre' 
                           component={ Sobre }
                           options={{ title:'Sobre',
                           headerStyle: { backgroundColor: '#008081'},
                           headerTintColor: 'white', }}></Drawer.Screen>

            <Drawer.Screen name='Moedas' 
                           component={ Moedas }
                           options={{ title:'Moedas',
                           headerStyle: { backgroundColor: '#008081'},
                           headerTintColor: 'white', }}></Drawer.Screen>

            <Drawer.Screen name='Conversao'
                           component={ Conversao }             
                           options={{ drawerItemStyle: { height: 0 }, 
                           title:'Conversão',
                           headerStyle: { backgroundColor: '#008081'},
                           headerTintColor: 'white', }}>
            </Drawer.Screen>

         </Drawer.Navigator>
      </NavigationContainer>
   );
}