import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'expo-template',
  slug: 'expo-template',
  scheme: 'myexpotemplate',
  owner: 'LFF',
  description: 'Template project for future Expo projects from LFF',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  platforms: ['ios', 'android'],
  githubUrl: 'https://github.com/fredericosafebox/expo-lff-template',
  userInterfaceStyle: 'light',
  backgroundColor: '#ffffff',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    infoPlist: {
      NSCameraUsageDescription: 'This app uses the camera to scan barcodes on event tickets.',
    },
    bundleIdentifier: 'com.LFF.expotemplate',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    permissions: [''],
    package: 'com.LFF.expotemplate',
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
