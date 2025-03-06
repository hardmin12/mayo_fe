import React, { useState } from 'react';
import { LoginScreenNavigationProp } from '@/navigation/navigationTypes';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfile, KakaoOAuthToken, KakaoProfile, login, logout, unlink } from '@react-native-seoul/kakao-login';

interface LoginProps {
    navigation: LoginScreenNavigationProp; // navigation 타입 정의
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  
  const [result, setResult] = useState<string | null>(null);

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
  

  const BACKEND_URL = "http://172.30.1.44:8080";

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
  
  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();
    setResult(message);
    console.log("로그아웃:", result);

  };
  
  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();
    setResult(JSON.stringify(profile));
    console.log("로그인 프로필 정보:", result);

  };
  
  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();
    setResult(message);
    console.log("링크 끊기:", result);
  };


  //화면 확인용 테스트 버튼
  const handleTestBtn = () => {
    console.log('로그인화면-버튼 클릭');
    //닉네임 설정 화면으로 이동
    navigation.navigate('nickname', { userId: 'test12345' });
    //handleLoginSuccess();
  };

  //토큰 저장용 함수
  const storeTokens = async (accessToken: string, refreshToken: string) => {
    console.log('storeTokens 함수 호출 - accessToken:', accessToken, 'refreshToken:', refreshToken);  // 디버깅용 로그
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      console.log('토큰 저장 성공!');
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
                <Text style={common.desText}>마요에서 이야기 해보세요</Text>
                {/* 구글 로그인 버튼 */}
                <Button title="Google Login" onPress={handleGoogleLogin} />
                {/* 카카오 로그인 버튼 */}
                <Button title="Kakao sign" onPress={signInWithKakao} />
                <Button title="Kakao profile" onPress={getKakaoProfile} /> {/* 카카오 프로필 정보 */}
                <Button title="Kakao signOut" onPress={signOutWithKakao} /> {/* 카카오 로그아웃 */}
                <Button title="Kakao unlink" onPress={unlinkKakao} />
                {/* <Text>로그인 결과: {result}</Text> */}
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
  content:{
    flex: 1, // 전체 화면 차지
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  googleBtn: {

  }
});

export default Login;