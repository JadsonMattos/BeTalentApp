import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/ScreenType";
import { View, Image, Animated, Easing } from "react-native";
import { SplashScreenStyles as styles } from "../styles/SplashScreenStyles";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();

    setTimeout(() => {
      navigation.navigate('EmployeesScreen');
    }, 1100);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        testID='logo'
        source={require('../../assets/Logo.png')}
        style={[styles.logo, { opacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
