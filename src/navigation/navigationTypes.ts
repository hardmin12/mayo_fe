import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  main: undefined;
  login: undefined;
  nickname: undefined;
  home : { nickname: string };
  counselHome: { nickname: string };
  counselCall : { nickname: string };
  counselEnd : { nickname: string };
  counselLog : undefined;  //상담일지
  myDiary : undefined; //컴포넌트 생성 예정
};

// Main 화면의 navigation 타입 정의
export type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'main'>;

// Login 화면의 navigation 타입 정의
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'login'>;

// Nickname 화면의 navigation 타입 정의
export type NicknameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'nickname'>;

// Nickname 화면의 route 타입 정의
export type NicknameScreenRouteProp = RouteProp<RootStackParamList, 'nickname'>;

// Home 화면의 navigation 타입 정의
export type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'home'>;

// Home 화면의 route 타입 정의
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'home'>;

// CounselHome 화면의 navigation 타입 정의
export type CounselHomeNavigationProp = StackNavigationProp<RootStackParamList, 'counselHome'>;

// CounselHome 화면의 route 타입 정의
export type CounselHomeScreenRouteProp = RouteProp<RootStackParamList, 'counselHome'>;

// CounselCall 화면의 navigation 타입 정의
export type CounselCallNavigationProp = StackNavigationProp<RootStackParamList, 'counselCall'>;

// CounselCall 화면의 route 타입 정의
export type CounselCallScreenRouteProp = RouteProp<RootStackParamList, 'counselCall'>;

// CounselEnd 화면의 navigation 타입 정의
export type CounselEndNavigationProp = StackNavigationProp<RootStackParamList, 'counselEnd'>;

// CounselEnd 화면의 route 타입 정의
export type CounselEndScreenRouteProp = RouteProp<RootStackParamList, 'counselEnd'>;

// CounselLog 화면의 navigation 타입 정의
export type CounselLogNavigationProp = StackNavigationProp<RootStackParamList, 'counselLog'>;

// CounselLog 화면의 route 타입 정의
export type CounselLogScreenRouteProp = RouteProp<RootStackParamList, 'counselLog'>;

// Footer navigation 타입 정의
export type FooterNavigationProp = StackNavigationProp<RootStackParamList>;

// Footer route 타입 정의
export type FooterRouteProp = RouteProp<RootStackParamList, keyof RootStackParamList>;