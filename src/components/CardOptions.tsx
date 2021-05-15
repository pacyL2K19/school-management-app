/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React from "react";
import {
    TouchableOpacity,
    // View,
    StyleSheet,
    Image,
    Text
} from "react-native";
import { whiteColor } from "../core";
import { HomeOption } from "../types";

const CardOptions:React.FC<HomeOption> = (props: HomeOption) => {
    return (
        <TouchableOpacity onPress = {props.onPress}>
            <Image
                source={props.icon}
            />
            <Text style = {styles.text}>
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        color: whiteColor
    }
});

export default CardOptions;
