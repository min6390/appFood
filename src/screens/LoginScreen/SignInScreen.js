import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';
import {colors} from '../../asset/colors/colors';
import auth from '@react-native-firebase/auth';
// import styles from './styles';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            spinner: false,
        };
    }

    emailSignIn = () => {
        const {email, password} = this.state;
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

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        source={require('../../asset/image/fooding.jpg')}/>
                </View>
                <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginBottom: 20}}>LOGIN</Text>
                <View style={{flex: 6}}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Enter your Email'}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                        onChangeText={email => {
                            this.setState({email});
                        }}
                        value={this.state.email}/>
                    <TextInput
                        maxLength={15}
                        style={styles.textInput}
                        placeholder={'Enter your Password'}
                        secureTextEntry
                        ref={'txtPassword'}
                        onChangeText={password => {
                            this.setState({password});
                        }}
                        value={this.state.password}/>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={styles.buttonView}
                                          onPress={this.emailSignIn}>
                            <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>Sign in</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>OR</Text>
                        <TouchableOpacity style={styles.buttonView}>
                            <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewButtonRow}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={{fontSize: 15, textAlign: 'center', color: '#708090'}}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={{fontSize: 15, textAlign: 'center', color: '#708090'}}>Forgot your password
                                ?</Text>
                        </TouchableOpacity>
                    </View>
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

});
