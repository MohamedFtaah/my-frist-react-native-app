import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../tedux/slices/teastSlice';
export default function Teast({ navigation }) {
    const [text, setText] = useState('');
    const message = useSelector((state) => state.messageData.message);
    const dispatch = useDispatch();


    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} onPress={() => {
                if (text !== '') { dispatch(setMessage(text)) } else { null }
            }
            } >

                <Text style={styles.text}>{message}dd </Text>
            </TouchableOpacity>
            <StatusBar style="light" />
            <View>
                <TextInput
                    style={{ height: 40, backgroundColor: '#fff' }}
                    placeholder="Change your name"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(4, 5, 5)',
        alignItems: 'center',
        justifyContent: 'center',
    }, text: {
        color: '#fff',
        fontSize: 25,

    }, button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});
