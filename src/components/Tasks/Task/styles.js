import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "dimgrey",
        marginBottom: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
    },
    headerIconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        fontWeight: 'bold',
    },
    editIcon: {
        marginRight: 20
    }
});

export default styles;
