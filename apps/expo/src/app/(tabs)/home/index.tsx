import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '~/utils/context/authContext'
import auth from '@react-native-firebase/auth'


const Home = () => {
    const user = useAuth()

    return (
        <View className='flex bg-leadistroBlack flex-col w-full h-full justify-between py-5 items-center'>
            <Text className='text-leadistroWhite text-2xl'>{user?.displayName}</Text>
            <Text className='text-leadistroWhite'>This is HomeScreen</Text>
            <Button color={'#ff9580'} onPress={() => void auth().signOut()} title='SignOut' />
        </View>
    )
}

export default Home