/** @format */

import { View, StyleSheet } from 'react-native';
interface props {
	index?: number;
}

const Card: React.FC<props> = (props) => {
	const { children, index = 0 } = props;
    const shadowOpacity = 0.06-index*0.006
	const shadow = {
		shadowOpacity
	};
	return <View style={[styles.card, shadow]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 24,
		justifyContent: 'space-between',
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
	},
});
