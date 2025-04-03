import CustomButton from '@/components/common/CustomButton';
import Header from '@/components/common/Header';
import { useResponsive } from '@/hooks/useResponsive';
import { CounselCallNavigationProp, CounselCallScreenRouteProp } from '@/navigation/navigationTypes';
import React from 'react';
import { Image, StyleSheet, Text, View, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import common from 'styles/commonStyles';

interface CounselCallProps {
  navigation: CounselCallNavigationProp;
  route: CounselCallScreenRouteProp;
}

interface BubbleProps extends ViewProps{
    isSmallScreen: boolean;
}

// AI 음성 통화
const CounselCall : React.FC<CounselCallProps> = ({navigation, route}) => {

    const { isSmallScreen } = useResponsive();
    const { nickname } = route.params; 

    const goStopCouncel = () => {
        navigation.navigate("counselEnd",  { nickname: nickname });
    };

    return (
        <View style={common.container}>
            <LinearGradient 
                colors={['#151B3D', '#3848A3']} 
                style={common.gradientContainer} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 0, y: 1 }} 
            >
                <Header type="back" title="마음 상담" /> 
                <View style={styles.content}>
                    <TextContainer> 
                        <Text style={[common.desText, styles.fontStyle ,{paddingBottom:10}]}>
                            대화를 시작했어요!
                        </Text>
                        <Text style={[common.desText, styles.fontStyle]}>
                          <Text style={common.highlight_yellow}>{nickname}</Text>
                          의 이야기를 들려주세요.
                          </Text>
                    </TextContainer>
                    <ImageContainer>
                        <Image 
                            source={require('@assets/images/motion1.gif')}
                            style={styles.imgSize}
                        />
                    </ImageContainer>
                    <ButtonContainer isSmallScreen={isSmallScreen}>
                        <CustomButton 
                            title="대화 종료" 
                            onPress={() => goStopCouncel()}
                            backgroundColor="#C2CEFF"
                            textColor="#3848A3"
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
export default CounselCall
