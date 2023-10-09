import React from "react";
import styles from "./styles";
import Task from "./Task/Task";
import { View, Text, ScrollView } from "react-native";


const Tasks = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {props.tasks.map((task, id) => (
                <Task 
                        key={id} 
                        index={id}
                        task={task} 
                        handleEdit={props.handleEdit} 
                        handleDelete={props.handleDelete} 
                />
                ))}
            </View>
        </ScrollView>
    )
}

export default Tasks