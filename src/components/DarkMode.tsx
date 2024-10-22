import React from "react";
import { EmployeesScreenStyles as styles

 } from "../styles/EmployeesScreenStyles";
import { View, TouchableOpacity, Switch } from "react-native";

interface DarkModeProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <View style={darkMode ? styles.darkContainer : styles.container}>
      <Switch
        testID="dark-button"
        value={darkMode}
        onValueChange={toggleDarkMode}
        thumbColor={darkMode ? "#fff" : "#000"}
      />
      <TouchableOpacity onPress={toggleDarkMode}></TouchableOpacity>
    </View>
  );
};

export default DarkMode;
