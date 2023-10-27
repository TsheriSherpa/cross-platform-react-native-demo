import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "dimgrey",
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        width: "100%",
        height: 160
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'grey',
        padding: 15
    },
    headerIconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15
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
        padding: 10,
        marginTop: 10
    }
});

export default styles;
