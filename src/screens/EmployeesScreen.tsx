import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Employee } from '../types/Employee';
import { fetchEmployees } from '../services/employeeApi';
import EmployeeCard from '../components/EmployeeCard';
import { EmployeesScreenStyles as styles } from '../styles/EmployeesScreenStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DarkMode from '../components/DarkMode';
import NotificationModal from '../components/NotificationModal';

const EmployeesScreen: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleNotificationPress = () => {
    setNotificationVisible(true);
  };

  const handleNotificationClose = () => {
    setNotificationVisible(false);
  };

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        setError('Erro');
      } finally {
        setLoading(false);
      }
    };
    loadEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.job.toLowerCase().includes(search.toLowerCase()) ||
      employee.phone.includes(search)
    );
  });

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando funcionários...</Text>
      </View>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={darkMode ? styles.darkContainer : styles.container}>
      <View style={styles.header}>
        <View style={styles.image}>
          <Image source={require('../../assets/Fundo.png')} />
        </View>
        <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <FontAwesome
          name="bell-o"
          style={darkMode ? styles.iconRightLight : styles.iconRight}
          onPress={handleNotificationPress}
        />  
      </View>

      <NotificationModal
        visible={notificationVisible}
        onClose={handleNotificationClose}
        notificationText="Notificação: contratar um Developer!"
      />

      <Text style={darkMode ? styles.titleLight : styles.title}>Funcionários</Text>
      

      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <View style={styles.headerTable}>
        <Image
          style={styles.imageTable}
          source={require('../../assets/mobile.png')}
        />
      </View>

      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EmployeeCard employee={item} />}
        onRefresh={() => {loading}}
        refreshing={loading}
      />
    </View>
  );
};

export default EmployeesScreen;
