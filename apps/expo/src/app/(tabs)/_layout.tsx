import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarStyle: { backgroundColor: '#101010', elevation: 0 },
            tabBarIconStyle: { color: '#fbfbfb' },
            tabBarActiveBackgroundColor: '#141414',
            tabBarActiveTintColor: '#FF9590',
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen name="home" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Ionicons name="ios-home" size={size} color={focused ? '#EF8672' : color} />) }} />
            <Tabs.Screen name="list" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<FontAwesome5 name="users" size={size} color={focused ? '#EF8672' : color} />) }} />
        </Tabs>
    )
}

export default TabLayout