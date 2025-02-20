import { HomeNavigationProp, HomeScreenRouteProp } from '@/navigation/navigationTypes';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeScreenRouteProp;  // 닉네임 파라미터를 받는 route
}

//메인 홈 화면
const Home: React.FC<HomeProps> = ({ route }) => {
 
  const { nickname } = route.params;  // 닉네임 파라미터를 받음(테스트)

  //const { nickname } = useNickname();  // Context에서 닉네임 가져오기
  // useEffect(() => {
  //   console.log(`Loaded nickname: ${nickname}`);  // 닉네임이 잘 로드되었는지 확인
  // }, [nickname]);

  const goToCounselScreen = () => {
    console.log('상담하기 클릭');
    // navigation.navigate('counsel'});
  }

  return (
    <View style={common.container}>
        <LinearGradient 
            colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
        >
          <View style={styles.content}>
            <View style={styles.contentWrap}>
              <View style={styles.textContainer}>
              <Text style={common.desText}>
                  <Text style={common.highlight_yellow}>{nickname}, </Text>
                  <Text style={common.desText}>반가워!</Text>
                </Text>
                <Text style={common.desText}>나는 마음 요정 토리미야</Text>
                <Text style={common.desText}>마요에 온 것을 환영해!</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image 
                  source={require('@assets/images/hello_left.gif')}
                  style={styles.miniImg}
                />
              </View>
            </View>
            {/* 컴포넌트 분리하기 */}
            <View>
              <TouchableOpacity
                onPress={goToCounselScreen}
              >
                <Text style={styles.serviceButton}
                >상담하기</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.serviceButton}>일기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  content:{
    flex: 1, // 전체 화면 차지
    justifyContent: 'center', // 세로 중앙 정렬
    //justifyContent: 'space-between',  // 자식들 사이에 일정 간격을 두고 배치
    alignItems: 'center', // 가로 중앙 정렬
    // flexDirection: 'row',  // 자식 요소 가로 정렬
    //margin: 20,
  },
  contentWrap: {
    display : 'flex',
    justifyContent: 'space-between',  // 자식들 사이에 일정 간격을 두고 배치
    flexDirection: 'row',  // 자식 요소 가로 정렬
    margin: 20,

  },
  textContainer: {
    width: 200,
    height: 250,
  },
  imageContainer: {
    width: '49%',
  },
  subtxt: {
      fontSize: 20,
  },
  miniImg: {
    width: 200,
    height: 250,
  },
  serviceButton: {
    fontSize: 30,
    color: '#fff',
  }
});

export default Home;

