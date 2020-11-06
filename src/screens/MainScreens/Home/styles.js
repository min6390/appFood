import {StyleSheet} from 'react-native';
import dimension from '../../../asset/utils/dimension';
export const styles = StyleSheet.create({
    btnFood: {
        alignItems: 'center',
        justifyContent:'center',
        margin: 5,
        width: dimension.getWidth() / 7,
        height: dimension.getWidth() / 7,
        borderRadius: 50,
        backgroundColor: '#dcdcdc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    listFood: {
        //     flex: 1,
        //     margin: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        width: dimension.getWidth() - 30,
        borderRadius: 5,
        borderColor:'#dcdcdc',
        borderWidth: 1,
        margin: 5,
        backgroundColor:'whitesmoke'
    },
    // },

    btnOrder: {
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        width: '30%',
        backgroundColor: 'red',
    },
});
