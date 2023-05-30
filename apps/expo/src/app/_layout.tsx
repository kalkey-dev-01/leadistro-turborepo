import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";
import { AuthProvider } from "~/utils/context/authContext";

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
              headerTitle: 'leadistro Home'
            }}
          />
          <StatusBar />
        </SafeAreaProvider>
      </AuthProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
