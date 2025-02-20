import CustomButton from '@/components/common/CustomButton';
// import { useNickname } from '@/context/NickNameContext';
import { NicknameScreenNavigationProp, NicknameScreenRouteProp } from '@/navigation/navigationTypes';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일

interface NicknameProps {
  navigation: NicknameScreenNavigationProp;
  route: NicknameScreenRouteProp;  // userId 파라미터를 받는 route
}
//닉네임 설정 화면은 최초 로그인 시에만 나타남  - 로그인 구현 후 진행 
//로그인 후 최초 1회만 닉네임 지정 : Context API, AsyncStorage
const NickName: React.FC<NicknameProps> = ({ navigation , route }) => {
  const { userId } = route.params; //회원 아이디(확인용)
  console.log(userId);
  
  const [testname, setTestname] = useState<string>(''); //테스트

  /*
  const { setNickname } = useNickname(); // Context에서 setNickname 가져오기
  const [nickname, setNicknameInput] = useState<string>('');  // 로컬 상태
  const [myNickname, setMyNickname] = useState<string>(''); 
  */

  const handleNickName = () => {
    //console.log('닉네임 결정 버튼 클릭');
    /*
    if (nickname.trim( )) {
    //1.닉네임 저장
    setNickname(nickname); //Context에 닉네임 저장
    //2.페이지 이동
    //console.log(`닉네임 저장: ${nickname}`);
    navigation.replace('home');
    */

    if (testname.trim()) {
      // 1. 입력된 닉네임을 홈 화면으로 넘겨주기
      navigation.replace('home', { nickname: testname }); // 홈 화면으로 닉네임을 넘김
    } else {
      console.log('닉네임을 입력해주세요!');
    }
  };

  return (
    <View style={common.container}>
      <LinearGradient 
        colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
      >
        <View style={styles.content}>
          <Text style={[common.desText, styles.text, {paddingBottom:10}]}>마요에 온 것을 환영해요!</Text>
          <Text style={[common.desText, styles.text]}>
            사용할 <Text style={common.highlight_yellow}>닉네임</Text>을 정해주세요.
          </Text>
          <TextInput
                placeholder="닉네임을 입력해주세요."
                autoCapitalize="none" //자동 대문자 방지
                style={styles.nicknameInput}
                value={testname} // 입력된 닉네임 상태에 저장
                onChangeText={setTestname} // 입력값을 상태에 반영
          />
          <CustomButton 
          title="결정✨" 
          onPress={handleNickName}
          backgroundColor="#fff"  // 버튼 색상 커스텀
          textColor="#3848A3"     // 글자 색상 커스텀
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    content:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#E1E6FC',
    },
    text: {
      letterSpacing: 1.5,
    },
    nicknameInput: {
        borderRadius: 5,
        borderStyle: 'solid',
        padding: 10,
        marginTop: 20,
        width: 280,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: '#eee',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontFamily: 'Moneygraphy-Rounded',
    },
  });
export default NickName;