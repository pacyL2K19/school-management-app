/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from "react-native";
import { whiteColor } from "../core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CardOptions: React.FC<HomeOption> = (props: HomeOption) => {
    return (
        <TouchableOpacity onPress={() => console.log(props.routeName)}>
            <View style={styles.iconContainer}>
                <Icon name={props.icon} />
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
    text: {
        color: whiteColor
    },
    iconContainer: {
        backgroundColor: whiteColor
    },
    details: {
        
    }
});

export default CardOptions;
