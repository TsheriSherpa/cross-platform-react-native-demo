import React from "react";
import styles from "./styles";
import Task from "./Task/Task";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export default Tasks = () => {
    return (
        <View style={styles.container}>
            <Task/>
        </View>
    )
}