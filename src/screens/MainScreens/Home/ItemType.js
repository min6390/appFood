import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const ItemType = ({image, selected, onSelected,index}) => {
    return (
            <View key = {index}>
                <TouchableOpacity style={[styles.btnFood,selected &&{backgroundColor: 'blue',}]}
                                  onPress={() => onSelected&&onSelected()}>
                    <Image
                        style={{height: 32, width: 32}}
                        resizeMode={'cover'}
                        source={image}/>
                </TouchableOpacity>
            </View>
    );
};
