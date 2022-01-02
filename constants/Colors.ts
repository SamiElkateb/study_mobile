import { DarkTheme, DefaultTheme } from "@react-navigation/native";


const Colors = {
  light:{
    primary:'rgb(47, 149, 220)',
    text: 'rgb(28, 28, 30)',
    background: 'rgb(242, 242, 242)'
  },
  dark:{
    primary: '#fff',
    text: '#fff',
    background: 'rgb(0, 0, 0)'
  },
};

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    correct:'rgb(129, 212, 119)',
    error:'rgb(206,91,91)',
    default:Colors.light.primary,
    tint: Colors.light.primary,
    tabIconDefault: '#ccc',
    tabIconSelected: Colors.light.primary,
  },
  styles: {
    text: {color: 'rgb(28, 28, 30)'},
    background: {backgroundColor: Colors.light.background},
    card: {backgroundColor: Colors.light.background}
  }
};

const darkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: Colors.dark.primary,
    text: '#fff',
    background: Colors.dark.background,
    card: 'rgb(50, 50, 50)',
    border: 'black',
    notification: 'rgb(255, 69, 58)',
    correct:'rgb(129, 212, 119)',
    error:'rgb(206,91,91)',
    default: Colors.light.primary,
    tint: Colors.dark.primary,
    tabIconDefault: '#ccc',
    tabIconSelected: Colors.dark.primary,
  },
  styles: {
    text: {color: '#fff'},
    background: {backgroundColor: Colors.dark.background},
    card: {backgroundColor: 'rgb(50, 50, 50)'}
  }
};

export {darkTheme, lightTheme}