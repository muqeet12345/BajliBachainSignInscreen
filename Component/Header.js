import { View,Text } from "react-native";
import react from "react";

const Header = (props) => {
    return(
        <View style={{marginLeft:15}}>
            <Text style={{fontWeight:'bold', fontsize:10}}>
                {props.name}
            </Text>
            </View>
        
    )
}
export default Header;