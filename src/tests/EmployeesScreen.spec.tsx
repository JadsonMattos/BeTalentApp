import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import EmployeesScreen from '../screens/EmployeesScreen';
import { Employee } from '../types/Employee';
import { fetchEmployees } from '../services/employeeApi';

jest.mock('../services/employeeApi');

const mockEmployees: Employee[] = [{
  id: 1,
  name: 'João',
  job: 'Desenvolvedor',
  admission_date: '2021-01-01',
  phone: '+55 (11) 99999-9999',
  image: '../../assets/Photo - 01.png',
}];

describe('EmployeesScreen', () => {
  it('deve apresentar o indicadorde carregando enquanto faz a requisição', async () => {
    (fetchEmployees as jest.Mock).mockResolvedValue([]);
    const { getByText } = render(<EmployeesScreen />);
    expect(getByText('Carregando funcionários...')).toBeTruthy();
  });

  it('deve apresentar a lista de funcionários', async () => {
    (fetchEmployees as jest.Mock).mockResolvedValueOnce(mockEmployees);
    const { getByText } = render(<EmployeesScreen />);
    await waitFor(() => expect(getByText('João')).toBeTruthy());
  });

  it('deve filtrar os funcionários', async () => {
    (fetchEmployees as jest.Mock).mockResolvedValueOnce(mockEmployees);
    const { getByPlaceholderText, getByText, queryByText } = render(<EmployeesScreen />);
    await waitFor(() => expect(getByText('João')).toBeTruthy());
    const searchInput = getByPlaceholderText('Pesquisar');
    fireEvent.changeText(searchInput, 'não encontrado');
    expect(queryByText('João')).toBeNull();
  });
});
