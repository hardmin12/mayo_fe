import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const WriteNickName = () => {
    //닉네임 결정 버튼 클릭
  const handleNickName = () => {
    console.log('닉네임 결정 버튼 클릭');
    

  };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>닉네임을 정해주세요.</Text>
        <TextInput
              placeholder="닉네임을 입력해주세요."
              style={styles.input}
        />
        <Button title="결정!" onPress={handleNickName} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'solid',
        padding: 10,
    },
  });
export default WriteNickName;