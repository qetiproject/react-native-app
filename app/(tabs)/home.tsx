import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../inputField";
import Dropdown from "../dropdown";
import { GetUsers } from "../data.service";

interface UserInfo {
    firstname: string, 
    lastname: string, 
    age: number, 
    gender: string, 
    privateNumber: string;
}

const Home = () => {
    const [firstname, setFirstname] = useState<string>('');
    const [privateNumber, setPrivateNumber] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [userInfo, setUserInfo]= useState<UserInfo[]>([]);

    const genders = [
        {label: "Female", value: "female"},
        { label: "Male", value: "male"}
    ]

    const getUsers = async () => {
        try {
            const response = await GetUsers();
            setUserInfo(response)
        }catch(error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getUsers
    }, [])
    
    const onSubmitHandler = () => {
        if(!firstname || ! lastname || !age || !gender || !password || !privateNumber) {
            setError("please enter all fields");
            return;
        }

        const data: UserInfo = {
            firstname, 
            lastname, 
            age: +age, 
            gender,
            privateNumber
        }

        setUserInfo((prevState) => {
            const updatedUserInfo = [...prevState, data];
            return updatedUserInfo;
        });

        console.log(userInfo)
        setFirstname('')
        setLastname('')
        setGender('')
        setAge('')
        setPassword('')
        setPrivateNumber('')
        setError('')
    }

    const renderUserInfo = (({ item }: {item: UserInfo}) => (
        <View style={{ marginVertical: 10 }}>
            <Text>First Name: {item.firstname}</Text>
            <Text>Last Name: {item.lastname}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Private Number: {item.privateNumber}</Text>
        </View>
    ))

    return (
        <SafeAreaView>
            <View>
                <Text>Home Page</Text>
                <Text>{error}</Text>
                <InputField 
                    data={firstname}
                    onChangeText={setFirstname}
                    placeholder="please enter your firstname"
                />
                <InputField 
                    data={lastname}
                    onChangeText={setLastname}
                    placeholder="please enter your lastname"
                />
                <InputField 
                    data={age}
                    onChangeText={setAge}
                    placeholder="please enter your age"
                    keyboardType="numeric"
                />
                <InputField 
                    data={password}
                    onChangeText={setPassword}
                    placeholder="please enter your password"
                    secureTextEntry={true}
                />
                <InputField 
                    data={privateNumber}
                    onChangeText={setPrivateNumber}
                    placeholder="please enter your privateNumber"
                />
                <Dropdown 
                    data={genders}
                    onChange={setGender}
                />
                <Button title="submit" onPress={onSubmitHandler}/>

                { userInfo.length > 0 ? (
                    <View>
                        <Text>Users:</Text>
                        <FlatList
                                data={userInfo}
                                keyExtractor={item => item.privateNumber}
                                renderItem={renderUserInfo}
                        />
                    </View>
                ) : "No Data"}
            </View>
        </SafeAreaView>
    )
}

export default Home