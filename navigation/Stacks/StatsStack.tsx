/** @format */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from '../../components/UI/Icon';
import BottomTabNavigator from '../BottomTab';

const Stack = createNativeStackNavigator();

const StatsStack = () => {
	return (
			<Stack.Navigator>
				<Stack.Screen
					name="StatsMenu"
					component={BottomTabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Stats"
					component={BottomTabNavigator}
					options={({ navigation }) => ({
						title: 'Lesson',
						headerTintColor: 'transparent',
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

export default StatsStack;
