import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../tedux/slices/teastSlice';
import Button from '../components/global/Button';
export default function Home({ navigation }) {
    const [text, setText] = useState('');
    const message = useSelector((state) => state.messageData.message);
    const dispatch = useDispatch();
    const onPress = () => {
        if (text !== '') { dispatch(setMessage(text)) } else { null }
        setTimeout(() => { navigation.navigate('Teast') }, 3000)
    }

    return (
        <View style={styles.container} >
            <Button title={message} onPress={onPress} color='#ff8800' ></Button>



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
