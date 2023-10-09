import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        padding: 20,
        borderWidth: 2,
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'lightgrey'
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
    },
    errorMessageView: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5,
        marginTop: 20,
    },

    errorMessage: {
        color: 'red',
        fontWeight: 'bold'
    }
});

export default styles;
