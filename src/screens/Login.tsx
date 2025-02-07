import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

//메인 홈 화면
const Login = () => {
  // 구글 로그인 버튼 클릭
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    //1.소셜 로그인 연결

    //2.로그인 성공 후 홈 화면으로 이동

  };

  // 카카오 로그인 버튼 클릭
  const handleKakaoLogin = () => {
    console.log('Kakao login clicked');
    //1.소셜 로그인 연결

    //2.로그인 성공 후 홈 화면으로 이동

  };

  return (
    <View style={styles.container}>
        <Image 
            source={require('@assets/images/torimi_title.png')}
            style={styles.image}
            />
        <Text style={styles.title}>오늘 하루 어떠셨나요? </Text>
        <Text style={styles.title}>마요에서 이야기 해보세요</Text>

        {/* 구글 로그인 버튼 */}
        <Button title="Google Login" onPress={handleGoogleLogin} />

        {/* 카카오 로그인 버튼 */}
        <Button title="Kakao Login" onPress={handleKakaoLogin} />
      

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
  }
});

export default Login;