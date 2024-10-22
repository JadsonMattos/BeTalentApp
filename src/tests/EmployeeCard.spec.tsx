import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EmployeeCard from '../components/EmployeeCard';
import { Employee } from '../types/Employee';

const mockEmployee: Employee = {
  id: 1,
  name: 'João',
  job: 'Desenvolvedor',
  admission_date: '2021-01-01',
  phone: '+55 (11) 99999-9999',
  image: '../../assets/Photo - 01.png',
};

describe('EmployeeCard', () => {
  it('deve renderizar os detalhes quando expandido', () => {
    const { getByText } = render(<EmployeeCard employee={mockEmployee} />);
    fireEvent.press(getByText(mockEmployee.name));
    expect(getByText('Cargo:')).toBeTruthy();
    expect(getByText('Desenvolvedor')).toBeTruthy();
  });

  it('deve colapsar os detalhes quando clicar novamente', () => {
    const { getByText, queryByText } = render(<EmployeeCard employee={mockEmployee} />);
    const nameElement = getByText(mockEmployee.name);
    fireEvent.press(nameElement);
    fireEvent.press(nameElement);
    expect(queryByText('Cargo:')).toBeNull();
    expect(queryByText('Desenvolvedor')).toBeNull();
  });
});
