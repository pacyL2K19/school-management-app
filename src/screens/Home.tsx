import React from "react";
import {
    ScrollView
} from "react-native";

import { CardOptions, HeaderHome } from "../components/";
import { HomeOption } from "../types";

interface Props {
    options: [HomeOption]
}

const Home:React.FC<Props> = (props: Props) => {

    const handleNavigate = (screen: string): void => {
        console.log(screen);
    };

    return (
        <ScrollView>
            <HeaderHome schoolName="ITIG Don Bosco" />
            {
                props.options.map(option => (
                    <CardOptions label={option.label} onPress={handleNavigate(option.routeName)} key={option.routeName} />
                ))
            }
        </ScrollView>
    );
};

export default Home;