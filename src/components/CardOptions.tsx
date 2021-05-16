import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Dimensions
} from "react-native";
import { primaryButtonColor, whiteColor } from "../core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CardOptions: React.FC<HomeOption> = (props: HomeOption) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log(props.routeName)}>
            <View style={styles.iconContainer}>
                <Icon name={props.icon} size={30} />
            </View>
            <Text style={styles.text}>
                {props.label}
            </Text>
            <Text style={styles.details}>
                100 Eleves aujourd'hui
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryButtonColor,
        borderRadius: 5,
        width: (Dimensions.get("window").width / 2) - 40,
        marginHorizontal: 20,
        padding: 15,
        height: 150,
        marginBottom: 40,
        elevation: 5
    },
    text: {
        color: whiteColor,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    iconContainer: {
        backgroundColor: whiteColor,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    details: {
        position: "absolute",
        color: whiteColor,
        fontSize: 12,
        bottom: 15,
        left: 15,
        right: 15
    }
});

export default CardOptions;
