import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllProductsScreen from '../src/screens/allProducts';
import SingleProductScreen from '../src/screens/singleProduct';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={AllProductsScreen} />
        <Stack.Screen name="Single product" component={SingleProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
