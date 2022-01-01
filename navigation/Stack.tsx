/** @format */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import Icon from '../components/UI/Icon';
import Colors from '../constants/Colors';
import CardStack from '../screens/CardStack';
import BottomTabNavigator from './BottomTab';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Study"
				component={CardStack}
				options={({ navigation }) => ({
					title: 'Study',
					headerTintColor: 'transparent',
					gestureEnabled: false,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Modal')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<Icon
								name="flag"
								size={'small'}
								color={Colors['light'].tabIconDefault}
							/>
						</Pressable>
					),
					headerLeft: () => (
						<Pressable
							onPress={() => navigation.goBack()}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<Icon
								name="close"
								size={'small'}
								color={Colors['light'].tabIconDefault}
							/>
						</Pressable>
					),
				})}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
