import { View ,StyleSheet} from "react-native";


const Card:React.FC = (props)=>{
    const {children}= props;
    return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    card:{
        flex:1,
        backgroundColor:'white',
        borderRadius:24,
        overflow: 'hidden',
		justifyContent: 'space-between',
    }
})