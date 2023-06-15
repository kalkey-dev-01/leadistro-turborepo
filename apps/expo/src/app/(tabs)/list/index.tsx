import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'


const ActionBar: React.FC = () => {
    return (
        <View className='my-5 flex flex-row items-center w-full justify-between'>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="user-plus" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Add Contacts</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="box" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Inbox</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="bell" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Subscribed</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="user-check" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>VIPs</Text>
            </View>
        </View>
    );
}

const TasksBar: React.FC = () => {
    return (
        <>
            <View className='bg-leadistroBrown rounded-xl space-y-2 flex flex-col items-start p-4 justify-start w-full h-[80vh]'>
                <Text className='font-bold tracking-wider text-leadistroRed'>
                    Leads Growth
                </Text>
                <Text className='font-bold tracking-wider text-leadistroRed'>
                    Engagement
                </Text>
                <Text className='font-bold tracking-wider text-leadistroRed'>
                    Subscribers Today
                </Text>
                <Text className='font-bold tracking-wider text-leadistroRed'>
                    Imported Leads History
                </Text>
            </View>
        </>
    )
}


const List = () => {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }} className='bg-leadistroRed'>
            <View className='flex flex-col w-full h-full bg-leadistroBlack p-5 justify-start items-center'>
                <ActionBar />
                <TasksBar />
                <Text className='text-leadistroRed text-xl text-center'>Add Contacts to Show Engagement Ratio and Audience Growth</Text>
            </View>
        </ScrollView>
    )
}

export default List