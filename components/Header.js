import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = ({title}) => {
    return(
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
    headerStyle :{
        height : "8%",
        width :"100%",
        backgroundColor : "#FF5733",
        elevation : 1,
        justifyContent :"center",
        alignItems :"center"
    },
    textStyle:{
        color :"white",
        fontSize :25,
        fontWeight :"bold"
    }
})