import auth from '@react-native-firebase/auth';

const emailSignIn = (email, password, onSuccess, onError) => {

    if (email && password) {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                onSuccess && onSuccess();
            })
            .catch(error => {
                onError && onError()
            })
    }
};
export {emailSignIn}
