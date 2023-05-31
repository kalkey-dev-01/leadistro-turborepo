import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { TRPCProvider } from "~/utils/api";
import { AuthProvider } from "~/utils/context/authContext";
import { View } from "react-native";


// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {

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
                <View className={`flex items-center justify-center border-2 border-leadistroRed p-1.5 rounded-full`}>
                  <Feather name="user" size={20} color={'#ff9580'} onPress={() => {
                    console.log("pressed user icon");
                  }} />
                </View>
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
