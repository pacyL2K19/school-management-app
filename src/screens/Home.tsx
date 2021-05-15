import React from "react";
import {
    ScrollView
} from "react-native";

import { CardOptions, HeaderHome } from "../components/";
import { HomeOption } from "../types";
import img from "../assets/icon.jpeg";

// interface Props {
//     options: [HomeOption]
// }

const Home:React.FC = () => {

    // const handleNavigate = (screen: string): void => {
    //     console.log(screen);
    // };

    return (
        <ScrollView>
            <HeaderHome school={{label: "Itig", slogan: "Duc In Altum"}} />
            {/* {
                props.options.map(option => (
                    <CardOptions
                        icon={img}
                        routeName = "Home"
                        onPress = {() => console.log("Event ")}
                        label={option.label}
                        key={option.routeName} 
                    />
                ))
            } */}
        </ScrollView>
    );
};

export default Home;