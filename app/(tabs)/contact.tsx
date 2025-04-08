import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function ContactScreen() {
    const [name, setName] = useState<string>('');

    return (
        <View>
            <Text>Dynamic Form</Text>
            <TextInput 
                placeholder="please enter your name"
                onChangeText={setName}
                value={name}
            />
        </View>
    )
}