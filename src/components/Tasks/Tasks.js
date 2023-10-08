import React from "react";
import styles from "./styles";
import Task from "./Task/Task";
import { View, Text } from "react-native";


const Tasks = (props) => {
    return (
        <View style={styles.container}>
            {props.tasks.map((task, id) => (
               <Task 
               key={id} 
               task={task} 
               handleEdit={props.handleEdit} 
               handleDelete={props.handleDelete} 
            />
            ))}
        </View>
    )
}

export default Tasks