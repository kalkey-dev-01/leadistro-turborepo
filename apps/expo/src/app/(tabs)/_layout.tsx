import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
const TabLayout = () => {
    return (
        <Tabs
            initialRouteName='home'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#101010', elevation: 0 },
                tabBarIconStyle: { color: '#fbfbfb' },
                tabBarActiveBackgroundColor: '#141414',
                tabBarActiveTintColor: '#FF9590',
                tabBarShowLabel: false,
            }}>
            <Tabs.Screen name="list" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<FontAwesome5 name="users" size={size} color={focused ? '#EF8672' : color} />) }} />
            <Tabs.Screen name="home" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Ionicons name="ios-home" size={size} color={focused ? '#EF8672' : color} />) }} />
            <Tabs.Screen name="chat" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Octicons name="dependabot" size={size} color={focused ? '#EF8672' : color} />) }} />
        </Tabs>
    )
}

export default TabLayout