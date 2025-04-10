import React, { useCallback, useState } from "react";
import { TouchableOpacity, Text, FlatList, View } from "react-native";
import { styles } from "./dropdown-styles";

interface DropdownData {
  label: string;
  value: string;
}

interface IDropdownField {
  data: DropdownData[];
  onChange: (value: string) => void;
}

const Dropdown: React.FC<IDropdownField> = React.memo(({data, onChange}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleToggle = useCallback(() => {
        setIsExpanded((prev) => !prev)
    }, []) 

    const handleSelect = useCallback((item: DropdownData) => {
        setSelectedValue(item.label);
        setIsExpanded(false);
        onChange(item.value); 
    }, [onChange]) // onchange ცვლილებისას გაეშვება

    const renderItem = ({item}: {item: DropdownData}) => {
       return (
        <TouchableOpacity onPress={() => handleSelect(item)} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>{item.label}</Text>
        </TouchableOpacity>
       )
    }

    return (
       <View>
         <TouchableOpacity
            style={styles.touch}
            onPress={handleToggle}
        >
            <Text>{selectedValue || "select an option"}</Text>
        </TouchableOpacity>
        { isExpanded ?(
            <FlatList 
                data={data}
                keyExtractor={item => item.value}
                renderItem={renderItem}
            />
        ) : null}
       </View>
    )
})

export default Dropdown

