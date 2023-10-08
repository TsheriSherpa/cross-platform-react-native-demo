import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSideHeader}>
                <FontAwesome5 name="tasks" size={28} style={styles.icon} />
                <Text style={styles.title}>Todo App</Text>
            </View>
            <View style={styles.rightSideHeader}>
                <FontAwesome5 name="tasks" size={28} onPress={() => props.setModalVisible(true)}/>
            </View>
        </View>
    )
}

export default Header;