import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import SwiperFood from '../components/homescreen/SwiperFood';
import dimension from '../asset/utils/dimension';
import ProductImage from '../components/homescreen/productImage';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            idSelectSpecie: 1,
            newData: [],
            arrSpeices: [],
        };
    }


    componentDidMount() {
        axios.get('http://192.168.1.2/webservice/foodapp.php')
            .then(res => {
                const data = res.data.map(food => {
                    return {...food, fullSize: false};
                });
                this.setState({data});
            })
            .catch(e => console.log(e));
        axios.get('http://192.168.1.2/webservice/species.php')
            .then(res => {
                this.setState({arrSpeices: res.data});
            })
            .catch(e => console.log(e));
    }

    // onPressChangeData = () => {
    //     const {species, data} = this.state;
    //     data.filter(word => {
    //             if (word.species == species) {
    //                 return {...data};
    //                 console.log(data);
    //             }
    //         },
    //     );
    //
    // };

    onPressPayment = () => {
        this.props.navigation.navigate('Payment');
    };
    onPressSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
    renderItemFood = (item) => {
        const {idSelectSpecie} = this.state;
        if (item.species != idSelectSpecie){
            return null
        }
        return (
            <View key={item.ID.toString()} style={{alignItems: 'center'}}>
                <View style={styles.listFood}>
                    <ProductImage
                        image={{uri: item.imageFood}}
                        name={item.nameFood}
                        title={item.contentFood}
                        price={item.price}>
                    </ProductImage>
                </View>
            </View>
        );
    };


    renderListFood() {
        const {data, } = this.state;

        return (
            <View style={{backgroundColor: 'whitesmoke'}}>
                <FlatList
                    keyExtractor={item => item.ID}
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
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>
                    {
                        this.state.arrSpeices.length <= 0
                            ? null
                            :
                            this.state.arrSpeices.map((specie, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity style={styles.btnFood}
                                                          onPress={() => this.setState({idSelectSpecie: specie.id})}/>
                                    </View>
                                );
                            })
                    }
                </View>
                {/*{comboFood.map((food, index) =>*/}
                {/*    <View style={{alignItems: 'center'}}>*/}
                {/*        <TouchableOpacity key={index}*/}
                {/*                          style={styles.btnFood} >*/}
                {/*        </TouchableOpacity>*/}
                {/*        <Text >{food}</Text>*/}
                {/*    </View>*/}
                {/*)}*/}

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
        margin: 5,
        width: dimension.getWidth() / 7,
        height: dimension.getWidth() / 7,
        borderRadius: 50,
        backgroundColor: 'pink',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    listFood: {
        //     flex: 1,
        //     margin: 10,
        //     borderWidth: 1.2,
        //     borderColor: 'red',
        //     borderRadius: 10,
        //     backgroundColor: 'white',
        //     shadowColor: '#000',
        //     shadowOffset: {
        //         width: 0,
        //         height: 2,
        //     },
        //     shadowOpacity: 0.25,
        //     shadowRadius: 3.84,
        //
        //     elevation: 5,
        width: dimension.getWidth() - 30,
        borderRadius: 5,
        borderWidth: 1,
        margin: 5,
    },
    // },

    btnOrder: {
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        width: '30%',
        backgroundColor: 'red',
    },
});
