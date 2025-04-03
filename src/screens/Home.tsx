import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useResponsive } from '@/hooks/useResponsive';
import { HomeNavigationProp, HomeScreenRouteProp } from '@/navigation/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import common from 'styles/commonStyles'; 

interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeScreenRouteProp;  // 닉네임 파라미터를 받는 route
}

//메인 홈 화면
const Home: React.FC<HomeProps> = ({ route }) => {

  const { isSmallScreen } = useResponsive();

  const navigation = useNavigation<HomeNavigationProp>();
  const { nickname } = route.params;  // 닉네임 파라미터를 받음(테스트)
  //const { nickname } = useNickname();  // Context에서 닉네임 가져오기
  // useEffect(() => {
  //   console.log(`Loaded nickname: ${nickname}`);  // 닉네임이 잘 로드되었는지 확인
  // }, [nickname]);

  const goToCounselScreen = () => {
    console.log('마음상담 버튼 클릭');
    navigation.navigate('counselHome', { nickname: nickname });
  }

  const goToDiaryScreen = () => {
    console.log('감정일기 버튼 클릭');
    //navigation.navigate('diaryHome'); //일기 페이지 이동
  }

  // 로그아웃 함수
  const signOutWithKakao = async (): Promise<void> => {
    try{
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      console.log("카카오 로그아웃 완료!");
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
          <Header type="main" onLogout={signOutWithKakao} /> 
          {/* 메인 콘텐츠 */}
          <View style={styles.content}>
            <View style={[styles.contentWrap, isSmallScreen && styles.small_contentWrap]}>
              <View style={isSmallScreen ? styles.small_textContainer : styles.textContainer}>
                <Text style={isSmallScreen ? common.small_desText : common.desText}>
                  <Text style={common.highlight_yellow}>{nickname}, </Text>
                  <Text style={isSmallScreen ? common.small_desText : common.desText}>반가워!</Text>
                </Text>
                <Text style={isSmallScreen ? common.small_desText : common.desText}>나는 마음 요정 토리미야</Text>
                <Text style={isSmallScreen ? common.small_desText : common.desText}>마요에 온 것을 환영해!</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image 
                  source={require('@assets/images/hello_left.gif')}
                  style={isSmallScreen ? styles.small_miniImg: styles.miniImg}
                />
              </View>
            </View>
            {/* 버튼 컴포넌트 분리 예정 */}
            <View style={[styles.serviceContainer, isSmallScreen && styles.small_serviceContainer]}>
              <ServBtnContainer>
                <TouchableOpacity onPress={goToCounselScreen} style={styles.counselBtnBox}>
                  <Text style={styles.counselButton}>마음 상담</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToDiaryScreen} style={styles.diaryBtnBox}>
                  <Text style={styles.diaryButton}>감정 일기</Text>
                </TouchableOpacity>
              </ServBtnContainer>
              <View style={{marginTop:20}}>
                <Text style={isSmallScreen ? styles.small_copyRightTxt : styles.copyRightTxt}>©2025 Mayo. All rights reserved.</Text>
                <Text style={isSmallScreen ? styles.small_copyRightTxt : styles.copyRightTxt}>Icons by Icons8</Text>
              </View>
            </View>
          </View>
           <Footer nickname={nickname} />
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
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  contentWrap: {
    display : 'flex',
    justifyContent: 'space-between', 
    flexDirection: 'row',  
    margin: 20,
    position: 'absolute',
    top: 50, 
  },
  small_contentWrap: {
    top: 30, 
  },
  textContainer: {
    width: 200,
    height: 250,
  },
  small_textContainer: {
    width: 180,
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
  small_miniImg: {
    width: 180,
    height: 230,
  },
  serviceContainer:{
    width: '100%',
    marginTop: 250,
  },
  small_serviceContainer: {
    marginTop: 200,
  },
  counselBtnBox: {
    ...commonBtnBoxStyle, 
    backgroundColor: '#E1E6FC',
  },
  diaryBtnBox:{
    ...commonBtnBoxStyle, 
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
  },
  small_copyRightTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  }

});

export default Home;

