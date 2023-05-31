import { View, Text } from 'react-native'
import React from 'react'

const Chat = () => {
    return (
        <View className='flex bg-leadistroBlack flex-col w-full h-full justify-start  items-center'>
            <View className='bg-leadistroBlack/75 w-[95.5%] h-[99%] border-leadistroRed border-2 rounded-xl justify-between items-center'>
                <Text className='text-leadistroWhite text-2xl'>Chat?</Text>
            </View>
        </View>
    )
}

export default Chat