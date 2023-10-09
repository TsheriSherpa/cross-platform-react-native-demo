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
        alignItems: 'flex-end'
    },
    headerIconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    title: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    editIcon: {
        marginRight: 20
    },
    label: {
        fontWeight: 'bold'
    },
    bodyText: {
        fontWeight: 'normal'
    },
    statusView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    body: {
        marginTop: 20
    }
});

export default styles;
