import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" 
                options={{title: "Main"}}
            />
            <Tabs.Screen name="home" 
                options={{ title: "Home",}}
            />
        </Tabs>
    )
}