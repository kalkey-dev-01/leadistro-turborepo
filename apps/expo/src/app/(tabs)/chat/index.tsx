import { View, Text, ScrollView } from 'react-native'
import React from 'react'

interface ChatTemplatesProps {
    title: string;
    sub_title: string;
}


const ChatTemplates: React.FC<ChatTemplatesProps> = ({
    sub_title, title
}) => {
    return (
        <View className='flex flex-col mr-4 items-center justify-center bg-leadistroWhite'>
            <Text>
                {title}
            </Text>
            <Text>
                {sub_title}
            </Text>
        </View>
    )
}

const promptData = {

}

const Chat = () => {
    return (
        <View className='flex bg-leadistroBlack flex-col w-full h-full justify-start items-start px-4 pt-4'>
            <View className='text-leadistroRed border-leadistroWhite border-b-2 mb-7 border-b-leadistroRed'>
                <Text className='text-leadistroWhite text-2xl'>Chat Assistant Templates</Text>
            </View>
            <ScrollView className='w-screen h-screen'>
                <View className='h-screen w-screen'>
                    <View className='h-1/3 flex flex-col w-full'>
                        <Text className='text-leadistroWhite mb-2 font-bold text-lg'>Writing</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            className='h-full w-full'
                        >
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                        </ScrollView>
                    </View>
                    <View className='h-1/3 flex flex-col w-full my-2'>
                        <Text className='text-leadistroWhite mb-2 font-bold text-lg'>Marketing</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            className='h-full w-full'
                        >
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                        </ScrollView>
                    </View>
                    <View className='h-1/3 flex flex-col w-full'>
                        <Text className='text-leadistroWhite mb-2 font-bold text-lg'>Social</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            className='h-full w-full'
                        >
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                            <ChatTemplates sub_title='Prompt Description' title='Prompt Title' />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Chat