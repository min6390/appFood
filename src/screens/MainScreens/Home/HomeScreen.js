import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import SwiperFood from '../../../components/homescreen/SwiperFood';
import dimension from '../../../asset/utils/dimension';
import ProductImage from '../../../components/homescreen/productImage';
import {styles} from './styles';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            idSelectSpecies: 1,
            newData: [],
            arrSpecies: [],
        };
    }

    componentDidMount() {
        axios.get('https://orderfood2007.000webhostapp.com/foodapp.php')
            .then(res => {
                const data = res.data.map(food => {
                    return {...food, fullSize: false};
                });
                this.setState({data});
            })
            .catch(e => console.log(e));
        axios.get('https://orderfood2007.000webhostapp.com/species.php')
            .then(res => {
                this.setState({arrSpecies: res.data});
            })
            .catch(e => console.log(e));
    }

    onPressPayment = () => {
        this.props.navigation.navigate('Payment');
    };
    onPressSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    renderItemFood = (item) => {
        const {idSelectSpecies} = this.state;
        if (item.foodSpecies != idSelectSpecies) {
            return null;
        }
        return (
            <View key={item.id.toString()} style={{alignItems: 'center',}}>
                <View style={styles.listFood}>
                    <ProductImage
                        image={{uri: item.foodImage}}
                        name={item.foodName}
                        content={item.foodContent}
                        price={item.price}>
                    </ProductImage>
                </View>
            </View>
        );
    };


    renderListFood() {
        const {data} = this.state;
        return (
            <View style={{backgroundColor: 'whitesmoke'}}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={({item}) => this.renderItemFood(item)}/>
            </View>
        );
    }

    render() {
        const {arrSpecies} = this.state;
        console.log(arrSpecies);
        return (
            <View style={{flex: 1, backgroundColor: 'whitesmoke'}}>
                <SwiperFood/>
                <View style={{borderWidth: 1, borderColor: 'red'}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>
                    {
                        arrSpecies.length <= 0
                            ? null
                            :
                            arrSpecies.map((species, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity style={styles.btnFood}
                                                          onPress={() => this.setState({idSelectSpecies: species.id})}>
                                            <Image
                                                style={{height: 32, width: 32}}
                                                resizeMode={'cover'}
                                                source={{uri: species.image}}/>
                                        </TouchableOpacity>

                                    </View>
                                );
                            })
                    }
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
