/** @format */

import { View, StyleSheet, Text } from 'react-native';
import ProgressBar from '../ProgressBar/ProgressBar';
interface props{
    progress:number
}
const Header: React.FC<props> = (props) => {
    const {progress} = props
	return (
		<View style={styles.header}>
			<ProgressBar progress={progress} />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});
