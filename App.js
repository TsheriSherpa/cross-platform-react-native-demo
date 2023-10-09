import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header/Header";
import Form from "./src/components/Form/Form";
import Tasks from "./src/components/Tasks/Tasks";
import styles from "./src/styles/main";
import uuid from 'react-uuid';
import { useState } from 'react';

export default function App() {

	const [taskToEdit, setTaskToEdit] = useState(false);
	const [tasks, setTasks] = useState([])
	const [modalVisible, setModalVisible] = useState(false)

	const handleAddTask = (description, taskDone, id = false) => {

		if (id) {
			setTasks(tasks =>
				tasks.map(task =>
					task.id == id ? { ...task, description: description, done: taskDone } : task
				)
			);
		} else {
			const updatedTasks = [...tasks];
			updatedTasks.push(
				{
					id: uuid(),
					description: description,
					done: taskDone
				}
			)

			setTasks(updatedTasks)
		}
	}

	const handleEdit = (id) => {
		setTaskToEdit(tasks.filter(task => task.id == id)[0])
		setModalVisible(!modalVisible)
	}

	const handleDelete = (id) => {
		setTasks(tasks => tasks.filter(task => task.id != id))
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header setModalVisible={setModalVisible} />
			<Tasks 
				tasks={tasks} 
				handleEdit={handleEdit} 
				handleDelete={handleDelete}
			/>
			<Form
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				onAddTask={handleAddTask}
				task={taskToEdit}
			/>
		</View>
	);
}