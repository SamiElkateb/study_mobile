/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 * @format
 */

import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DailyCard from '../screens/DailyCards';
import Lessons from '../screens/Lessons';
import Stats from '../screens/Stats';
/* import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen'; */
/* import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from '../types'; */
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={Lessons}
				options={({ navigation }) => ({
					title: 'Lessons',
					tabBarIcon: ({ color }) => (
						<Entypo name="flag" color={color} size={30} />
					),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={DailyCard}
				options={{
					title: 'Daily Cards',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="ios-today-sharp"
							color={color}
							size={30}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="TabThree"
				component={Stats}
				options={{
					title: 'Stats',
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="ios-trophy-sharp"
							color={color}
							size={30}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
