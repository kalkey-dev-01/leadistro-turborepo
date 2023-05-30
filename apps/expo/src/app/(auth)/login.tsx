/* eslint-disable @typescript-eslint/no-misused-promises */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GoogleAuthSignIn } from '~/utils/google-signin'
import { AntDesign } from '@expo/vector-icons';
// import { useAtomValue } from 'jotai';
// import { FirebaseUserAtom } from '~/utils/atoms';
import { useAuth } from '~/utils/context/authContext';
const Login = () => {
    // const user = useAtomValue(FirebaseUserAtom);
    const users = useAuth();

    console.log('Whats the User In Login Screen', users?.displayName);

    return (
        <View className='w-full bg-[#101010] h-full justify-evenly flex flex-col items-center'>
            <Stack.Screen options={{ headerTitle: 'Sign In' }} />
            <Text className='text-2xl text-white'>leadistro<Text className="text-[#ff9580]">Native</Text></Text>
            <Text className='text-[#ff9580] text-base text-center max-w-md'>Amplify <Text className="text-white">your Marketing</Text> Strategy <Text className='text-white font-bold'>with leadistro</Text> - <Text className="text-white">The Ai Powered</Text> App for Marketing <Text className="text-white">Campaigns</Text>.</Text>
            <TouchableOpacity onPress={GoogleAuthSignIn}>
                <View className='flex flex-row items-center justify-evenly w-[80%] rounded-xl px-2 py-3 bg-[#ff9580] '>
                    <Text className='text-[#101010] text-xl font-extrabold'>
                        Sign In With Google
                    </Text>
                    <AntDesign name="google" size={24} color="#101010" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Login