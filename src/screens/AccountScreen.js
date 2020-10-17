import React, {Component} from 'react';

import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../asset/colors/colors';
// import styles from './styles';

export default class AccountScreen extends Component {
    render() {
        return (
            <View>
                <View style={{backgroundColor: 'white', marginVertical: 10}}>
                    <View style={{margin: 10, flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='account-circle' size={60} color={colors.tabBarColor}/>
                        <View style={{alignItems: 'center', justifyContent: 'center', margin: 10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Name</Text>
                            <Text>Gmail</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: 'white', marginVertical: 10}}>
                    <View style={{margin: 10,}}>
                      <TouchableOpacity style={{}}>
                        <Text style={{fontSize: 15}}>Lịch sử đơn hàng</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{}}>
                        <Text style={{fontSize: 15}}>Lịch sử đơn hàng</Text>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
