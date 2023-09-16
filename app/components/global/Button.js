import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Button({ title, onPress, color = '#9693e2', textColor = '#fff' }) {




    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: color, ...styles.button }} onPress={onPress} >

                <Text style={{ color: textColor, ...styles.text }}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({


    button: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 5,
        marginVertical: 10,
    }, text: {

        fontSize: 25,
    }
})
