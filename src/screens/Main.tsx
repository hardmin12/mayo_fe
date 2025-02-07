//import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//어플 시작 화면
const Main = ({ navigation }: any) => {
  
  // 컴포넌트가 처음 렌더링되면 3초 후에 로그인 화면으로 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      // 스택네비게이션에 정한 컴포넌트 이름 사용.
      // 3초 후 LoginScreen으로 이동 (replace는 스택에서 현재 화면을 대체)
      navigation.replace('login'); 
      //navigation.replace('nickname'); //닉네임 지정 페이지 확인용
    
    }, 3000); 

    // 클린업 함수 (컴포넌트가 언마운트되면 타이머를 정리)
    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.container} >
      <Text style={styles.title}>MAYO</Text>
      <Text style={styles.subtext}>내 마음을 위로할 마음 상담소</Text>
      <Image 
        source={require('@assets/images/hello_right.gif')}
        style={styles.image}
      />
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
    fontSize: 80,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#566BC7',
  },
  subtext: {
    fontSize: 20,
    color: '#C2CEFF',
  },
  image: {
    width: 500,
    height: 500,
  }
});

export default Main;