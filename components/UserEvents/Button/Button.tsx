/** @format */
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';

interface props {
	onClick?: (event: GestureResponderEvent) => void;
	disabled?: boolean;
	styling?: 'primary' | 'secondary';
	style?: {};
}

const Button: React.FC<props> = (props) => {
	const {
		children,
		onClick,
		disabled = false,
		styling = 'primary',
		style = {},
	} = props;

	let colors = styles.primary;
	styling === 'secondary' && (colors = styles.secondary);
	disabled && (colors = styles.disabled);

	return (
		<TouchableOpacity
			onPress={onClick}
			activeOpacity={0.7}
			disabled={disabled}
			style={styles.container}
		>
			<Text style={{ ...styles.button, ...colors, ...style }}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 28,
		textAlign: 'center',
		overflow: 'hidden',
	},
	primary: {
		backgroundColor: '#414BB5',
		color: 'white',
	},
	secondary: {
		backgroundColor: '#CE5B5B',
		color: 'white',
	},
	disabled: {
		backgroundColor: 'grey',
		color: 'white',
	},
});
