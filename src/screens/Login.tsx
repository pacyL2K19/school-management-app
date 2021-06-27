import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextField } from "../components";
import { ButtonWithTitle } from "../components/ButtonWithTittle/ButtonWithTitle";
import { connect } from "react-redux";
import {
  ApplicationState,
  OnUserLogin,
  OnUserSignup,
  UserState,
} from "../redux";

import topImg from "../assets/logo.jpg";
import { whiteColor } from "../core";
import { NavigationScreenProp } from "react-navigation";
import { Login } from "../ApiClient";
import { MyGlobalContext } from "../context/index";
import { dangerColor } from "../core/theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginProps {
  OnUserLogin: Function;
  OnUserSignup: Function;
  userReducer: UserState;
  navigation: NavigationScreenProp<any, any>;
}

const _LoginScreen: React.FC<LoginProps> = ({
  OnUserLogin,
  OnUserSignup,
  userReducer,
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title] = useState("Connexion");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { accountInfo, setAccountInfo } = useContext(MyGlobalContext);

  const onTapAuthenticate = async () => {
    setLoading(true);
    const response = await Login(email, password);
    if (response?.success) {
      console.log(response);
      if (accountInfo?.schoolId.toString() !== response.user.id.toString()) {
        setMessage("Cette ecole ne reconnait pas votre compte");
        setLoading(false);
      } else {
        setAccountInfo({
          schoolId: response?.user.SchoolId,
          teachearId: response?.user.id,
          fName: response?.user.FName,
          lName: response?.user.LName,
          mName: response?.user.MName,
          email: response?.user.Email,
          phone: response?.user.Phone,
          address: response?.user.Address,
        });
        AsyncStorage.setItem("currentUser", JSON.stringify(response.user))
          .then(() => {
            setLoading(false);
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setMessage("Email ou mot de passe incorrect, veuillez reessayer");
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={topImg} style={styles.img} />
      <View>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginBottom: 30,
            fontWeight: "400",
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.body}>
        <TextField
          placeholder="Adresse email"
          onTextChange={setEmail}
          isSecure={false}
        />
        <TextField
          placeholder="Mot de passe"
          onTextChange={setPassword}
          isSecure={true}
        />
        <ButtonWithTitle
          title={loading ? "Loading ..." : "Connexion"}
          height={50}
          width={Dimensions.get("window").width - 60}
          onTap={onTapAuthenticate}
        />
        <View style={{ backgroundColor: dangerColor, marginTop: 20 }}>
          {message !== "" && (
            <Text style={{ color: whiteColor, padding: 10 }}>{message}</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    paddingTop: Dimensions.get("window").height / 15,
  },
  textLink: {
    marginLeft: "50%",
    marginVertical: 10,
    color: "gray",
  },
  body: {
    alignItems: "center",
    marginBottom: 100,
  },
  img: {
    alignSelf: "center",
    height: 100,
    borderRadius: 50,
    width: 100,
    margin: 15,
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
});

const LoginScreen = connect(mapStateToProps, { OnUserLogin, OnUserSignup })(
  _LoginScreen
);

export { LoginScreen };
