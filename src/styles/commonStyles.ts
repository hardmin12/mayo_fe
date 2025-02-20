import { StyleSheet } from 'react-native';

//공통 스타일 파일 분리
const commonStyles = StyleSheet.create({
    gradientContainer: { //그라데이션 배경 컨테이너
        flex: 1, // 전체 화면을 차지하도록 설정
        position: 'absolute', // 배경을 화면 전체에 고정
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    desText: { //설명 텍스트
        color: '#E1E6FC',
        fontSize: 20,
        fontFamily: 'Moneygraphy-Rounded',
    },
    highlight_yellow: { //하이라이트 텍스트 색상 - 노랑
        color: '#FFF7A1',
    },
    highlight_purple: { //하이라이트 텍스트 색상 - 보라
        color: '#C2CEFF',
    },
});


export default commonStyles;