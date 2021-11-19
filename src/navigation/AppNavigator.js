import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllProductsScreen from '../screens/products';
import SingleProductScreen from '../screens/productDetails';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={AllProductsScreen} />
        <Stack.Screen name="Product" component={SingleProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
