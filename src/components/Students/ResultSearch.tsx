import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { whiteColor } from '../../core/theme/colors';

type ProtUser = {
    name: string,
    id: string
}

interface Props {
  listUser: ProtUser[] | null
}

const ResultSearch: React.FC<Props> = (props: Props) => {
  const list = [
    {
      name: "kakule Likoko",
      id: 1,
    },
    {
      name: "kambale hhh",
      id: 2,
    },
    {
      name: "kiko Lipa",
      id: 3,
    },
  ];
  return (
    <View style={styles.content}>
      {props.listUser?.map((el) => (
        <TouchableOpacity key={el.id} style={{
            paddingVertical: 15
        }}>
          <Text>{el.name}</Text>
          <View style={{height: 1, backgroundColor: "white", marginTop: 5}}></View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
  },
  content: {
    left: 20,
    backgroundColor: whiteColor,
    elevation: 5,
    paddingHorizontal: 20,
  },
});

export default ResultSearch;
