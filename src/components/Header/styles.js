import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'grey',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        padding: 10,
        alignSelf: 'stretch',

    },

    icon: {
        marginRight: 15
    },

    leftSideHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        width: '50%',
    },
    
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }

    
});

export default styles;
