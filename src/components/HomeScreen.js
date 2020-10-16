import React, {Component} from 'react';

import {View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

import SwiperFood from './homescreen/SwiperFood';
import datafood from '../asset/data/datafood';
import dimension from '../asset/utils/dimension';

const comboFood = ['COMBO 1 NGƯỜI', 'COMBO NHÓM', 'MENU ƯU DÃI', 'MÓN LẺ'];

export default class HomeScreen extends Component {

    renderListFood() {
        return (
            <View>
                <FlatList
                    keyExtractor={item => item.id}
                    numColumns={2}
                    data={datafood.dataFood}
                    renderItem={({item}) =>
                        <View style={styles.listFood}>
                            <Text>{item.title}</Text>
                          <View style={{flexDirection: 'column-reverse', flex: 1, alignItems: 'center'}}>
                            <TouchableOpacity style={styles.btnOrder}>
                                <Text>Đặt hàng</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                    }/>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'whitesmoke'}}>
                <SwiperFood/>
                <View style={{borderWidth: 1, borderColor: 'red'}}/>
                <View>
                    <ScrollView horizontal={true}>
                        {comboFood.map((food, index) =>
                            <TouchableOpacity key={index}
                                              style={styles.btnFood}>
                                <Text style={{fontSize: 20}}>{food}</Text>
                            </TouchableOpacity>)}
                    </ScrollView>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text> MENU </Text>
                    <View>{this.renderListFood()}</View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btnFood: {
        margin: 10,
        borderBottomWidth: 1,
    },
    listFood: {
        height: dimension.getWidth() / 2,
        borderWidth: 1,
        borderRadius: 10,
        width: dimension.getWidth() / 2.3,
        margin: 10,
    },
    btnOrder: {
        borderRadius: 5,
        borderWidth: 1,
        alignItems:'center',
        width: '80%',
        marginBottom:10,
        backgroundColor:'red'
    },
});
