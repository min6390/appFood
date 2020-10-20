import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import SwiperFood from '../components/homescreen/SwiperFood';
import dimension from '../asset/utils/dimension';
import ProductImage from '../components/homescreen/productImage';


const comboFood = ['COMBO 1 NGƯỜI', 'COMBO NHÓM', 'MENU ƯU DÃI', 'MÓN LẺ'];


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            species: 1,
        };
    }

    componentDidMount() {
        axios.get('http://192.168.1.21/webservice/foodapp.php')
            .then(res => {
                const data = res.data.map(food => {
                    return {...food , fullSize : false}
                })
                this.setState({data});
            })
            .catch(e => console.log(e));
    }

    onPressFullSize = (id) => {
        const updateData = this.state.data.map(food => {
            if (food.ID === id){
                return {...food , fullSize : !food.fullSize}
            }
            return food
        })
        this.setState({data : updateData});
    };
    onPressPayment = () => {
        this.props.navigation.navigate('Payment');
    };
    onPressSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    renderItemFood = (item) => {
        return (
            <View style={item.fullSize ? styles.listFoodFull : styles.listFood} key={item.ID.toString()}>
                <ProductImage
                    image={{uri: item.imageFood}}
                    name={item.nameFood}
                    title={item.contentFood}/>
                <View style={{flexDirection: 'column-reverse', flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity
                        key={item}
                        style={styles.btnOrder}
                        onPress={() => this.onPressFullSize(item.ID)}>

                        <Text>Show</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnOrder}
                                      onPress={_ => _}>
                        <Text>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    renderListFood() {
        const {data, fullSizeList} = this.state;
        return (
            <View style={{backgroundColor: 'whitesmoke'}}>
                <FlatList
                    keyExtractor={item => item.ID}
                    numColumns={2}
                    data={data}
                    renderItem={({item}) => this.renderItemFood(item)}/>
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
                <View style={{alignItems: 'center', flex: 1}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}
                          onPress={this.onPressSignOut}> MENU </Text>
                    <View style={{flex: 1}}>{this.renderListFood()}</View>
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
        borderWidth: 1.2,
        borderColor: 'red',
        height: dimension.getWidth() / 2,
        borderRadius: 10,
        width: dimension.getWidth() / 2.3,
        margin: 10,
        backgroundColor: 'white',
        marginTop: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    listFoodFull: {
        borderWidth: 1.2,
        borderColor: 'red',
        height: dimension.getWidth(),
        borderRadius: 10,
        width: dimension.getWidth() / 2.3,
        margin: 10,
        backgroundColor: 'white',
        marginTop: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btnOrder: {
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        width: '80%',
        marginBottom: 10,
        backgroundColor: 'red',
    },
});
