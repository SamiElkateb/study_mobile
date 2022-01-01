/** @format */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import Icon from '../../components/UI/Icon';
import Colors from '../../constants/Colors';
import CardStack from '../../screens/CardStack';
import DailyCards from '../../screens/DailyCards';
import { StudyContextProvider } from '../../store/StudyContext';
import BottomTabNavigator from '../BottomTab';

const Stack = createNativeStackNavigator();

const StudyStack = () => {
	return (
		<StudyContextProvider>
			<Stack.Navigator>
				<Stack.Screen
					name="StudyMenu"
					component={BottomTabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Study"
					component={BottomTabNavigator}
					options={({ navigation }) => ({
						title: 'Study',
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
		</StudyContextProvider>
	);
};

export default StudyStack;
