import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Timeline from "react-native-timeline-flatlist";

const Notifications: React.FC = () => {
  const [data, setData] = useState<Notification[]>([]);
  useEffect(() => {
    setData([
      {
        time: "09:00",
        title: "Message du corps professoral",
        description:
          "The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ",
        circleColor: "#009688",
        lineColor: "#009688",
      },
      {
        time: "10:45",
        title: "Retard du rapport journalier",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
      },
      {
        time: "12:00",
        title: "Jour ferier",
        description: "Du 12 au 15 de ce mois il n'y a pas cours",
      },
      {
        time: "14:00",
        title: "Watch Soccer",
        description:
          "Team sport played between two teams of eleven players with a spherical ball. ",
        lineColor: "#009688",
      },
      {
        time: "16:30",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        circleColor: "#009688",
      },
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        separator={true}
        circleSize={20}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
        timeStyle={{
          textAlign: "center",
          backgroundColor: "#ff9797",
          color: "white",
          padding: 5,
          borderRadius: 13,
          overflow: "hidden",
        }}
        descriptionStyle={{ color: "gray" }}
        options={{
          style: { paddingTop: 5 },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
  },
  header: {
    paddingTop: 200,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default Notifications;
