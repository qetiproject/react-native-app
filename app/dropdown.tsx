import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, {  useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./dropdown-styles";

type OptionItem = {
    value: string;
    label: string;
  };
  
  interface DropDownProps {
    data: OptionItem[];
    onChange: (item: OptionItem) => void;
    placeholder: string;
  }
  
export default function Dropdown({
    data,
    onChange,
    placeholder,
  }: DropDownProps) {
    const [expanded, setIsExpanded] = useState<boolean>(false);
    const [selectedValue, setValue] = useState<string>('');

    const handleToggle = () => setIsExpanded((prev) => !prev);

    const handleSelect = (item: OptionItem) => {
        onChange(item);
        setValue(item.label);
        setIsExpanded(false);
    };
    
    const renderItem = ({ item }: { item: OptionItem }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSelect(item)}
        >
            <Text>{item.label}</Text>
        </TouchableOpacity>
    )
    return (
        <View>
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.8}
                onPress={handleToggle}
            >
                 <Text style={styles.text}>{selectedValue || placeholder}</Text>
                <AntDesign name={expanded ? "caretup" : "caretdown"}/>
            </TouchableOpacity>

            { expanded ? (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.value}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                />
            )  : null}
        </View>
    )
  }