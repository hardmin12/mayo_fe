/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'; //gesture-handler 초기화 
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from '@screens/Main'; // 시작 화면 스크린
import LoginScreen from '@screens/Login'; // 로그인 스크린
import NickNameScreen from '@screens/NickName'; // 닉네임 지정 스크린
import HomeScreen from '@screens/Home'; // 홈 스크린
import CounselHomeScreen from '@/screens/counsel/CounselHome'; // 상담 스크린

/*네비게이션*/
import { createStackNavigator } from '@react-navigation/stack';//스택 네비게이터 생성
import { NavigationContainer } from '@react-navigation/native'; //네비게이션의 최상위 컨테이너 컴포넌트
import { RootStackParamList } from '@/navigation/navigationTypes'; //네비게이션 관련 타입 정의 파일

// 스택 네비게이터 생성
const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <View style={styles.container}> 
      {/*<NickNameProvider>   NicknameContext 제공하는 역할(닉네임 접근) - 진행중 */}
        <NavigationContainer>  {/* 네비게이션 컨테이너 */}
          <Stack.Navigator initialRouteName="main">
            <Stack.Screen options={{ headerShown: false }} name="main" component={MainScreen} />
            <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="nickname" component={NickNameScreen} />
            <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="counselHome" component={CounselHomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </NickNameProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1, // 전체 화면을 차지하도록 설정
    position: 'absolute', // 배경을 화면 전체에 고정
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
