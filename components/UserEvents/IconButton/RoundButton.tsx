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
import Icon from '../../UI/Icon';

interface props {
	onClick?: (event: GestureResponderEvent) => void;
	icon: 'close' | 'question' | 'check';
	disabled?: boolean;
	styling?: 'primary' | 'secondary';
	color?: 'correct' | 'error' | 'default';
	size?: 'large' | 'med' | 'small';
	buttonHook?: toggleButton;
}

const RoundButton: React.FC<props> = (props) => {
	const {
		onClick,
		disabled = false,
		styling = 'primary',
		color = 'default',
		icon,
		size = 'med',
		buttonHook = {
			isActive: false,
			toggleButtonHandler: () => {},
			isSwipeActive: false,
			isButtonActive: false,
		},
	} = props;

	const { isActive, isSwipeActive, toggleButtonHandler } = buttonHook;

	useEffect(() => {
		isSwipeActive && startBtnFocusAnimation();
		!isSwipeActive && startBtnBlurAnimation();
	}, [isSwipeActive]);

	const animatedRef = useRef(new Animated.Value(0)).current;

	const isSecondaryBtn = styling === 'secondary';
	const secondaryColor = isSecondaryBtn ? Colors[color] : 'rgb(255,255,255)';
	const mainColor = isSecondaryBtn ? 'rgb(255,255,255)' : Colors[color];

	const backgroundColor = animatedRef.interpolate({
		inputRange: [0, 1],
		outputRange: [secondaryColor, mainColor],
	});

	const iconColor = isActive ? secondaryColor : mainColor;

	const colors = disabled ? styles.disabled : styles[color];

	const startBtnFocusAnimation = () => {
		Animated.spring(animatedRef, {
			toValue: 1,
			useNativeDriver: false,
		}).start();
	};
	const startBtnBlurAnimation = () => {
		Animated.spring(animatedRef, {
			toValue: 0,
			useNativeDriver: false,
		}).start();
	};

	const onPressInHandler = () => {
		toggleButtonHandler(true);
		startBtnFocusAnimation();
	};
	const onPressOutHandler = () => {
		toggleButtonHandler(false);
		startBtnBlurAnimation();
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
					styles[size],
					{ backgroundColor },
				]}
			>
				<Icon name={icon} size={size} color={iconColor} />
			</Animated.View>
		</Pressable>
	);
};

export default RoundButton;

const styles = StyleSheet.create({
	button: {
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
	correct: {
		borderColor: Colors.correct,
		borderWidth: 2,
	},
	error: {
		borderColor: Colors.error,
		borderWidth: 2,
	},
	default: {
		borderColor: Colors.default,
		borderWidth: 2,
	},
	disabled: {
		borderColor: 'transparent',
		borderWidth: 0,
		backgroundColor: 'grey',
		color: 'white',
	},
});
