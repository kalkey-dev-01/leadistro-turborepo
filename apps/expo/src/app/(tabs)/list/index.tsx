import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const ListNavigationState = {
    AddContacts: 'list/add',
    Inbox: 'list/inbox',
    Subs: 'list/subs',
    Vips: 'list/vips'
}

const ActionBar: React.FC = () => {
    const router = useRouter();
    return (
        <View className='my-5 flex flex-row items-center w-full justify-between'>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity onPress={
                    () => {
                        void router.push(ListNavigationState.AddContacts)
                    }
                } className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="user-plus" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Add Contacts</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity onPress={
                    () => {
                        void router.push(ListNavigationState.Inbox)
                    }
                } className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="box" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Inbox</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity onPress={
                    () => {
                        void router.push(ListNavigationState.Subs)
                    }
                } className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
                    <Feather name="bell" color={'#ff9580'} size={25} />
                </TouchableOpacity>
                <Text className='text-sm font-semibold text-center leading-6 text-leadistroWhite'>Subscribed</Text>
            </View>
            <View className='flex flex-col items-center justify-center'>
                <TouchableOpacity onPress={
                    () => {
                        void router.push(ListNavigationState.Vips)
                    }
                } className='px-4 py-4 mb-2 rounded-xl border-2 border-leadistroRed'>
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
            <View className='bg-leadistroBrown rounded-xl space-y-14 flex flex-col items-center p-4 justify-start w-full h-[200vh]'>
                <View className='w-full rounded-3xl border-leadistroRed space-y-2 pt-1 border-2 flex flex-col items-start justify-center'>
                    <>
                        <View className="w-full flex flex-row items-center p-3 justify-between">
                            <Text className='font-bold text-lg tracking-wider text-leadistroWhite'>
                                Leads Growth
                            </Text>
                            <Ionicons name={`people-circle-outline`} size={20} color={'#fafafa'} />
                        </View>
                    </>
                    <View className='rounded-b-3xl  w-full h-[20vh] bg-leadistroBrown/70' />
                </View>
                <View className='w-full rounded-3xl border-leadistroRed space-y-2 pt-1 border-2 flex flex-col items-start justify-center'>
                    <>
                        <View className="w-full flex flex-row items-center p-3 justify-between">
                            <Text className='font-bold text-lg tracking-wider text-leadistroWhite'>
                                Engagement
                            </Text>
                            <Ionicons name={`grid-outline`} size={20} color={'#fafafa'} />
                        </View>
                    </>
                    <View className='rounded-b-3xl  w-full h-[20vh] bg-leadistroBrown/70' />
                </View>
                <View className='w-full rounded-3xl border-leadistroRed space-y-2 pt-1 border-2 flex flex-col items-start justify-center'>
                    <>
                        <View className="w-full flex flex-row items-center p-3 justify-between">
                            <Text className='font-bold text-lg tracking-wider text-leadistroWhite'>
                                Subscribers Today
                            </Text>
                            <Ionicons name={`alarm`} size={20} color={'#fafafa'} />
                        </View>
                    </>
                    <View className='rounded-b-3xl  w-full h-[20vh] bg-leadistroBrown/70' />
                </View>
                <View className='w-full rounded-3xl border-leadistroRed space-y-2 pt-1 border-2 flex flex-col items-start justify-center'>
                    <>
                        <View className="w-full flex flex-row items-center p-3 justify-between">
                            <Text className='font-bold text-lg tracking-wider text-leadistroWhite'>
                                Imported Leads History
                            </Text>
                            <Ionicons name={`refresh`} size={20} color={'#fafafa'} />
                        </View>
                    </>
                    <View className='rounded-b-3xl  w-full h-[20vh] bg-leadistroBrown/70' />
                </View>
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