import React from 'react';
import { render } from '@testing-library/react-native';
import SplashScreen from '../screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';

describe('SplashScreen', () => {
  it('deve renderizar a logo', () => {
    const { getByTestId } = render(
      <>
        <NavigationContainer>
          <SplashScreen />
        </NavigationContainer>
      </>
    );
    const logo = getByTestId('logo');
    expect(logo).toBeTruthy();
  });
});