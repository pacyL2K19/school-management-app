import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
    schoolName: String
}

const WIDTH_DEVICE = Dimensions.get("window").width;
const HEIGHT_DEVICE = Dimensions.get("window").height;

const HeaderHome: React.FC<Props> = (props: Props) => {
    return (
        <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.header}
        >
            <Text style={styles.welcome}>
                Bienvenue
            </Text>
            <Text>
                {props.schoolName}
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    welcome: {

    },
    header: {
        paddingTop: HEIGHT_DEVICE / 4
    }
})

export default HeaderHome;
