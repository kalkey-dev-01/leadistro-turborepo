import { View, Text } from 'react-native'
import React from 'react'
import { Link, useNavigation, usePathname } from 'expo-router';

const SubModal = () => {
    const pathName = usePathname()
    console.log(pathName)
    const navigation = useNavigation();
    // If the page was reloaded or navigated to directly, then the modal should be presented as
    // a full screen page. You may need to change the UI to account for this.
    const isPresented = navigation.canGoBack();
    return (
        <View className='flex flex-col items-center bg-leadistroBlack justify-start p-5 w-full h-full'>
            <Text className='text-2xl text-leadistroWhite'>
                Choose The Package That Suits You.
            </Text>
        </View>
    )
}

export default SubModal