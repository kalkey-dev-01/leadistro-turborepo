import { Stack } from 'expo-router'
import React from 'react'

export default function OnboardingLayout() {
    return (
        <Stack initialRouteName='onboard'>
            <Stack.Screen name="onboard" options={{ headerShown: false }} />
        </Stack>
    )
}