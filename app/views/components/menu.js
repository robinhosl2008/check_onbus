import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import ChamadoScreen from '../ChamadoScreem';

const Drawer = createDrMoawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Chamados' component={ChamadoScreen} />
        </Drawer.Navigator>
    );
}