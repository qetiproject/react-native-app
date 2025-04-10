import React from "react";
import { KeyboardTypeOptions, TextInput, StyleSheet } from "react-native";

interface IInputField {
    data: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions; 
    secureTextEntry?: boolean;
    styles?: any;
}
const InputField: React.FC<IInputField> = React.memo(props => {
    return (
        <TextInput 
            value={props.data}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            style={[styles.input, props.styles]}
        />
    )
})

export default InputField

const styles = StyleSheet.create({
    input: {
        fontSize: 13,
        paddingVertical: 10,
        paddingHorizontal: 15,  
        borderBottomColor: "#ccc",  
        borderBottomWidth: 1,  
        marginVertical: 5
    }
})