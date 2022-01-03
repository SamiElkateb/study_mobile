/** @format */

import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const Colors = {
	light: {
		primary: 'rgb(47, 149, 220)',
		text: 'rgb(28, 28, 30)',
		background: 'rgb(230, 230, 230)',
		card: 'rgb(255, 255, 255)',
	},
	dark: {
		primary: 'rgb(255, 255, 255)',
		text: 'rgb(255, 255, 255)',
		background: 'rgb(0, 0, 0)',
		card: 'rgb(50, 50, 50)',
	},
};

const lightTheme = {
	...DefaultTheme,
	dark: false,
	colors: {
		primary: Colors.light.primary,
		background: Colors.light.background,
		card: Colors.light.card,
		text: Colors.light.text,
		border: 'rgb(199, 199, 204)',
		notification: 'rgb(255, 69, 58)',
		correct: 'rgb(129, 212, 119)',
		error: 'rgb(206,91,91)',
		default: Colors.light.primary,
		tint: Colors.light.primary,
		tabIconDefault: '#ccc',
		tabIconSelected: Colors.light.primary,
	},
	styles: {
		text: { color: Colors.light.text },
		background: { backgroundColor: Colors.light.background },
		card: { backgroundColor: Colors.light.card },
	},
};

const darkTheme = {
	...DarkTheme,
	dark: true,
	colors: {
		primary: Colors.dark.primary,
		text: Colors.dark.text,
		background: Colors.dark.background,
		card: Colors.dark.card,
		border: 'black',
		notification: 'rgb(255, 69, 58)',
		correct: 'rgb(129, 212, 119)',
		error: 'rgb(206,91,91)',
		default: Colors.light.primary,
		tint: Colors.dark.primary,
		tabIconDefault: '#ccc',
		tabIconSelected: Colors.dark.primary,
	},
	styles: {
		text: { color: Colors.dark.text },
		background: { backgroundColor: Colors.dark.background },
		card: { backgroundColor: Colors.dark.card },
	},
};

export { darkTheme, lightTheme };
