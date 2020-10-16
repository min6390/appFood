import {Dimensions} from 'react-native';

const getWidth = () => {
    return Dimensions.get('window').width;
};
const getHeight = () => {
    return Dimensions.get('window').height;
};

export default {getHeight, getWidth};
