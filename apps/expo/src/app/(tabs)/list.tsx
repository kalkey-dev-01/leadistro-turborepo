import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'


const ActionBar: React.FC = () => {
    return (
        <View className='my-5 flex flex-row items-center w-full justify-between'>
            <View className='flex flex-col items-center justify-center'>
                <View className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="user-plus" color={'#ff9580'} size={25} />
                </View>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Add Contacts</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <View className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="box" color={'#ff9580'} size={25} />
                </View>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Inbox</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <View className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="bell" color={'#ff9580'} size={25} />
                </View>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Subscribed</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <View className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="user-check" color={'#ff9580'} size={25} />
                </View>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>VIPs</Text>
            </View>
        </View>
    );
}


const List = () => {
    return (
        <View className='flex flex-col w-full h-full bg-leadistroBlack p-5 justify-start items-center'>
            <ActionBar />
            <Text className='text-leadistroRed text-xl text-center'>Add Contacts to Show Engagement Ratio and Audience Growth</Text>
        </View>
    )
}

export default List