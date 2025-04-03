/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'; //gesture-handler 초기화 
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from '@/navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}> 
      {/*<NickNameProvider>   NicknameContext 제공하는 역할(닉네임 접근) - 진행중 */}
      <AppNavigator />
      {/* </NickNameProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
