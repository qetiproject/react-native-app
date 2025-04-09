import React, { useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native"
import { CommentService, DataService } from "../services/data.service";

interface Data {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string;
}

const Todos = () => {
    const [data, setData] = useState<Data[]>([])
    const [comment, setComment] = useState<Comment[]>([])

    const getDataTask = async () => {
        try {
            const response = await DataService();
            setData(response)
        }catch(error) {
            console.log(error, "error")
        }
    }

    const getComments = async () => {
       try{
        const response = await CommentService();
        setComment(response)
       }catch(error) {
        console.log(error)
       }
    }

    useEffect(() => {
        getDataTask();
        getComments();
    }, [])

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>(
                    <View>
                        <Text>{item.title} - title</Text>
                    </View>
                )}
            ></FlatList>
            <Text>Comments Data</Text>
            <FlatList
                data={comment}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.email}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.body}</Text>
                    </View>
                )}
            ></FlatList>
        </View>
    )
}

export default Todos