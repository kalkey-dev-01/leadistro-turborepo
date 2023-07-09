import { Tabs } from 'expo-router'
import { Feather, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'
import * as Menu from 'zeego/dropdown-menu'
import { View } from 'react-native';
import { useRouter } from 'expo-router'
const TabLayout = () => {
    const router = useRouter()
    return (
        <Tabs
            initialRouteName='home'
            screenOptions={{
                tabBarVisibilityAnimationConfig: { show: { animation: 'spring' } },
                tabBarStyle: { backgroundColor: '#101010', elevation: 0 },
                tabBarIconStyle: { color: '#fbfbfb' },
                tabBarActiveBackgroundColor: '#141414',
                tabBarActiveTintColor: '#FF9590',
                tabBarShowLabel: false,
                headerShown: true,
                headerTitleStyle: { color: '#FF9590' },
                headerTitle: 'Home',
                headerStyle: { backgroundColor: '#101010' },
                headerRight: () => (
                    <Menu.Root style={{ backgroundColor: '#101010' }}>
                        <Menu.Trigger style={{ backgroundColor: '#101010' }}>
                            <View className={`flex items-center justify-center border-2 border-leadistroRed p-1.5 mx-2 rounded-full`}>
                                <Feather name="user" size={20} color={'#ff9580'} />
                            </View>
                        </Menu.Trigger>
                        <Menu.Content style={{ backgroundColor: '#101010' }}>
                            <Menu.Item style={{ backgroundColor: '#101010' }} key={'first'} onSelect={() => router.push('/profile')}>
                                <Menu.ItemTitle>
                                    User Profile
                                </Menu.ItemTitle>
                                <Menu.ItemIcon androidIconName="logout">
                                    <Feather name="archive" size={20} />
                                </Menu.ItemIcon>
                            </Menu.Item>
                            <Menu.Item key={'second'} onSelect={() => void auth().signOut()}>
                                Logout from this device
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Root>
                )
            }}>
            <Tabs.Screen name="list" options={{ headerShown: true, tabBarIcon: ({ color, size, focused }) => (<FontAwesome5 name="users" size={size} color={focused ? '#EF8672' : color} />) }} />
            <Tabs.Screen name="home" options={{ headerShown: true, tabBarIcon: ({ color, size, focused }) => (<Ionicons name="ios-home" size={size} color={focused ? '#EF8672' : color} />) }} />
            <Tabs.Screen name="chat" options={{ headerShown: true, tabBarIcon: ({ color, size, focused }) => (<Octicons name="dependabot" size={size} color={focused ? '#EF8672' : color} />) }} />
        </Tabs>
    )
}

export default TabLayout