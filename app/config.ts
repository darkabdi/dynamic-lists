import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra;

if (!extra || !extra.API_URL) {
  throw new Error("Missing API_URL in expo extra config");
}

export const API_URL: string = extra.API_URL;