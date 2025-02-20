import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    backgroundColor: string; // 배경 색상
    textColor: string;       // 글자 색상
    buttonStyle?: ViewStyle;  // 버튼 스타일 (선택 사항)
    textStyle?: TextStyle;    // 텍스트 스타일 (선택 사항)
  }
  
  const CustomButton: React.FC<CustomButtonProps> = ({
    onPress,
    title,
    backgroundColor,
    textColor,
    buttonStyle, // 추가 버튼 스타일
    textStyle,   // 추가 텍스트 스타일
  }) => {
    return (
      <TouchableOpacity 
        style={[styles.button, { backgroundColor }, buttonStyle]}  // 기본 스타일 + 전달된 스타일
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }, textStyle]}>{title}</Text> 
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  button: {
    //backgroundColor: '#007BFF',
    width: 280,
    height: 40,
    //padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    //position: 'absolute',
    //bottom: 100,
  },
  buttonText: {
    //color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    fontFamily: 'Moneygraphy-Rounded',
  },
});

export default CustomButton;