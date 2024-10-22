export const fetchEmployees = async () => {
  try {
    const response = await fetch('http://192.168.3.21:3000/employees');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
    throw error;
  }
};
