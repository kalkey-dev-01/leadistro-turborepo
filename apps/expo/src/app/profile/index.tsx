import { View, Text, TouchableOpacity, Image, type ImageSourcePropType } from 'react-native'
import React from 'react'
import { Stack, usePathname, useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { RouterOutputs, api } from '~/utils/api'
import { useAuth } from '~/utils/context/authContext'
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const image = require('../../../assets/icon.png');


const Profile: React.FC = ({ }) => {
    const pathName = usePathname()
    console.log(pathName)
    const router = useRouter()
    const user = useAuth()
    const uid: string = user?.uid as string
    const { data, isLoading } = api.mobileAuth.byId.useQuery({ id: uid });
    return (
        <View className='flex bg-leadistroBlack flex-col w-full h-full justify-start py-16 items-center'>
            <Stack.Screen options={{ headerShown: false }} />
            <Text className='text-leadistroWhite text-3xl font-bold my-7'>User <Text className='text-leadistroRed'>Profile</Text></Text>
            <View className='border-2 flex flex-row items-center my-3 rounded-2xl justify-between px-5 w-[80%] py-3 border-leadistroWhite'>
                <Feather name='user' color={'#ff9580'} size={22} />
                {
                    isLoading ?
                        <Text className='text-white text-2xl'>
                            loading
                        </Text>
                        : <Text className='text-white text-2xl'>
                            {data?.userName}
                        </Text>
                }
            </View>
            <View className='border-2 flex flex-row items-center my-3 rounded-2xl justify-between px-5 w-[80%] py-3 bg-leadistroBlack border-leadistroWhite'>
                <Feather name='mail' color={'#ff9580'} size={22} />
                {
                    isLoading ?
                        <Text className='text-white text-2xl'>
                            loading
                        </Text>
                        : <Text className='text-white text-xl'>
                            {data?.email}
                        </Text>
                }
            </View>
            <View className='border-4 flex  flex-col items-center my-3 rounded-3xl justify-start px-3 w-[90%] py-5 bg-leadistroBlack border-leadistroRed'>
                <Text className="text-2xl text-leadistroWhite text-center font-semibold">Upgrade Your Account</Text>
                <Text className="text-xl my-2 text-leadistroWhite text-center">You will get access to all of our features in our platform.</Text>
                <Image source={image as ImageSourcePropType} className='mx-auto my-12 max-w-[150px] max-h-[150px] rounded-2xl object-contain' alt='Logo' />
                <Text className="text-xs text-leadistroWhite tracking-wider text-center font-extralight">Starting at $19.99/month</Text>
                <TouchableOpacity onPress={() => router.push('/profile/modal')}>
                    <View className='flex rounded-full py-3 px-6 my-5 bg-leadistroRed items-center justify-center'>
                        <Text className='text-2xl font-bold text-leadistroBlack'>Choose Your Plan</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View className='flex border-2 border-leadistroRed rounded-full bg-leadistroBlack py-2 px-4 items-center justify-center'>
                        <Text className='text-lg font-bold text-leadistroRed'>Subscribed Already?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile