import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DarkMode from '../components/DarkMode';

describe('DarkMode', () => {
  it('deveria renderizar corretamente o botão', () => {
    const { getByTestId } = render(<DarkMode darkMode={false} toggleDarkMode={() => {}} />);
    const switchComponent = getByTestId('dark-button');
    expect(switchComponent.props.value).toBe(false);
  });

  it('deveria chamar a função toggleDarkMode ao pressionar o botão', () => {
    const toggleDarkMode = jest.fn();
    const { getByTestId } = render(<DarkMode darkMode={false} toggleDarkMode={toggleDarkMode} />);
    const switchComponent = getByTestId('dark-button');
    fireEvent(switchComponent, 'onValueChange', true);
    expect(toggleDarkMode).toHaveBeenCalled();
  });
});
