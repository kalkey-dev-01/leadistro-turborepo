/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AntDesign } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth'
import { api } from '~/utils/api';




const Login: React.FC = () => {
    const { mutateAsync, error, isError } = api.mobileAuth.create.useMutation()
    async function GoogleAuthSignIn() {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
        const { idToken } = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(credential).then(async (user) => {
            console.log('Mutate Starts')
            await mutateAsync({
                email: user.user.email!,
                id: user.user.uid,
                emailVerified: user.user.emailVerified,
                userName: user.user.displayName!,
                providerId: user.user.providerId,
                photoUrl: user.user.photoURL!,
            })
            console.log(user, 'from Promise and the mutate ends')
        })
    }
    if (isError) {
        console.log(error?.message, error?.data)
    }
    const router = useRouter()
    return (
        <View className='w-full bg-leadistroBlack h-full justify-center flex flex-col items-center'>
            <Stack.Screen options={{ headerShown: false }} />
            <View className='flex-1 flex items-center justify-center gap-4'>
                <Text className='text-4xl text-white'>leadistro<Text className="text-leadistroRed">Native</Text></Text>
                <Text className='text-leadistroRed text-xl mb-5 text-center max-w-sm'>Amplify <Text className="text-leadistroWhite">your Marketing</Text> Strategy with<Text className='text-white font-bold'> leadistro</Text> - <Text className="text-white">The Ai Powered</Text> App for Marketing <Text className="text-white">Campaigns</Text>.</Text>
                <Image className='h-48 w-48' style={{ borderColor: '#ff9580', borderWidth: 2, borderRadius: 999 }} source={require('../../../assets/icon.png')} alt='Logo' />
            </View>

            <View className='flex justify-center gap-4 my-8 items-center'>
                <Text className='text-white text-xs'>By signing in you acknowledge and agree to our privacy policies</Text>
                <TouchableOpacity onPress={GoogleAuthSignIn}>
                    <View className='flex flex-row items-center justify-evenly w-[70%] p-3 rounded-xl bg-leadistroRed '>
                        <Text className='text-leadistroBlack text-xl font-extrabold'>
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