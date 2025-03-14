import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import common from 'styles/commonStyles'; //공통 스타일 파일

const Counsel = () => {

    return(
        <View style={common.container}>
            <LinearGradient 
                colors={['#151B3D', '#3848A3']} style={common.gradientContainer} 
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
            >
                <View style={styles.content}>
                    <Text>상담 스크린</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
});

export default Counsel;