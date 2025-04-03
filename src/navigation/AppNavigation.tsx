import React from "react";
import MainScreen from '@screens/Main';
import LoginScreen from '@screens/Login';
import NickNameScreen from '@screens/NickName'; 
import HomeScreen from '@screens/Home'; 
import CounselHomeScreen from '@/screens/counsel/CounselHome'; 
import CounselCallScreen from '@/screens/counsel/CounselCall'; 
import CounselEndScreen from '@/screens/counsel/CounselEnd'; 
import { createStackNavigator } from '@react-navigation/stack';//스택 네비게이터 생성
import { NavigationContainer } from '@react-navigation/native'; //네비게이션의 최상위 컨테이너 컴포넌트
import { RootStackParamList } from '@/navigation/navigationTypes'; //네비게이션 관련 타입 정의 파일

// 스택 네비게이터
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer> 
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen options={{ headerShown: false }} name="main" component={MainScreen} />
      <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="nickname" component={NickNameScreen} />
      <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="counselHome" component={CounselHomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="counselCall" component={CounselCallScreen} />
      <Stack.Screen options={{ headerShown: false }} name="counselEnd" component={CounselEndScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
