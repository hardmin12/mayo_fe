import { FooterNavigationProp, RootStackParamList } from '@/navigation/navigationTypes';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import ServiceModal from '@/components/common/ServiceModal';

interface FooterItemsType {
    key: string;
    screen: keyof RootStackParamList; 
    label: string;
    icon: ImageSourcePropType;
}

interface FooterProps {
    nickname?: string; // 닉네임을 전달 받는 경우
}

const footerItems: FooterItemsType[] = [
    { key: "myDiary", screen: "myDiary", label: "일기장", icon: require("@assets/images/icon/footer-icon/footer_pencil.png") },
    { key: "home", screen: "home", label: "홈", icon: require("@assets/images/icon/footer-icon/footer_home.png") },
    { key: "counselLog", screen: "counselLog", label: "상담일지", icon: require("@assets/images/icon/footer-icon/footer_bubble.png") },
];

const Footer: React.FC<FooterProps> = ({nickname}) => {
    
    const navigation = useNavigation<FooterNavigationProp>(); 
    const [modalVisible, setModalVisible] = useState(false);
    // const [nickname, setNickname] = useState<string | null>(null);

    // Context API로 닉네임 호출 로직 추가 예정
    console.log("nickname 확인:", nickname); 
    
    const handlePress = (screen: keyof RootStackParamList) => {
        if (screen === "myDiary" || screen === "counselLog") {
            setModalVisible(true);
        } else if (screen === "home") {
            navigation.navigate(screen, { nickname: "사용자 닉네임" }); // 필요 시 params 전달
        } else {
            navigation.navigate(screen as keyof RootStackParamList, undefined as never); // params가 필요 없는 경우
        }
    };

  return (
    <>
        <SafeFooter>
            <FooterContainer>
                <View style={styles.footerContainer}>
                {footerItems.map((item: FooterItemsType) => (  
                    <TouchableOpacity 
                        key={item.screen} 
                        onPress={() =>  handlePress(item.screen)}
                    >
                        <Image source={item.icon} style={{width:30, height:30}}/>
                        <Text style={styles.footerName}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            </FooterContainer>
        </SafeFooter>

        <ServiceModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </>

  );
};

const SafeFooter = styled(SafeAreaView)`
  background-color: "red";
  padding-bottom: 20px; 
`;
const FooterContainer = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  align-items: center;
`;

const styles = StyleSheet.create({
    footerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        paddingHorizontal: 50,
    },
    footerName:{
        color: "#fff",
        fontFamily: "Moneygraphy-Rounded",
        fontSize: 12,
        textAlign: "center",
        paddingTop: 10,
    }
});


export default Footer;
