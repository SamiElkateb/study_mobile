/** @format */
import { useEffect, useRef } from 'react';
import {
	Animated,
	GestureResponderEvent,
	Pressable,
	StyleSheet,
} from 'react-native';

import Colors from '../../../constants/Colors';
import { toggleButton } from '../../../types';

interface props {
	onClick?: (event: GestureResponderEvent) => void;
	disabled?: boolean;
	styling?: 'correct' | 'error' | 'secondary';
	style?: {};
	size?: 'large' | 'med' | 'small';
	buttonHook?: toggleButton;
}

const RoundButton: React.FC<props> = (props) => {
	const {
		children,
		onClick,
		disabled = false,
		styling = 'correct',
		style = {},
		size = 'med',
		buttonHook = { isActive: false, toggleHandler: () => {} },
	} = props;

	const backgroundAnim = useRef(new Animated.Value(0)).current;

	const { isActive,toggleHandler } = buttonHook;

	const backgroundInterpolation = backgroundAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['rgb(255,255,255)', Colors[styling]],
	});

	let colors = styles.primary;
	styling === 'secondary' && (colors = styles.secondary);
	styling === 'error' && (colors = styles.danger);
	disabled && (colors = styles.disabled);

	const onPressInHandler = () => {
		toggleHandler(true)
		Animated.spring(backgroundAnim, {
			toValue: 1,
			useNativeDriver: false,
		}).start(({ finished }) => {
			!finished && backgroundAnim.setValue(1)
		});
	};
	const onPressOutHandler = () => {
		toggleHandler(false)
		Animated.spring(backgroundAnim, {
			toValue: 0,
			useNativeDriver: false,
		}).start(({ finished }) => {
			!finished && backgroundAnim.setValue(0)
		});
	};

	useEffect(() => {
		isActive && onPressInHandler();
		!isActive && onPressOutHandler();
	}, [isActive]);

	const animatedStyle = {
		backgroundColor: backgroundInterpolation,
	};
	return (
		<Pressable
			onPressIn={onPressInHandler}
			onPressOut={onPressOutHandler}
			onPress={onClick}
			disabled={disabled}
			hitSlop={50}
		>
			<Animated.View
				style={[
					styles.button,
					colors,
					style,
					styles[size],
					animatedStyle,
				]}
			>
				{children}
			</Animated.View>
		</Pressable>
	);
};

export default RoundButton;

const styles = StyleSheet.create({
	button: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},

	large: {
		height: 92,
		width: 92,
		borderRadius: 46,
	},
	med: {
		height: 72,
		width: 72,
		borderRadius: 36,
	},
	small: {
		height: 52,
		width: 52,
		borderRadius: 26,
	},
	primary: {
		borderColor: '#81d477',
		color: '#81d477',
		borderWidth: 2,
	},
	danger: {
		borderColor: '#CE5B5B',
		color: '#CE5B5B',
		borderWidth: 2,
	},
	secondary: {
		borderColor: '#434bae',
		borderWidth: 2,
		backgroundColor: '#434bae',
		color: 'black',
	},
	disabled: {
		borderColor: 'transparent',
		borderWidth: 0,
		backgroundColor: 'grey',
		color: 'white',
	},
});
