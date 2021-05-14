/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
    TouchableOpacity,
    // View,
    StyleSheet,
    Text
} from "react-native";
import { whiteColor } from "../core";

interface Props {
    label: string;
    onPress: any
}

const CardOptions:React.FC<Props> = (props: Props) => {
    return (
        <TouchableOpacity onPress = {props.onPress}>
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
