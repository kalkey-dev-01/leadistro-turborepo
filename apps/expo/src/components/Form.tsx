/* eslint-disable @typescript-eslint/no-misused-promises */
import { View, TextInput, Switch, Text, TouchableOpacity } from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { clsx } from 'clsx'
import { api } from '~/utils/api'
import { useRouter } from 'expo-router'

const formSchema = z.object({
    name: z.string().min(1).max(70),
    emailAddress: z.string().email('Enter A Valid Email'),
    vip: z.boolean().default(false),
    subscribed: z.boolean().default(false),
})

type formSchemaType = z.infer<typeof formSchema>



export const AddContactsForm: React.FC = () => {
    const router = useRouter()
    const { mutate } = api.leadRouter.create.useMutation()
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    });
    const onSubmit: SubmitHandler<formSchemaType> = (data) => {
        // console.log('Name is', data.name)
        // console.log('emailAddress is', data.emailAddress)
        // console.log('subscribed is', data.subscribed)
        // console.log('vip is', data.vip)
        mutate({
            contactName: data.name,
            emailAddress: data.emailAddress,
            vip: data.vip,
            subscribed: data.subscribed,
        })
        // if (isSuccess) {
        //     console.log('Successfull', isSuccess)
        // }
        reset()
    }
    console.log(isSubmitting)
    console.log(errors.emailAddress?.message, errors.name?.message)
    return (
        <View className="flex flex-col items-center justify-start space-y-8 my-7 py-6 h-full w-full bg-leadistroBrown/40 rounded-xl">
            <View className="h-auto w-full px-8 ">
                <Controller control={control} name={'name'} render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder='Contact Name'
                        placeholderTextColor={value === undefined ? '#fafafa' : '#ff958090'}
                        className={clsx(
                            `bg-leadistroBlack px-3 shadow  border rounded-xl text-white max-w-md w-full text-xl h-14`,
                            errors.name?.message
                                ? 'border-leadistroRed shadow-xl shadow-leadistroRed/70'
                                : 'border-leadistroWhite shadow-xl shadow-leadistroWhite/70',
                        )}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={e => onChange(e)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoComplete='off'
                        keyboardType='default'
                    />
                )} />
            </View>
            <View className="h-auto w-full px-8 ">
                <Controller control={control} name={'emailAddress'} render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder='Contact&apos;s Email Address'
                        placeholderTextColor={value === undefined ? '#fafafa' : '#ff958090'}
                        className={clsx(
                            `bg-leadistroBlack px-3 shadow border rounded-xl text-white max-w-md w-full text-xl h-14`,
                            errors.emailAddress?.message
                                ? 'border-leadistroRed shadow-xl shadow-leadistroRed/70'
                                : 'border-leadistroWhite shadow-xl shadow-leadistroWhite/70',
                        )}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={e => onChange(e)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoComplete='off'
                        keyboardType='email-address'
                    />
                )} />
            </View>
            <View className="h-auto w-full px-10 flex self-center flex-row items-center justify-start ">
                <View className=' py-1  flex flex-row items-center px-2 justify-between w-auto'>
                    <Text className='text-leadistroWhite pb-1 pr-2' >
                        V.I.P
                    </Text>
                    <Controller control={control} name={'vip'} render={({ field: { onChange, value } }) => (
                        <Switch
                            className='scale-105'
                            trackColor={{
                                true: '#ff958080',
                                false: '#fafafa50'
                            }}
                            thumbColor={value ? '#ff9580' : '#fafafa'}
                            value={value}
                            onValueChange={e => onChange(e)}
                        />
                    )} />
                </View>
                <View className='flex flex-row items-center px-14 justify-between w-auto'>
                    <Text className='text-leadistroWhite pb-1 pr-2' >
                        Subscribed
                    </Text>
                    <Controller control={control} name={'subscribed'} render={({ field: { onChange, value } }) => (
                        <Switch
                            className='scale-105'
                            trackColor={{
                                true: '#ff958080',
                                false: '#fafafa50'
                            }}
                            thumbColor={value ? '#ff9580' : '#fafafa'}
                            value={value}
                            onValueChange={e => onChange(e)}
                        />
                    )} />
                </View>
            </View>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <View className='w-[70%] h-auto bg-leadistroRed py-3 px-4 rounded-2xl'>
                    <Text className='text-xl text-leadistroBlack font-extrabold'>
                        Save This Contact.
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                router.push('/chat')
            }} >
                <View className='flex bg-leadistroBrown rounded-md py-3 flex-row items-center justify-between px-4'>
                    <Text className='text-leadistroWhite'>Use distroGpt To Import CSV or XLSX Files and upload them to your Distro.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}