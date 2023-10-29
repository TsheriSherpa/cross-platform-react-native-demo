import React from "react";
import styles from "./styles";
import Task from "./Task/Task";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Tasks = (props) => {
    const handleEdit = (id) => {
		props.setTaskToEdit(props.tasks.filter(task => task.id == id)[0])
        navigation.navigate("Form", {task: props.tasks.filter(task => task.id == id)[0]})
	}

	const handleDelete = (id) => {
		props.setTasks(tasks => tasks.filter(task => task.id != id))
	}

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                {props.tasks.length < 1 && <Text>No todo list to display</Text>}
                {props.tasks.map((task, id) => (
                    <Task 
                        key={id} 
                        index={id}
                        task={task} 
                        handleEdit={handleEdit} 
                        handleDelete={handleDelete} 
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default Tasks