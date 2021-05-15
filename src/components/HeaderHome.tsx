import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { bgHomeColor } from "../core/theme/colors"

interface Props {
    school: School
}

const WIDTH_DEVICE = Dimensions.get("window").width;
const HEIGHT_DEVICE = Dimensions.get("window").height;

const HeaderHome: React.FC<Props> = (props: Props) => {
    return (
        <View
            style={styles.header}
        >
            <Text style={styles.welcome}>
                Bienvenue
            </Text>
            <Text style={styles.schoolName}>
                {props.school.label}
            </Text>
            <Text style={styles.schoolSlogan}>
                {props.school.slogan}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 25
    },
    header: {
        paddingTop: HEIGHT_DEVICE / 6,
        paddingHorizontal: 20,
        paddingBottom: 35,
        backgroundColor: bgHomeColor,
        borderBottomRightRadius: WIDTH_DEVICE / 3
    },
    schoolSlogan: {
        fontStyle: "italic"
    },
    schoolName: {
        fontSize: 32
    }
})

export default HeaderHome;
