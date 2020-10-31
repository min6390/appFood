
import {StyleSheet,} from 'react-native';
import {colors} from '../../../asset/colors/colors';

export const styles= StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: 'white',
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: 'black',
        backgroundColor: '#dcdcdc',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1 / 2,
        borderRadius: 10,
        borderColor: 'gray',
    },
    buttonView: {
        color: 'black',
        backgroundColor: colors.tabBarColor,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1 / 2,
        borderRadius: 8,
        borderColor: 'gray',
    },
    viewButtonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
    },
    txtViewLogin:{
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    txtView:{
        fontSize: 15,
        textAlign: 'center',
        color: '#708090'
    },
});

