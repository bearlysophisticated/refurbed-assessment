import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from "react-native";
import { DealProvider } from '@/contexts/deals-context/DealContext';
import { RemoteConfigProvider } from "@/contexts/remote-config/RemoteConfigContext";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <RemoteConfigProvider>
      <DealProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            <Stack.Screen name="deal/[id]" options={{ headerShown: true, }}/>
          </Stack>
          <StatusBar style="auto"/>
        </ThemeProvider>
      </DealProvider>
    </RemoteConfigProvider>
  );
}
