import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { bgHomeColor } from "../core/theme/colors";

const SchoolsSkeleton: React.FC = () => {
  const WIDTH_DEVICE = Dimensions.get("window").width;
  const HEIGHT_DEVICE = Dimensions.get("window").height;
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 100,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: bgHomeColor,
      }}
    >
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop={50}
        >
          <SkeletonPlaceholder.Item
            marginVertical={15}
            marginLeft={20}
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <SkeletonPlaceholder.Item
              width={WIDTH_DEVICE / 2.3}
              marginRight={10}
              marginLeft={-15}
              height={HEIGHT_DEVICE / 4}
              borderRadius={5}
            />
            <SkeletonPlaceholder.Item
              width={WIDTH_DEVICE / 2.3}
              height={HEIGHT_DEVICE / 4}
              borderRadius={5}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
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
});

export default SchoolsSkeleton;
