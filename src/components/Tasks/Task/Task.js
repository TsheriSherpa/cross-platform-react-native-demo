import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Task = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>ID: {props.task.id.substring(0,8)}</Text>
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
           <Text>Status: {props.task.taskDone}</Text>
           <Text>Description: {props.task.description}</Text>
        </View>
    )
}

export default Task;