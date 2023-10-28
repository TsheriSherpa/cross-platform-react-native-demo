import Form from "./src/components/Form/Form";
import uuid from 'react-uuid';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from "./src/components/Homepage/Homepage";
import { Ionicons } from "@expo/vector-icons";

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
			<Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {
				paddingBottom: 5,
				height: 60
			} }}>
				<Tab.Screen name="Homepage"
				options={{
					tabBarLabel: 'Homepage',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),
				}}>
					{() => 
						<Homepage 
							onAddTask={handleAddTask}
							setTaskToEdit={setTaskToEdit}
							setTasks={setTasks}
							tasks={tasks}

						/>
					}
				</Tab.Screen>
				<Tab.Screen name="Form"
					options={{
						tabBarLabel: 'Add Todo',
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="create" color={color} size={size} />
						),
					}}>
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