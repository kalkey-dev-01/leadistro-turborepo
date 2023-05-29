import { Tabs } from 'expo-router'

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ headerShown: true }} />
            <Tabs.Screen name="list" options={{ headerShown: true }} />
        </Tabs>
    )
}

export default TabLayout