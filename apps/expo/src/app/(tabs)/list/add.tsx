import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { api } from '~/utils/api'
import { AddContactsForm } from '~/components/Form'

const Add: React.FC = () => {
    const { } = api
    const router = useNavigation();
    return (
        <View className='h-full bg-leadistroBlack flex flex-col items-center justify-start space-y-8 py-4 px-2.5 w-full'>
            <TouchableOpacity onPress={() => void router.goBack()} className='bg-leadistroRed/25 rounded-full flex flex-row items-center justify-center space-x-2  px-2.5 py-1.5 self-start w-auto'>
                <Ionicons name='caret-back-circle-outline' color={'#fafafa'} size={22.5} />
                <Text style={{ includeFontPadding: false }} className='text-2xl text-leadistroWhite'>Go Back</Text>
            </TouchableOpacity>
            <Text className='text-4xl underline underline-offset-4 px-2 self-start text-leadistroWhite'>
                Add Your Leads
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