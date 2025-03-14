import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  main: undefined;
  login: undefined;
  nickname: undefined;
  home : { nickname: string };
  counselHome: undefined;
  //test : undefined;
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

// Counsel 화면의 navigation 타입 정의
export type CounselNavigationProp = StackNavigationProp<RootStackParamList, 'counselHome'>;

