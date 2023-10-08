import React, { useEffect, useState } from 'react';
import {
    Modal,
    Text,
    TextInput,
    View,
    Switch,
    Button
} from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';


const Form = (props) => {

    const [taskDone, setTaskDone] = useState(props.task ? props.task.taskDone : false);
    const [taskDescription, setTaskDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleSwitch = () => setTaskDone((previousState) => !previousState);

    // useEffect(() => {
    //     console.log(props.task)
    //     if (props.task) {
    //         setTaskDone(props.task.done)
    //         setTaskDescription(props.task.description)
    //     }
    // }, [])



    const handleAddPress = () => {
        if (taskDescription) {
            if (props.task) {
                props.onAddTask(taskDescription, props.task.id);
            }else{
                props.onAddTask(taskDescription, taskDone);
            }
            setTaskDone(false);
            setTaskDescription("");
            props.setModalVisible(false);
        }
        else {
            setErrorMessage('The description field is required.');
        }
    }

    const handleDescriptionChange = (value) => {
        setTaskDescription(value);
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            style={styles.modalContainer}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}>

            <View style={styles.header}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{props.task ? 'SAVE' : 'ADD'}</Text>
                </View>
                <AntDesign
                    size={24}
                    color="black"
                    name="closecircleo"
                    style={styles.closeIcon}
                    onPress={() => props.setModalVisible(!props.modalVisible)}
                />
            </View>

            <View style={styles.modalContainer}>
                <TextInput
                    placeholder='Enter a task description'
                    maxLength={150}
                    onChangeText={handleDescriptionChange}
                    defaultValue={taskDescription}
                    style={styles.input}
                    activeUnderlineColor="green"
                    value={props.task ? props.task.description : taskDescription}
                />
                <View style={styles.switchSection}>
                    <Text style={{ fontWeight: "bold" }}>Task Completed:</Text>
                    <Switch
                        style={styles.switchButton}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={taskDone ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={props.task ? props.task.done : taskDone}
                    />
                </View>
                <Button style={styles.addButton} title='SAVE' onPress={handleAddPress} />
            
                {errorMessage && (
                    <View>
                        <Text style={styles.errorMessage}>Attention: {errorMessage} </Text>
                    </View>
                )}
            </View>
        </Modal>
    );
};

export default Form;