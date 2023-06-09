import { View, Text } from 'react-native'
import React from 'react'
// import { useAuth } from '~/utils/context/authContext'
// import auth from '@react-native-firebase/auth'


const Home = () => {
    //     const user = useAuth()
    // <Button color={'#ff9580'} onPress={() => void auth().signOut()} title='SignOut' />
    {/* <Text className='text-leadistroWhite text-2xl'>{user?.displayName}</Text> */ }
    return (
        <View className='flex bg-leadistroBlack flex-col w-full h-full justify-center items-center'>
            <Text className='text-leadistroWhite text-lg'>Start Using distro Template Builder</Text>
        </View>
    )
}

export default Home