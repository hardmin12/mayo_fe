/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'; //gesture-handler 초기화 
import React from 'react';
// import type {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';
import MainScreen from '@screens/Main'; // 시작 스크린
import LoginScreen from '@screens/Login'; // 로그인 스크린
import NickNameScreen from '@screens/WriteNickName'; // 닉네임 지정 스크린

/*네비게이션*/
//스택 네비게이터를 생성
import { createStackNavigator } from '@react-navigation/stack';
//네비게이션의 최상위 컨테이너 컴포넌트
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#151B3D', '#3848A3']} 
      style={styles.gradientContainer} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }} 
      >
      {/* 네비게이션 컨테이너 */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen options={{ headerShown: false }} name="main" component={MainScreen} />
          <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="nickname" component={NickNameScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </LinearGradient>
  </View>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1, // 전체 화면을 차지하도록 설정
    position: 'absolute', // 배경을 화면 전체에 고정
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
