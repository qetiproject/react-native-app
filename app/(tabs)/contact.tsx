import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Dropdown from "../dropdown";
import { countries } from "../utils/countries";
import axios from "axios";

const formattedCountries = countries.map((c) => ({
    value: c.label,
    label: `${c.flag} ${c.label}`,
  }));
  
export default function ContactScreen() {
    const [name, setName] = useState<string>('');
    const [country, setCountry] = useState<any>({})
    const [pet, setPet] = useState<any>({})

    const onSubmit = async () => {
      if (!name || !country || !pet) {
        alert('Please fill all fields');
        return;
      }
  
      const formData = {
        name,
        country: country.value,
        pet: pet.label,
      };
  
      // try {
      //   const response = await fetch('https://your-api-endpoint.com/submit', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(formData),
      //   });
  
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log('Success:', data);
      //     alert('Form submitted successfully!');
      //   }
      // } catch (error) {
      //   console.error('Request failed', error);
      //   alert('Something went wrong!');
      // }

      try {
        const response = await axios.post('https://your-api-endpoint.com/submit', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        console.log('Success:', response.data);
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit the form');
      }
    }
    
    return (
        <View>
            <Text>Dynamic Form</Text>
            <TextInput 
                placeholder="please enter your name"
                onChangeText={setName}
                value={name}
            />
            <Dropdown 
                data={formattedCountries}
                onChange={setCountry}
                placeholder="select country"
            />
            <Dropdown 
              data ={[
                { value: "🐈", label: "🐈 un Gato" },
                { value: "🦮", label: "🦮 un Perro" },
                { value: "🐍", label: "🐍 una serpiente" },
              ]}
              onChange={setPet}
              placeholder="select pet"
            />
            <Button title="submit" onPress={onSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
      optionItem: {
        height: 40,
        justifyContent: "center",
      },
      separator: {
        height: 4,
      },
      options: {
        position: "absolute",
        // top: 53,
        backgroundColor: "white",
        width: "100%",
        padding: 10,
        borderRadius: 6,
        maxHeight: 250,
      },
      text: {
        fontSize: 15,
        opacity: 0.8,
      },
      button: {
        height: 50,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 8,
      },
})