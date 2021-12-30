/** @format */

import { StyleSheet, View } from 'react-native';

interface props {
	progress?: number;
    color?: string
}

const ProgressBar: React.FC<props> = (props) => {
	const { progress = 0, color = '#414BB5' } = props;

    const progressCustomStyle = { width: `${progress}%`, backgroundColor: color }
	return (
		<View style={styles.container}>
			<View style={{...styles.progressBar, ...progressCustomStyle}}></View>
		</View>
	);
};

export default ProgressBar;

const styles = StyleSheet.create({
	container: {
        height: 20,
        borderRadius:24,
        overflow: 'hidden',
        backgroundColor: 'grey'
	},
    progressBar: {
		height: '100%',
	},
});
