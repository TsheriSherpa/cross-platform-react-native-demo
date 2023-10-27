import Form from "./src/components/Form/Form";
import uuid from 'react-uuid';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from "./src/components/Homepage/Homepage";

export default function App() {

	const [taskToEdit, setTaskToEdit] = useState(false);
	const [tasks, setTasks] = useState([])

	const handleAddTask = (description, taskDone, id = false) => {

		if (id) {
			console.log(id)

			const updatedTasks = tasks.map(task => {
				if (task.id === id) {
				  return { ...task, description: description, done: taskDone }; // Modify the property you want to update
				}
				return task;
			  });
		  
			setTasks(updatedTasks);
			setTaskToEdit(null)
		} else {
			const newTasks = [...tasks];
			newTasks.push(
				{
					id: uuid(),
					description: description,
					done: taskDone
				}
			)

			setTasks(newTasks)
		}
	}


	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="Homepage">
					{() => 
						<Homepage
							onAddTask={handleAddTask}
							setTaskToEdit={setTaskToEdit}
							setTasks={setTasks}
							tasks={tasks}

						/>
					}
				</Tab.Screen>
				<Tab.Screen name="Form">
					{() => 
						<Form
							onAddTask={handleAddTask}
							task={taskToEdit}
						/>
					}
				</Tab.Screen>
				
			</Tab.Navigator>
		</NavigationContainer>
	);
}