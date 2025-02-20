import React from 'react';
import { LoginScreenNavigationProp } from '@/navigation/navigationTypes';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
// import { UserApi } from '@react-native-seoul/kakao-login';

interface LoginProps {
    navigation: LoginScreenNavigationProp; // navigation 타입 정의
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
/*
  // 로그인 후 닉네임 존재 여부 확인  - 로그인 기능 구현 후 진행 예정
  
  const { nickname } = useNickname(); // Context에서 닉네임 가져오기

  const handleLoginSuccess = () => {
    if (nickname) {
      navigation.replace('home'); 
    } else {
      navigation.replace('nickname', { userId: 'test12345' });
    }
  };
*/
  // 구글 로그인 
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };
  
  // 카카오톡 로그인
  const loginWithKakao = async () => {

    try{
      const token: KakaoOAuthToken = await login();

      console.log("카카오 로그인", 'success', token);

    }catch(error){
      console.log("카카오 로그인 실패", error);

    }
  }

  //화면 확인용 테스트 버튼
  const handleTestBtn = () => {
    console.log('로그인화면-버튼 클릭');
    //닉네임 설정 화면으로 이동
    navigation.navigate('nickname', { userId: 'test12345' });
    //handleLoginSuccess();
  };
  
  return (
    <View style={common.container}>
        <LinearGradient 
            colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
        >
            <View style={styles.content}>
                <Image 
                    source={require('@assets/images/torimi_title.png')}
                    style={styles.image}
                />
                <Text style={[common.desText, {paddingBottom:10}]}>오늘 하루 어떠셨나요?</Text>
                <Text style={common.desText}>마요에서 이야기 해보세요</Text>
                {/* 구글 로그인 버튼 */}
                <Button title="Google Login" onPress={handleGoogleLogin} />
                {/* 카카오 로그인 버튼 */}
                <Button title="Kakao Login" onPress={loginWithKakao} />
               {/* 화면 이동 테스트 버튼 */}
                <Button title="로그인 없이 둘러보기(화면 테스트용)" onPress={handleTestBtn} />

                {/* <KakaoLoginButton
                    onLoginSuccess={(result) => console.log('Login Success', result)}
                    onLoginFail={(error) => console.log('Login Failed', error)}
                /> */}
            </View>
        </LinearGradient>
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  content:{
    flex: 1, // 전체 화면 차지
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  googleBtn: {

  }
});

export default Login;