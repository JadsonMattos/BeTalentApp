import React from 'react';
import 'react-native-gesture-handler';
import EmployeesScreen from './src/screens/EmployeesScreen';
import SplashScreen from './src/screens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/types/ScreenType';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmployeesScreen" component={EmployeesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
