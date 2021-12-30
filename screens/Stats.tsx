/** @format */

import { View, StyleSheet } from 'react-native';
import Terminal from '../components/UI/Code/Terminal/Terminal';
import Yaml from '../components/UI/Code/Yaml/Yaml';
import code from '../data/terminal.json';

interface props {}
const Stats: React.FC<props> = (props) => {
	const YamlCode = "services:%n%t[service_name]:%n%t%t%build:%n%t%t%t%- ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro ";
	return (
		<View style={styles.container}>
			{code.map((el) => (
				<Terminal code={el.code} key={el.key} />
			))}
			<Yaml code={YamlCode}/>
		</View>
	);
};

export default Stats;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
	},
});
