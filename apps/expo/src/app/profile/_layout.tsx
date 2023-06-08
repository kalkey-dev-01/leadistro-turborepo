import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayout = () => {
    return (
        <Stack initialRouteName='index'>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        </Stack>
    )
}

export default ProfileLayout