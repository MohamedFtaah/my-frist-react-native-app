import { SafeAreaView, Text, TextInput, View, input } from 'react-native';
import globalStyle from '../../style/globalStyle';
import React, { useState } from 'react';

export default function NavBar() {
    const [text, setText] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View >
                <TextInput
                    style={{

                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    placeholder="Change youssr name"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />

            </View>
        </SafeAreaView>

    );
}
