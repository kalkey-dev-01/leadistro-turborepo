import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '~/utils/context/authContext'

const Home = () => {
    // const user = useAuth()
    // console.log(user?.email, 'Home Email')
    return (
        <View>
            <Text>This is HomeScreen</Text>
        </View>
    )
}

export default Home