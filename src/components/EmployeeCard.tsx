import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Employee } from '../types/Employee';
import { EmployeeCardStyles as styles } from '../styles/EmployeeCardStyles';
import { formatDate, formatPhone } from '../utils/formatHelpers';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [collapsed, setCollapsed] = useState(true);

  const employeeImage = (employeeName: string) => {
    const images: { [key: string]: any } = {
      'João': require('../../assets/Photo - 01.png'),
      'Roberto': require('../../assets/Photo - 05.png'),
      'Maria': require('../../assets/Photo - 02.png'),
      'Cleber': require('../../assets/Photo - 06.png'),
      'Giovana': require('../../assets/Photo - 03.png'),
      'Mario': require('../../assets/Photo - 07.png'),
      'Gabriel': require('../../assets/Photo - 09.png'),
      'Carla': require('../../assets/Photo - 04.png'),
      'Fernanda': require('../../assets/Photo - 08.png'),
    }; 
    return images[employeeName] || { uri: employee.image };
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)} style={styles.row}>
        <Image source={employeeImage(employee.name)} style={styles.image} />
        <Text style={styles.name}>{employee.name}</Text>
        <FontAwesome style={styles.icon} name={collapsed ? 'chevron-down' : 'chevron-up'} />
      </TouchableOpacity>

      {!collapsed && (
        <View style={styles.details}>
          <View style={styles.detailRow}> 
            <Text style={styles.label}>Cargo:</Text>
            <Text style={styles.value}>{employee.job}</Text>
          </View>
          <View style={styles.detailRow}> 
            <Text style={styles.label}>Data de Admissão:</Text>
            <Text style={styles.value}>{formatDate(employee.admission_date)}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>{formatPhone(employee.phone)}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default EmployeeCard;
