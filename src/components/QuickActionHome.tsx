/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";
import attendance from "../assets/attendance.png";
import { blackTextColor, whiteColor, secondaryTextColor } from "../core";

const QuickActionHome: React.FC = () => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.imgContainer}>
                <Image
                    source={attendance}
                    style={styles.image}
                />
            </View>
            <View style={styles.texts}>
                <Text style={styles.textMain}>
                    Signaler un retard
                </Text>
                <Text style={styles.textSecond}>
                    Pour eviter une absence non justifiee, veuillez signaler votre retard
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: whiteColor,
        marginHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 10,
        marginVertical: 10
    },
    imgContainer: {
        padding: 5,
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    textMain: {
        fontSize: 20,
        color: blackTextColor,
    },
    textSecond: {
        fontSize: 12,
        color: secondaryTextColor
    },
    texts: {
        flex: 1
    }
});

export default QuickActionHome;