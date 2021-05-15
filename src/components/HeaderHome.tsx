import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { primaryButtonColor } from "../core/theme/colors"
import { School } from "../types";

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
        fontSize: 20
    },
    header: {
        paddingTop: HEIGHT_DEVICE / 5,
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: primaryButtonColor,
        borderBottomRightRadius: WIDTH_DEVICE / 3
    },
    schoolSlogan: {

    },
    schoolName: {

    }
})

export default HeaderHome;
