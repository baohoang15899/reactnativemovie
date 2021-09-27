import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { darkMode, lightMode } from './style';

export default function LinearBtn({ btn, onPress }) {
    return (
        <View style={darkMode.btn}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.1 }}
                style={{ borderRadius: 10 }}
                colors={['#db3445', '#ff7878']}>
                <Text
                    onPress={onPress}
                    style={{
                        padding: 15,
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 18,
                    }}>
                    {btn}
                </Text>
            </LinearGradient>
        </View>
    );
}
