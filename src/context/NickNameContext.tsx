import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";

/*전역 상태 관리*/

//타입 정의
interface NicknameContextType { 
    nickname: string;
    setNickname: (nickname: string) => void;
    //loadNickname: () => void;  // 앱 실행 시 닉네임 로드 함수
  }
  
const NicknameContext = createContext<NicknameContextType | undefined>(undefined);

// children의 타입을 ReactNode로 설정(ReactNode는 React 요소, 문자열, 숫자 등 모든 타입의 자식 요소)
export const NickNameProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const [nickname, setNicknameState] = useState<string>(''); 

  //닉네임 저장, 상태 업데이트
  const setNickname = async (newNickname: string) => {
    try {
      await AsyncStorage.setItem('nickname', newNickname); //로컬 저장소에 저장
      setNicknameState(newNickname); //업데이트
    }catch (error) {
      console.error('Error saving nickname from AsyncStorage:', error);
    }
  };
/*
  // 닉네임을 불러오는 함수
  const loadNickname = async () => {
    try {
      const savedNickname = await AsyncStorage.getItem('nickname');
      if (savedNickname) {
        setNicknameState(savedNickname);  // 저장된 닉네임이 있으면 상태에 반영
      }
    } catch (error) {
      console.error('Error loading nickname from AsyncStorage:', error);
    }
  }
*/
  
  //로컬 저장소(AsyncStorage)에서 닉네임을 불러오는 함수
/*
  const loadNickname = async () => {
    try {
      const savedNickname = await AsyncStorage.getItem('nickname');
      //AsyncStorage null 처리
      if(savedNickname){
        setNicknameState(savedNickname); //저장된 닉네임 있으면 상태에 업데이트
      }else{
        setNicknameState(''); // 없으면 빈 문자열로 초기화
      }
    }catch (error) {
      console.error('Error loading nickname from AsyncStorage:', error);
      setNicknameState(''); // 에러가 발생하면 빈 문자열로 초기화
    }
    // finally {
    //   setLoading(false);  // 데이터 로딩 완료
    // }
    
  };
 
  //앱 실행 시 닉네임 호출
  useEffect(()=>{
    loadNickname();
  },[]);
 */
  
  
  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children} {/* children은 다른 컴포넌트들이 이 Provider로 감싸질 때 전달된 요소들 */}
    </NicknameContext.Provider>
  );
};

// useNickname은 Context에서 닉네임을 가져오는 hook
export const useNickname = (): NicknameContextType => {
  const context = useContext(NicknameContext);
  if (!context) {
    throw new Error('useNickname must be used within a NicknameProvider');
  }
  return context;
};

