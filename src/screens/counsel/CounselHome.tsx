import CustomButton from '@/components/common/CustomButton';
import Header from '@/components/common/Header';
import { useResponsive } from '@/hooks/useResponsive';
import { CounselHomeNavigationProp, CounselHomeScreenRouteProp } from '@/navigation/navigationTypes';
import React from 'react';
import { Image, StyleSheet, Text, View, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import common from 'styles/commonStyles'; 

interface CounselHomeProps {
  navigation: CounselHomeNavigationProp;
  route: CounselHomeScreenRouteProp;  // 닉네임
}

interface BubbleProps extends ViewProps{
    isSmallScreen: boolean;
}

const CounselHome : React.FC<CounselHomeProps> = ({ navigation, route }) => {
    
    const { isSmallScreen } = useResponsive();
    const { nickname } = route.params; 

    const goStartCounsel = () => {
        console.log("상담하기 버튼 클릭");
        navigation.navigate('counselCall', { nickname: nickname });
    };

    return(
        <View style={common.container}>
            <LinearGradient 
                colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
            >
                <Header type="back" title="마음 상담" /> 
                <View style={styles.content}>
                    <TextContainer> 
                        <Text style={[common.desText, styles.fontStyle ,{paddingBottom:10}]}>
                            <Text style={common.highlight_purple}>토리미</Text>와 함께하는 따뜻한 대화,
                        </Text>
                        <Text style={[common.desText, styles.fontStyle]}>상담을 시작해볼까요?</Text>
                    </TextContainer>
                    <MessageBubble isSmallScreen={isSmallScreen}>
                        <BubbleText>
                            <Text style={common.smallDesText}>
                                <Text>
                                    어서와 <Text style={common.highlight_yellow}>{nickname}!</Text>
                                </Text>
                                {"\n"}
                                <Text style={common.smallDesText}>나와 하고 싶은 이야기가 있어?</Text>
                            </Text>
                        </BubbleText>
                    </MessageBubble>
                    <ImageContainer>
                        <Image 
                            source={require('@assets/images/motion1.gif')}
                            style={styles.imgSize}
                        />
                    </ImageContainer>
                    <ButtonContainer isSmallScreen={isSmallScreen}>
                        <CustomButton 
                            title="대화 하기" 
                            onPress={goStartCounsel}
                            backgroundColor="#566BC7" 
                            textColor="#fff"    
                        />
                    </ButtonContainer>
                </View>
            </LinearGradient>
        </View>
    );
};
const TextContainer = styled(View)`
    position: absolute;
    top: 50px;
    width: 100%; 
    align-items: center; 
`;
const MessageBubble = styled(View)<BubbleProps>`
    position: relative;
    top: ${({ isSmallScreen }) => (isSmallScreen ? '90px' : '50px')};
    background-color: rgba(86,107,199,0.3);
    width: 75%;
    height: 80px;
    border-radius: 20px;
    padding: 20px 0;
`;
const BubbleText = styled(Text)`
    text-align: center;
    width: 100%;
`
const ImageContainer = styled(View)`
    margin-top: 50px;    
`;
const ButtonContainer = styled(View)<BubbleProps>`
    position: absolute;
    bottom: ${({ isSmallScreen }) => (isSmallScreen ? '5%' : '10%')};
    width: 90%;
`;
const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      fontStyle:{
        fontSize: 24,
      },
      imgSize:{
        width: 400,
        height: 400,
      },
});

export default CounselHome;