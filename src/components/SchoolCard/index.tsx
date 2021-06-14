import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { School } from "../../types";
import logo from "../../assets/logo.jpg";
import { whiteColor } from '../../core/theme/colors';

const SchoolCard: React.FC<School> = (props: School) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(props.id)}
    >
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
    marginVertical: 5
  },
  label: {
    fontSize: 18
  },
  slog: {
    fontSize: 14
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width / 2.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default SchoolCard;
