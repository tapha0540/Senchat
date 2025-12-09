import { UserContextProvider } from "@/hooks/user-context";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 10000);
  }, []);
  return (
    <UserContextProvider>
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="signup" />
      </Stack>
    </UserContextProvider>
  );
}

export default RootLayout;
