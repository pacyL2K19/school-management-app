import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
// import { primaryButtonColor, whiteColor } from "../core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { School } from "../../types";
import logo from "../../assets/logo.jpg";
// import { HomeOption } from "../types";

const SchoolCard: React.FC<School> = (props: School) => {
  return (
    <TouchableOpacity>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.label}>
        {props.label}
      </Text>
      <Text style={styles.slog}>
        {props.slogan}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  label: {
    fontSize: 18
  },
  slog: {
    fontSize: 14
  }
});

export default SchoolCard;
