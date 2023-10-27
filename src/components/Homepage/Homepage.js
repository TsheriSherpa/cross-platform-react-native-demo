import { View } from "react-native";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import styles from "./styles";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Homepage(props) {
	return (
		<SafeAreaView style={{ flex:1 }}>
			<View style={styles.container}>
				<Header />
				<Tasks 
					tasks={props.tasks} 
					setTaskToEdit={props.setTaskToEdit}
					setTasks={props.setTasks}
				/>
			</View>
		</SafeAreaView>
	);
}