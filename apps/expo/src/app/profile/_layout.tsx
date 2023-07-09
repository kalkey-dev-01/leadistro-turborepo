import React from 'react'
import { Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons'

const ProfileLayout = () => {
    return (
        <Stack initialRouteName='index' >
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='modal'
                options={{
                    presentation: 'modal',
                    headerShown: false,
                    animation: 'fade_from_bottom'
                    // headerTitleAlign: 'center',
                    // headerTitle: 'Choose Your Plan',
                    // headerStyle: { backgroundColor: '#101010' },
                    // headerTitleStyle: { color: '#ff9580' },
                    // headerLeft: () => (
                    //     <Feather onPress={() => router.back()} name='arrow-left' size={20} color={'#ff9580'} className='mx-2' />
                    // )
                }}
            />
        </Stack>
    )
}

export default ProfileLayout