import React from "react";
import {
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { CardOptions, HeaderHome } from "../components/";
import { HomeOption } from "../types";
import img from "../assets/icon.jpeg";

// interface Props {
//     options: [HomeOption]
// }

const Home:React.FC = () => {

    // const handleNavigate = (screen: string): void => {
    //     console.log(screen);
    // };

    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerSubContainer}>
                    {/* <TouchableOpacity> */}
                        <Icon name="menu" size={30} />
                    {/* </TouchableOpacity> */}
                </View>
            </View>
            <HeaderHome school={{label: "ITIG Don Bosco", slogan: "Duc In Altum"}} />
            {/* {
                props.options.map(option => (
                    <CardOptions
                        icon={img}
                        routeName = "Home"
                        onPress = {() => console.log("Event ")}
                        label={option.label}
                        key={option.routeName} 
                    />
                ))
            } */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        // backgroundColor: "#fff",
        zIndex: 10
    },
    headerSubContainer: {
        flex: 1,
        flexDirection: "row"
    }
})

export default Home;