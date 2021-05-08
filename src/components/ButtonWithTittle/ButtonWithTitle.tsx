/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable @typescript-eslint/ban-types */
import React, { } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps{ 
    onTap: Function;
    width: number;
    height: number;
    title: string,
    isNoBg?: boolean
 }

const ButtonWithTitle: React.FC<ButtonProps> = ({ onTap, width, height, title, isNoBg = false }) => {

    if(isNoBg){
        return (
            <TouchableOpacity style={[styles.btn, { width, height, backgroundColor:"transparent" } ]} 
                onPress={() =>  onTap()}
            >
                <Text style={{ fontSize: 16, color: "#3980D9"}}>{title}</Text>
            </TouchableOpacity>
        );
    }else{
        
        return (
            <TouchableOpacity style={[styles.btn, { width, height } ]} 
                onPress={() =>  onTap()}
            >
                <Text style={{ fontSize: 16, color: "#FFF"}}>{title}</Text>
            </TouchableOpacity>
        );


    }

};


const styles = StyleSheet.create({
    btn: {
        flex: 1,
        display: "flex",  
        maxHeight: 50,
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#3c8df7",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
    },
    
});

export { ButtonWithTitle };