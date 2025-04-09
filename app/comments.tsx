import React from "react";
import { FlatList, View, Text } from "react-native"

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments = React.memo(({ data }: any) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View>
                    <Text>{item.email}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
        ></FlatList>
    )
})

export default Comments