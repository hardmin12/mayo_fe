import 'styled-components';

//기본 테마 인터페이스에 새로운 속성을 추가하기 위한 styled-components의 기존 타입을 확장 
declare module 'styled-components' {
  export interface DefaultTheme {
    //수정 필요
    mainBlue: string;
    mainDarkGrey: string;
    mainLightGrey: string;
    mainRed: string;

    fontLarge: number;
    fontMedium: number;
    fontRegular: number;
    fontSmall: number;

    weightBold: number;
    weightMedium: number;
    weightRegular: number;

    lineHeightRegular: number;
    lineHeightMicro: number;
  }
}