import CustomButton from '@/components/common/CustomButton'
import Header from '@/components/common/Header'
import { useResponsive } from '@/hooks/useResponsive'
import { CounselEndNavigationProp, CounselEndScreenRouteProp } from '@/navigation/navigationTypes'
import React from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components'
import common from 'styles/commonStyles'; 

interface CounselEndProps {
  navigation: CounselEndNavigationProp;
  route: CounselEndScreenRouteProp;  
}

interface SmallScreenProps extends ViewProps{
    isSmallScreen: boolean;
}

const CounselEnd : React.FC<CounselEndProps> = ({navigation, route}) => {

    const { isSmallScreen} = useResponsive();
    const { nickname } = route.params; 

    const goToCouncelLog = () => {
        navigation.navigate("counselLog");
    };

    return (
        <View style={common.container}>
            <LinearGradient 
                colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
            >
                <Header type="back" title="마음 상담" /> 
                <View style={styles.content}>
                    <TextContainer> 
                        <Text style={[common.desText, styles.fontStyle ,{paddingBottom:20}]}>
                            상담 종료
                        </Text>
                        <Text
                            style={[common.desText,
                            isSmallScreen? styles.fontSmallStyle : styles.fontMiddleStyle,
                            {paddingBottom:10, lineHeight:25, letterSpacing:1.2}]}
                        >
                            <Text style={common.highlight_purple}>토리미</Text>와 대화한 내용은{"\n"}
                            <Text style={common.highlight_purple}>상담 일지</Text>에서 확인할 수 있어요!
                        </Text>
                    </TextContainer>
                    <BubbleContainer isSmallScreen={isSmallScreen}>
                        <BubbleText>
                            <Text style={[common.desText, styles.fontMiddleStyle, common.highlight_purple]}>
                                <Text>
                                    상담 시간 <Text style={{color:"#E1E6FC"}}>4분</Text>
                                </Text>
                                {"\n"}
                                <Text>
                                    상담 날짜 <Text style={{color:"#E1E6FC"}}>2025년 03월 21일</Text>
                                </Text>
                                {"\n"}
                                <Text>
                                    상담자 <Text style={{color:"#E1E6FC"}}>토리미</Text> 
                                </Text>
                                {"\n"}
                                <Text>
                                    내담자 <Text style={{color:"#E1E6FC"}}>{nickname}</Text>
                                </Text>
                            </Text>
                        </BubbleText>
                    </BubbleContainer>
                    <ButtonContainer isSmallScreen={isSmallScreen}>
                        <CustomButton 
                            title="나의 상담 일지" 
                            onPress={() => goToCouncelLog()}
                            backgroundColor="#566BC7"
                            textColor="#fff"
                        />
                    </ButtonContainer>
                </View>
            </LinearGradient>
        </View>
    );
};

const BubbleContainer = styled(View)<SmallScreenProps>`
    position: absolute;
    top: 50%;
    top: ${({ isSmallScreen }) => (isSmallScreen ? '50%' : '45%')};
    transform: translateY(-75px);
    background-color:  rgba(86, 107, 199, 0.3);
    width: 90%;
    height: 200px;
    border-radius: 20px;
`;
const BubbleText = styled(Text)`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 10px 0;
`;
const TextContainer = styled(View)`
    position: absolute;
    top: 50px;
    width: 100%; 
    height: 80px;
    align-items: center; 
`;
const ButtonContainer = styled(View)<SmallScreenProps>`
    position: absolute;
    bottom: ${({ isSmallScreen }) => (isSmallScreen ? '5%' : '10%')};
    width: 90%;
`;
const styles = StyleSheet.create({
    content:{
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      fontStyle:{
        fontSize: 35,
        textAlign: "center",
        color: "#fff",
      },
      fontMiddleStyle:{
        fontSize: 20,
        textAlign: "center",
        lineHeight: 40,
      },
      fontSmallStyle:{
        fontSize: 18,
        textAlign: "center",
      },
      imgSize:{
        width: 400,
        height: 400,
      },
});
export default CounselEnd
