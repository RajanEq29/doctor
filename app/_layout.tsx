import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
    <ThemeProvider value={DefaultTheme} >
      <>
        <Stack screenOptions={{  headerShown: false}}>
          <Stack.Screen name="/(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="/(report)" options={{ headerShown: false }}/>
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </>
    </ThemeProvider>
    </Provider>
  );
}
