import Header from '@/components/common/Header';
import { HomeNavigationProp, HomeScreenRouteProp } from '@/navigation/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import common from 'styles/commonStyles'; //공통 스타일 파일

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeScreenRouteProp;  // 닉네임 파라미터를 받는 route
}

//메인 홈 화면
const Home: React.FC<HomeProps> = ({ route }) => {

  const navigation = useNavigation<HomeNavigationProp>();
  const { nickname } = route.params;  // 닉네임 파라미터를 받음(테스트)
  //const { nickname } = useNickname();  // Context에서 닉네임 가져오기
  // useEffect(() => {
  //   console.log(`Loaded nickname: ${nickname}`);  // 닉네임이 잘 로드되었는지 확인
  // }, [nickname]);

  const goToCounselScreen = () => {
    console.log('마음상담 버튼 클릭');
    navigation.navigate('counselHome');
  }

  const goToDiaryScreen = () => {
    console.log('감정일기 버튼 클릭');
    //navigation.navigate('diaryHome'); //일기 페이지 이동
  }

  // 로그아웃 함수
  const signOutWithKakao = async (): Promise<void> => {
    // const message = await logout();
    // setResult(message);
    // console.log("로그아웃:", result);
    
    //AsyncStorage 토큰 삭제
    try{
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      console.log("카카오 로그아웃 완료");

      navigation.replace("login"); //로그인 페이지로 이동
    } catch (error) {
      console.log("로그아웃 오류:", error);
    }
  };

  return (
    <View style={common.container}>
        <LinearGradient 
            colors={['#151B3D', '#3848A3']} 
            style={common.gradientContainer} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }} 
        >            
          {/* 헤더 컴포넌트 */}
          <Header type="main" onLogout={signOutWithKakao} /> 
          {/* 메인 콘텐츠 내용 */}
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
            {/* 버튼 컴포넌트 분리 예정 */}
            <View style={styles.serviceContainer}>
              <ServBtnContainer>
                <TouchableOpacity onPress={goToCounselScreen} style={styles.counselBtnBox}>
                  <Text style={styles.counselButton}>마음 상담</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToDiaryScreen} style={styles.diaryBtnBox}>
                  <Text style={styles.diaryButton}>감정 일기</Text>
                </TouchableOpacity>
              </ServBtnContainer>
            </View>
            <View>
              <Text style={styles.copyRightTxt}>©2025 Mayo. All rights reserved.</Text>
              <Text style={styles.copyRightTxt}>Icons by Icons8</Text>
            </View>
          </View>
        </LinearGradient>
    </View>
  );
};

const ServBtnContainer = styled(View)` 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

const commonBtnBoxStyle: ViewStyle = { //버튼 공통 스타일
  width: "49%",
  height: 160,
  padding: 10,
  borderRadius: 10,
  paddingTop: 20,
};

const commonTextStyle: TextStyle = { //글꼴 공통 스타일
  fontSize: 30,
  fontFamily: 'Moneygraphy-Rounded',
  textAlign: 'center',
};

const styles = StyleSheet.create({
  // safeArea: {
  //   backgroundColor: "red", //영역 확인용
  // },
  // headerContainer: {
  //   height: 50, 
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // logoutBtn:{ 
  //   color: '#fff',
  //   fontFamily: 'Moneygraphy-Rounded',
  //   fontSize: 18,
  // },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  contentWrap: {
    display : 'flex',
    justifyContent: 'space-between', 
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
  serviceContainer:{
    width: '100%',
    marginBottom: 50,
  },
  counselBtnBox: {
    ...commonBtnBoxStyle, // 공통 스타일
    backgroundColor: '#E1E6FC',
  },
  diaryBtnBox:{
    ...commonBtnBoxStyle, // 공통 스타일
    backgroundColor: '#566BC7',
  },
  counselButton: { 
    ...commonTextStyle,
    color: '#566BC7',
  },
  diaryButton: {
    ...commonTextStyle,
    color: '#fff',
  },
  copyRightTxt:{
    color: '#fff',
    textAlign: 'center',
  }

});

export default Home;

