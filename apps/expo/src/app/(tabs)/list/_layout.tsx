import React from 'react'
import { Stack } from 'expo-router'

const ListLayout = () => {
    return (
        <Stack screenOptions={{ animation: 'fade_from_bottom' }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="add" options={{ headerShown: false }} />
            <Stack.Screen name="inbox" options={{ headerShown: false }} />
            <Stack.Screen name="subs" options={{ headerShown: false }} />
            <Stack.Screen name="vips" options={{ headerShown: false }} />
        </Stack>
    )
}

export default ListLayout