import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { AddContactsForm } from '~/components/Form'

const Add: React.FC = () => {
    const router = useNavigation();
    return (
        <View className='h-full bg-leadistroBlack flex flex-col items-center justify-start space-y-4 py-4 px-2.5 w-full'>
            <TouchableOpacity onPress={() => void router.goBack()} className='space-x-4 bg-leadistroRed/25 rounded-full flex flex-row items-center justify-center   px-6 border border-leadistroWhite py-1.5 self-start w-auto'>
                <Ionicons name='caret-back-circle-outline' color={'#fafafa'} size={22.5} />
                <Text style={{ includeFontPadding: false }} className='text-2xl text-leadistroWhite'>Go Back</Text>
            </TouchableOpacity>
            <Text className='text-4xl tracking-wider text-center text-leadistroWhite'>
                Import Or Add Your Contacts
            </Text>
            <TouchableOpacity onPress={() => {

            }}>
                <View className='w-[70%] h-auto bg-leadistroRed py-3 px-4 rounded-2xl'>
                    <Text className='text-xl text-leadistroBlack font-extrabold'>
                        Import Multiple Contacts.
                    </Text>
                </View>
            </TouchableOpacity>
            <Text className='text-xs text-leadistroRed font-extrabold'>
                Or Add A Single Contact
            </Text>
            <AddContactsForm />
        </View>
    )
}

export default Add

// z.object({
//     id: z.string(),
//     emailAddress: z.string().email(),
//     vip: z.boolean(),
//     subscribed: z.boolean(),
//     Campaign: z.any().optional(),
//     campaignId: z.string().optional(),
//     createdAt: z.date(),
//     updatedAt: z.date(),
//   }),