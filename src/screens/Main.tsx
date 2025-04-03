import { MainScreenNavigationProp } from '@/navigation/navigationTypes'; //네비게이션 타입 파일
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일

interface MainProps {
  navigation: MainScreenNavigationProp; 
}

//어플 시작 화면(스플래쉬 스크린)
const Main: React.FC<MainProps> = ({ navigation }) => {
    
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('login'); 
    }, 3000); 
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
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20, 
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