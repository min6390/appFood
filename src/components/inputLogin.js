import {Image, Text, View, StyleSheet, TextInput, ScrollView, } from 'react-native';
import React from 'react';

const inputLogin = ({ txtPlaceholder}) => (
    <View>
    <TextInput
        style={styles.textInput}
        placeholder={txtPlaceholder}
        keyboardType={'email-address'}
        returnKeyType={'next'}/>
    </View>
);
const styles = StyleSheet.create({
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
});
export default inputLogin
