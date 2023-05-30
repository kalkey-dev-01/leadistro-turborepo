import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '~/utils/context/authContext'
import auth from '@react-native-firebase/auth'


const Home = () => {
    // const user = useAuth()
    // console.log(user?.email, 'Home Email')
    return (
        <View>
            <Text>This is HomeScreen</Text>
            <Button onPress={() => void auth().signOut()} title='SignOut' />
        </View>
    )
}

export default Home