import React from 'react';
import { LoginScreenNavigationProp } from '@/navigation/navigationTypes';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';

interface LoginProps {
    navigation: LoginScreenNavigationProp; // navigation 타입 정의
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  
  //const [result, setResult] = useState<string | null>(null);

  /*
  // 로그인 후 닉네임 존재 여부 확인  - 로그인 기능 구현 후 진행 예정
  
  const { nickname } = useNickname(); // Context에서 닉네임 가져오기

  const handleLoginSuccess = () => {
    if (nickname) {
      navigation.replace('home'); 
    } else {
      navigation.replace('nickname');
  };
*/
  // 구글 로그인 
  // const handleGoogleLogin = () => {
  //   console.log('Google login clicked');
  // };
  

  const BACKEND_URL = "http://172.30.1.93:8080"; 

  // 카카오톡 로그인
  const signInWithKakao = async (): Promise<void> => {
    try {
    const token: KakaoOAuthToken = await login();
    console.log("로그인 성공! 액세스 토큰:", token.accessToken);

    const backendUrl = `${BACKEND_URL}/api/auth/kakao`; // 서버 URL
    console.log("백엔드 요청 URL:", backendUrl);

    //백엔드로 토큰 전송
    const response = await fetch(`${BACKEND_URL}/api/auth/kakao`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`
      },
      body: JSON.stringify({ accessToken: token.accessToken})
    });
   
    if(!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
   }
   
    const data = await response.json();
    console.log("백엔드 응답(JSON):", data);
    
    console.log('Saving tokens to AsyncStorage');
    // 백엔드에서 반환한 토큰을 AsyncStorage에 저장
    storeTokens(data.accessToken, data.refreshToken); // accessToken과 refreshToken을 storeTokens 함수로 넘겨줌
    
    } catch (error) {
      console.error("카카오 로그인 오류:", error)
    }
    
  };
  
  //화면 확인용 테스트 버튼
  const handleTestBtn = () => {
    navigation.navigate('nickname');
  };

  //토큰 저장용 함수
  const storeTokens = async (accessToken: string, refreshToken: string) => {
    console.log('storeTokens 함수 호출 - accessToken:', accessToken, 'refreshToken:', refreshToken);  // 디버깅용 로그
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      console.log('토큰 저장 성공!');
      navigation.navigate('nickname');
    } catch (error) {
      console.error('토큰 저장 실패:', error);
    }
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
                <Text style={[common.desText, {paddingBottom:10}]}>마요에서 이야기 해보세요</Text>
                {/* 구글 로그인 버튼 */}
                {/* <Button title="Google Login" onPress={handleGoogleLogin} /> */}
                {/* 카카오 로그인 버튼 */}
                <TouchableOpacity onPress={signInWithKakao} activeOpacity={0.7}>
                  <Image 
                      source={require('@assets/images/button/kakao_login_large_wide.png')}
                      style={styles.kakaoLoginImage}
                      resizeMode="contain"
                  />
                </TouchableOpacity>
               {/* 화면 이동 테스트 버튼 */}
                <Button title="로그인 없이 둘러보기(화면 테스트용)" onPress={handleTestBtn} />
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
  kakaoLoginImage: {
    width: 300,
    height: 45,
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  googleBtn: {

  }
});

export default Login;