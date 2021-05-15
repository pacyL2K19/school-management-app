import React from "react";
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import { Avatar } from 'react-native-paper';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { CardOptions, HeaderHome } from "../components/";
import { HomeOption } from "../types";
import img from "../assets/icon.jpeg";
import avatar from "../assets/teacher.png";
import { bgTextInputColor, whiteColor } from "../core";

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
                    <TouchableOpacity style={styles.humburger}>
                        <Icon name="menu" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.rightHeader}>
                        <TouchableOpacity style={{marginRight: 20}}>
                            <Text style={styles.badge}>10</Text>
                            <MaterialIcon name="notifications-none" color={bgTextInputColor} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Avatar.Image size={40} source={avatar} />
                        </TouchableOpacity>
                    </View>
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
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    rightHeader: {
        flexDirection: "row"
    },
    humburger: {
        padding: 5,
        backgroundColor: bgTextInputColor,
        borderRadius: 20
    },
    badge: {
        position: "absolute",
        right: 0, 
        top: 0,
        fontSize: 10,
        backgroundColor: "red",
        padding: 2,
        borderRadius: 10,
        color: whiteColor,
        zIndex: 1
    }
})

export default Home;