import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import {emailSignIn} from './signin';
import Spinner from 'react-native-loading-spinner-overlay';
import {styles} from '../signin/styles';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            spinner: false,
        };
    }

    onPressLogin = () => {
        const {email, password} = this.state;
        if (email && password !== '') {
            this.setState({spinner: true});
            emailSignIn(email, password, () => {
                this.setState({spinner: false});
                this.props.navigation.navigate('Home');
            }, () => {
                this.setState({spinner: false});
                Alert.alert(
                    'Error',
                    'Sai tài khoản or Mật khẩu',
                    [{text: 'OK'}]);
            });
        }
    };

    render() {
        const {email, password, spinner} = this.state;
        return (
            <ScrollView style={styles.container}>
                <Spinner visible={spinner}/>
                <View style={styles.imageView}>
                    <Image
                        source={require('../../../asset/image/fooding.jpg')}/>
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
                                          onPress={this.onPressLogin}>
                            <Text style={styles.txtViewLogin}>Sign in</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>OR</Text>
                        <TouchableOpacity style={styles.buttonView}>
                            <Text style={styles.txtViewLogin}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewButtonRow}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.txtView}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={styles.txtView}>Forgot your password
                                ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
