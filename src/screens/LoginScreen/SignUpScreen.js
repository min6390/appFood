import React, {Component} from 'react';

import {View, Image, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import inputLogin from '../../components/inputLogin';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    emailSignUp = () => {
        const {email, password} = this.state;
        if (email && password) {
            if (password.length > 5) {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => Alert.alert(
                        'Alert Title',
                        'Create Account Success',
                        [
                            {text: 'OK', onPress: () => this.props.navigation.navigate('SignIn')},
                        ],
                        {cancelable: false},
                    ))
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


    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        source={require('../../asset/image/fooding.jpg')}/>
                </View>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginVertical: 10,
                    }}>REGISTER</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter your Email'}
                    keyboardType={'email-address'}
                    returnKeyType={'next'}/>
                <TextInput
                    maxLength={15}
                    style={styles.textInput}
                    placeholder={'Enter your Password'}
                    secureTextEntry
                    ref={'txtPassword'}/>
                <View style={{marginTop: 10}}>
                    <TouchableOpacity style={styles.buttonView}
                                      onPress={this.emailSignUp}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>Create to Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewButtonRow}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                        <Text style={{fontSize: 15, textAlign: 'center', color: '#708090'}}>Back to Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
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
        backgroundColor: '#8fbc8f',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1 / 2,
        borderRadius: 8,
        borderColor: 'gray',
    },
    viewButtonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,

    },
});
