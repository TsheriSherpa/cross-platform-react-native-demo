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
        height: 60,
        alignItems: 'center'

    },

    icon: {
        marginRight: 15
    },

    leftSideHeader: {
        display: 'flex',
        flexDirection: 'row',
    },
    
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }

    
});

export default styles;
