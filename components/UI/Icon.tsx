/** @format */

import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { iconSizes } from '../../constants/Size';
import { iconNames, sizes } from '../../types';
interface props {
	name: iconNames;
	size: sizes;
	color: string;
}
const Icon: React.FC<props> = (props) => {
	const { name, size, color } = props;

	const iconSize = iconSizes[size];
	if (name === 'calendar') {
		return (
			<Ionicons name="ios-today-sharp" color={color} size={iconSize} />
		);
	}

	if (name === 'trophy') {
		return (
			<Ionicons name="ios-trophy-sharp" color={color} size={iconSize} />
		);
	}
	if (name === 'curved-flag') {
		return <Entypo name="flag" color={color} size={iconSize} />;
	}

	return <AntDesign name={name} color={color} size={iconSize} />;
};
export default Icon;
