import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ secureTextEntry, onChangeText, value, placeholder, title }) {




    return (
        <View style={styles.cont}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.Input}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChangeText}
                defaultValue={value}
            >

            </TextInput>
        </View>
    );
}
const styles = StyleSheet.create({

    text: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 5,
        flex: 2
    }, Input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 20
    }, cont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    }
})
