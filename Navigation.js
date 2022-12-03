import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cam from './pages/Cam'
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import PriceHistory from "./pages/PriceHistory";
const Stack = createStackNavigator();

const NavigationHome = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Escolha seu Mercado"
            component={Home}
            />
            <Stack.Screen
            name="Leitor Código de Barras"
            component={Cam}
            />
            <Stack.Screen
            name="Produtos"
            component={Products}
            />
            <Stack.Screen
            name="Leituras"
            component={PriceHistory}
            />
            <Stack.Screen
            name="Perfil"
            component={Profile}
            />
        </Stack.Navigator>

    );
  }
const NavigationCam = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
            name="Leitor Código de Barras"
            component={Cam}
            />
            <Stack.Screen
            name="Escolha seu Mercado"
            component={Home}
            />
            <Stack.Screen
            name="Perfil"
            component={Profile}
            />
        </Stack.Navigator>

    );
  }
const NavigationProfile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Perfil"
            component={Profile}
            />
            <Stack.Screen
            name="Escolha seu Mercado"
            component={Home}
            />
            <Stack.Screen
            name="Leitor Código de Barras"
            component={Cam}
            />
        </Stack.Navigator>

    );
  }

  export{NavigationHome, NavigationCam, NavigationProfile}