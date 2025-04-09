import React, { useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native"
import { CommentService, DataService } from "../services/data.service";
import Comments from "../comments";

const Todos = () => {
    const [comment, setComment] = useState<any>({})

    const getComments = async () => {
       try{
        const response = await CommentService();
        setComment(response)
       }catch(error) {
        console.log(error)
       }
    }

    useEffect(() => {
        getComments();
    }, [])

    return (
        <View>
            <Text>Comments Data</Text>
            <Comments data={comment} />
        </View>
    )
}

export default Todos