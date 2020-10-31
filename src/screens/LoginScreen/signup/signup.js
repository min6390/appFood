import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const emailSignUp = (email, password,onSuccess,) => {
    if (email && password) {
        if (password.length > 5) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(onSuccess && onSuccess())
                .catch(error =>
                    this.setState(
                        {errorMessage: error.message},
                        this.setState({spinner: false}),
                    ));
        } else {
            Alert.alert(
                'Error',
                'Password hơn 6 kí tự ',
                [{text: 'OK'}]);
        }
    }
};
export {emailSignUp}
