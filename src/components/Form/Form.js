import React, { useEffect, useState } from 'react';
import {
    Text,
    TextInput,
    View,
    Switch,
    Button
} from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Form = (props) => {
    const [taskDone, setTaskDone] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleSwitch = () => setTaskDone((previousState) => !previousState);

    useEffect(() => {
        if (props.task) {
            setTaskDone(props.task.done)
            setTaskDescription(props.task.description)
        }
    }, [props.task])

    const handleAddPress = () => {
        if (taskDescription) {
            if (props.task) {
                props.onAddTask(taskDescription, taskDone, props.task.id);
            }else{
                props.onAddTask(taskDescription, taskDone);
            }
            setTaskDone(false);
            setTaskDescription("");
            setErrorMessage('')
            navigation.goBack()
        }
        else {
            setErrorMessage('The description field is required.');
        }
    }

    const handleDescriptionChange = (value) => {
        setTaskDescription(value);
    }

    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top }} >
            <View style={styles.header}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{props.task ? 'SAVE' : 'ADD'}</Text>
                </View>
            </View>

            <View style={styles.modalContainer}>
                <TextInput
                    placeholder='Enter a task description'
                    maxLength={150}
                    onChangeText={handleDescriptionChange}
                    style={styles.input}
                    activeUnderlineColor="green"
                    value={taskDescription}
                />
                <View style={styles.switchSection}>
                    <Text style={{ fontWeight: "bold" }}>Task Completed:</Text>
                    <Switch
                        style={styles.switchButton}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={taskDone ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={taskDone}
                    />
                </View>
                <Button style={styles.addButton} title='SAVE' onPress={handleAddPress} />
            
                {errorMessage && (
                    <View style={styles.errorMessageView}>
                        <Text style={styles.errorMessage}>Attention: {errorMessage} </Text>
                    </View>
                )}
            </View>
        </View>          
    );
};

export default Form;