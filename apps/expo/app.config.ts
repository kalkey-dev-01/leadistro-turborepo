import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "leadistro",
  slug: "leadistro",
  scheme: "leadistro",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
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
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#101010",
    },
    package: "com.leadistronative",
  },
  extra: {
    eas: {
      projectId: "5e66edb7-fc5b-4305-aaf9-396d4ecf65db",
    },
  },
  plugins: [
    "./expo-plugins/with-modify-gradle.js",
    "@react-native-google-signin/google-signin",
  ],
});

export default defineConfig;
