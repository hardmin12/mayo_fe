import { MainScreenNavigationProp } from '@/navigation/navigationTypes'; //네비게이션 타입 파일
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일

interface MainProps {
  navigation: MainScreenNavigationProp; // navigation 타입 정의
}

//어플 시작 화면
const Main: React.FC<MainProps> = ({ navigation }) => {
    
  // 컴포넌트가 처음 렌더링되면 3초 후에 로그인 화면으로 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      // 스택네비게이션에 정한 컴포넌트 이름 사용.
      // 3초 후 LoginScreen으로 이동 (replace는 스택에서 현재 화면을 대체)
      navigation.replace('login'); 
      
    }, 3000); 
    // 클린업 함수 (컴포넌트가 언마운트되면 타이머를 정리)
    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.container} >
      <LinearGradient 
        colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
      >
      <View style={styles.content}>
          <Text style={styles.bigTitle}>MAYO</Text>
          <Text style={styles.subTitle}>내 마음을 위로할 마음 상담소</Text>
          <Image 
            source={require('@assets/images/hello_right.gif')}
            style={styles.mainImg}
          />
      </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex: 1, // 전체 화면 차지
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    padding: 20, // 주변 여백 설정
  },
  bigTitle: {
    fontSize: 80,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#566BC7',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: '#C2CEFF',
    textAlign: 'center',
    fontFamily: 'Moneygraphy-Rounded',
    
  },
  mainImg: {
    width: 500,
    height: 500,
  }
});

export default Main;