/* eslint-disable @typescript-eslint/no-misused-promises */
import { View, TextInput, Switch, Text, TouchableOpacity } from 'react-native'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'


const formSchema = z.object({
    name: z.string().min(1).max(70),
    emailAddress: z.string().email('Enter A Valid Email'),
    vip: z.boolean().default(false),
    subscribed: z.boolean().default(false),
})

type formSchemaType = z.infer<typeof formSchema>



export const AddContactsForm: React.FC<{}> = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    });
    const onSubmit: SubmitHandler<formSchemaType> = (data) => {
        console.log('Name is', data.name)
        console.log('emailAddress is', data.emailAddress)
        console.log('subscribed is', data.subscribed)
        console.log('vip is', data.vip)
    }
    console.log(isSubmitting)
    console.log(errors)
    return (
        <View className="flex flex-col items-center justify-start space-y-8 my-7 py-6 h-full w-full bg-leadistroBrown/40 rounded-xl">
            <View className="h-auto w-full px-8 ">
                <Controller control={control} name={'name'} render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder='Contact Name'
                        placeholderTextColor={'#ff958090'}
                        className='bg-leadistroBlack shadow-xl px-3 shadow-leadistroRed/70  border-leadistroRed border rounded-xl text-white max-w-md w-full text-xl h-14'
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
                        placeholderTextColor={'#ff958090'}
                        className='bg-leadistroBlack shadow-xl px-3 shadow-leadistroRed/70  border-leadistroRed border rounded-xl text-white max-w-md w-full text-xl h-14'
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
                <View className='flex flex-row items-center px-2 justify-between w-auto'>
                    <Text className='text-leadistroWhite pb-1' >
                        V.I.P
                    </Text>
                    <Controller control={control} name={'vip'} render={({ field: { onChange, value } }) => (
                        <Switch
                            trackColor={{
                                true: '#ff958080',
                                false: '#fafafa50'
                            }}
                            thumbColor={'#ff9580'}
                            value={value}
                            onValueChange={e => onChange(e)}
                        />
                    )} />
                </View>
                <View className='flex flex-row items-center px-14 justify-between w-auto'>
                    <Text className='text-leadistroWhite pb-1' >
                        Subscribed
                    </Text>
                    <Controller control={control} name={'subscribed'} render={({ field: { onChange, value } }) => (
                        <Switch
                            trackColor={{
                                true: '#ff958080',
                                false: '#fafafa50'
                            }}
                            thumbColor={'#ff9580'}
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
        </View>
    )
}