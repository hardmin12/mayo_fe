import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // LinearGradient import

//메인 홈 화면
const Main = ({ navigation }: any) => {
  // 구글 로그인 버튼 클릭
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  // 카카오 로그인 버튼 클릭
  const handleKakaoLogin = () => {
    console.log('Kakao login clicked');
  };

  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#151B3D', '#3848A3']}  // 그라데이션 색상
          style={styles.background}         // 스타일 적용
          start={{ x: 0, y: 0 }}           // 그라데이션 시작점
          end={{ x: 1, y: 1 }}             // 그라데이션 끝점
        >
        <Text style={styles.title}>MAYO</Text>

        {/* 구글 로그인 버튼 */}
        <Button title="Google Login" onPress={handleGoogleLogin} />

        {/* 카카오 로그인 버튼 */}
        <Button title="Kakao Login" onPress={handleKakaoLogin} />
      </LinearGradient>
    </View>
  );
};

//스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,  // 이 부분을 통해 LinearGradient가 전체 화면을 차지하도록 설정
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',  // 가로를 전체 화면에 맞게
    height: '100%', // 세로를 전체 화면에 맞게
    position: 'absolute', // UI 요소들에 영향 주지 않도록 설정
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default Main;