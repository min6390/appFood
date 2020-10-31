import {Image, Text, View, StyleSheet, TextInput, ScrollView, } from 'react-native';
import React from 'react';

const inputLogin = ({ txtPlaceholder, keyboardType,onValue}) => (
    <TextInput
        style={styles.textInput}
        placeholder={txtPlaceholder}
        keyboardType={keyboardType}
        returnKeyType={'next'}
        onChangeText={onValue&&onValue()}
        value={value}/>
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
