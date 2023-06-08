import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { TRPCProvider } from "~/utils/api";
import { AuthProvider } from "~/utils/context/authContext";
import { View } from "react-native";
import * as Menu from 'zeego/dropdown-menu'
import auth from '@react-native-firebase/auth'
import { useRouter } from 'expo-router'
// import { useAuth } from "~/utils/context/authContext";
// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  const router = useRouter()
  return (
    <TRPCProvider>
      <AuthProvider>
        <SafeAreaProvider>
          {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
          <Stack
            screenOptions={{
              headerTitleStyle: {
                color: "#FF9580"
              },
              headerStyle: {
                backgroundColor: "#101010",
              },
              headerTitle: 'Home',
              headerRight: () => (
                <Menu.Root style={{ backgroundColor: '#101010' }}>
                  <Menu.Trigger style={{ backgroundColor: '#101010' }}>
                    <View className={`flex items-center justify-center border-2 border-leadistroRed p-1.5 rounded-full`}>
                      <Feather name="user" size={20} color={'#ff9580'} />
                    </View>
                  </Menu.Trigger>
                  <Menu.Content style={{ backgroundColor: '#101010' }}>
                    <Menu.Item style={{ backgroundColor: '#101010' }} key={'first'} onSelect={() => router.push('/profile')}>
                      <Menu.ItemTitle>
                        User Profile
                      </Menu.ItemTitle>
                      <Menu.ItemIcon androidIconName="logout">
                        <Feather name="archive" size={20} />
                      </Menu.ItemIcon>
                    </Menu.Item>
                    <Menu.Item key={'second'} onSelect={() => void auth().signOut()}>
                      Logout from this device
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Root>
              )
            }}
          />
          <StatusBar />
        </SafeAreaProvider>
      </AuthProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
