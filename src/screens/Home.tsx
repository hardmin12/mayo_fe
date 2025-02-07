import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//메인 홈 화면
const Home = () => {
  
  return (
    <View style={styles.container}>
        <Text>홈 화면</Text>
        <Text>닉네임 여기서 테스트</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;

