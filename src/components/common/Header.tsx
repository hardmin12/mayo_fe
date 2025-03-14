import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  type: "main" | "back"; // main: 로그아웃 버튼 포함, back: 뒤로 가기 버튼 포함
  title?: string; // 현재 페이지 제목 (back 타입일 때 사용)
  onLogout?: () => void; // main 타입일 때 사용
}

const Header: React.FC<HeaderProps> = ({ type, title, onLogout }) => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {type === "main" ? (
          <>
            <Text style={styles.headerTitle}>Logo</Text>
            <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
              <Text style={styles.logoutText}>로그아웃</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>  {/* 진행중 */}
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
    // backgroundColor: "yellow", // 헤더 배경색 유지
  },
  headerContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    height: 60,
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#fff',
    fontFamily: 'Moneygraphy-Rounded',
    fontSize: 18,
  },
  backButton: {
    padding: 8,
  },
  backArrow: {
    fontSize: 24,
    color: "white",
  },

});

export default Header;