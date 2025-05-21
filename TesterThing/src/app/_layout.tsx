import { Slot, Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
  },
};
export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
    <Slot />
   </ThemeProvider>
  );
}