import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "leadistro",
  slug: "leadistro",
  scheme: "leadistro",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "dark",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#101010",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    googleServicesFile: "./GoogleService-Info.plist",
    supportsTablet: true,
    bundleIdentifier: "com.leadistro",
  },
  android: {
    googleServicesFile: "./google-services.json",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#101010",
    },
    package: "com.leadistronative",
  },
  extra: {
    eas: {
      projectId: "5e66edb7-fc5b-4305-aaf9-396d4ecf65db",
    },
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: [
    "./expo-plugins/with-modify-gradle.js",
    "@react-native-google-signin/google-signin",
    [
      "expo-build-properties",
      {
        android: {
          // these values were tested with Expo SDK 48
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          minSdkVersion: 23,
          buildToolsVersion: "33.0.0",
          kotlinVersion: "1.6.20",
        },
      },
    ],
  ],
});

export default defineConfig;
