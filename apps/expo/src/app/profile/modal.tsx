import { View, Text } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router';

const SubModal = () => {
    const navigation = useNavigation();
    // If the page was reloaded or navigated to directly, then the modal should be presented as
    // a full screen page. You may need to change the UI to account for this.
    const isPresented = navigation.canGoBack();
    return (
        <View className='flex flex-col items-center justify-center w-full h-full'>
            <Text>SubModal</Text>
            {!isPresented && <Link href={'../'}>Dismiss</Link>}
        </View>
    )
}

export default SubModal