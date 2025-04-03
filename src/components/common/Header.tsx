import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  type: "main" | "back"; // main: 홈, back: 서비스 화면
  title?: string; 
  onLogout?: () => void; 
}

const Header: React.FC<HeaderProps> = ({ type, title, onLogout }) => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {type === "main" ? (
          <>
            <Text style={styles.headerLogo}>Logo</Text>
            <View style={styles.headerRightWrap}>
              <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>로그아웃</Text>
              </TouchableOpacity>
              <Image
                source={require('@assets/images/icon/icon_notifications.png')}
                style={{width:25, height:25}}
                />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backArrow}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // 필요시 위치 조정 추가
  },
  headerContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    position: 'relative',
  },
  headerRightWrap: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerLogo: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    left: "47%", 
    
  },
  logoutButton: {
    paddingRight: 10,
  },
  logoutText: {
    color: '#C2CEFF',
    fontFamily: 'Moneygraphy-Rounded',
    fontSize: 18,
    padding: 0,
  },
  backButton: {
    padding: 8,
    position: "absolute",
    left: 10,
  },
  backArrow: {
    fontSize: 24,
    color: "white",
  },

});

export default Header;