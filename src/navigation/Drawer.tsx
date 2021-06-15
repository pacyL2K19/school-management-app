import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./BottomNav";
import DrawerContent from "./components/DrawerContent";

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Tabs} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
