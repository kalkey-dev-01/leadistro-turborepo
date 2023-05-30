/* eslint-disable @typescript-eslint/no-misused-promises */
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GoogleAuthSignIn } from '~/utils/google-signin'
import { AntDesign } from '@expo/vector-icons';
// import { useAtomValue } from 'jotai';
// import { FirebaseUserAtom } from '~/utils/atoms';
import { useAuth } from '~/utils/context/authContext';

const Login = () => {
    // const user = useAtomValue(FirebaseUserAtom);
    // const users = useAuth()
    // console.log('Whats the User In Login Screen', users);

    return (
        <View className='w-full bg-[#101010] h-full justify-center flex flex-col items-center'>
            <Stack.Screen options={{ headerShown: false }} />
            <View className='flex-1 flex items-center justify-center gap-4'>
                <Text className='text-4xl text-white'>leadistro<Text className="text-[#ff9580]">Native</Text></Text>
                <Text className='text-[#ff9580] text-xl mb-5 text-center max-w-sm'>Amplify <Text className="text-white">your Marketing</Text> Strategy with<Text className='text-white font-bold'> leadistro</Text> - <Text className="text-white">The Ai Powered</Text> App for Marketing <Text className="text-white">Campaigns</Text>.</Text>
                <Image className='max-h-28 max-w-[112px] rounded-2xl ' source={require('../../../assets/icon.png')} alt='Logo' />
            </View>
            <View className='flex justify-center gap-4 my-8 items-center'>
                <Text className='text-white text-xs'>By signing in you acknowledge and agree to our privacy policies</Text>
                <TouchableOpacity onPress={GoogleAuthSignIn}>
                    <View className='flex flex-row items-center justify-evenly w-[70%] p-3 rounded-xl bg-[#ff9580] '>
                        <Text className='text-[#101010] text-xl font-extrabold'>
                            Sign In With Google
                        </Text>
                        <AntDesign name="google" size={28} color="#101010" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login