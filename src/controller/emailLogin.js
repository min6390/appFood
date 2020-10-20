import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signIn= ({email,password}) => {
    if (email && password) {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate('Home');
            })
            .catch(error =>
                this.setState({errorMessage: error.message},
                    Alert.alert(
                        'Error',
                        'Sai tài khoản or Mật khẩu',
                        [{text: 'OK'}])));
    }
};
export default signIn
