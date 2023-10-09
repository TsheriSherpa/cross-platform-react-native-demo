import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        padding: 20
    },  
    header: {
        height: 60,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        justifyContent: 'space-between'
    },

    titleView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },  

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        marginTop: 20,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },

    switchSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },

    addButton: {
        borderRadius: 10,
        width: 10
    }
});

export default styles;
