import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Task = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Task {props.index + 1}</Text>
                <View style={styles.headerIconView}>
                    <AntDesign
                        size={24}
                        color="black"
                        name="edit"
                        style={styles.editIcon}
                        onPress={() => props.handleEdit(props.task.id)}
                    />
                    <AntDesign
                        size={24}
                        color="black"
                        name="delete"
                        style={styles.closeIcon}
                        onPress={() => props.handleDelete(props.task.id)}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.label}>ID: 
                    <Text style={styles.bodyText}>{props.task.id}</Text>
                </Text>
                <View style={styles.statusView}>
                    <Text style={styles.label}>Status: </Text>
                    <Ionicons
                        size={24}
                        color="black"
                        name={props.task.done ? "checkmark-done" : "ios-time-outline"}
                        style={styles.closeIcon}
                    />
                </View>
            </View>
           <Text  style={styles.label}>Description: 
                <Text style={styles.bodyText}>{props.task.description}</Text>
            </Text>
        </View>
    )
}

export default Task;