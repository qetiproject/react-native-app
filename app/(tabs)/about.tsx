import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default function AboutScreen() {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<{name: string, age: string}[]>([]);
  const [age, setAge] = useState<string>('')

  const onSubmitHandler = () => {
    if(!name) {
      setError("name is required")
    }

    if(!age) {
      setError("age is required")
    }

    setData(prevData => [...prevData, {name, age}])

  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Data</Text>
      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder='please enter name'
      />
      <TextInput 
        value={age}
        onChangeText={setAge}
        placeholder='please enter age'
        keyboardType='numeric'
      />
      <Button title='submit' onPress={onSubmitHandler}/>

      <FlatList 
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
         <View style={styles.flex}>
           <Text style={{padding: 3}}>{item.name}</Text>
           <Text>{item.age}</Text>
         </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
  },
  flex: {
    flexDirection: 'row',
  }
});
