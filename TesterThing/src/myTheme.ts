import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

export const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: '#ffffff',
    primary: '#ffffff',
    card:'#101010'
  },
};