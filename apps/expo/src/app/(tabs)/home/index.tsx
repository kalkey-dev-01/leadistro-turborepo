import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import { useAuth } from '~/utils/context/authContext'
// import auth from '@react-native-firebase/auth'
const Home = () => {
    //     const user = useAuth()
    // <Button color={'#ff9580'} onPress={() => void auth().signOut()} title='SignOut' />
    {/* <Text className='text-leadistroWhite text-2xl'>{user?.displayName}</Text> */ }
    return (
        <View className='flex bg-leadistroBlack flex-col w-full h-full justify-start items-center'>
            <Text className='text-2xl self-start mx-4 my-5 text-leadistroWhite'>
                Campaigns - All
            </Text>
            <View className="flex items-center justify-center h-1/3 w-full bg-red-400 ">
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='w-full h-full'>
                    <View className="w-[90vw] h-full mr-5 bg-leadistroWhite"></View>
                    <View className="w-[90vw] h-full mr-5 bg-leadistroWhite"></View>
                    <View className="w-[90vw] h-full mr-5 bg-leadistroWhite"></View>
                    <View className="w-[90vw] h-full mr-5 bg-leadistroWhite"></View>
                    <View className="w-[90vw] h-full mr-5 bg-leadistroWhite"></View>
                </ScrollView>
            </View>

        </View>
    )
}

export default Home