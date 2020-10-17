import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import dimension from '../../asset/utils/dimension';

const ProductImage = ({image, name, title}) => (
    <View style={{alignItems: 'center'}}>
        <Image
            resizeMode={'cover'}
            style={styles.imageFood}
            source={image}/>
        <View style={{height: (dimension.getWidth() / 6)}}/>
        <Text style={styles.textFood}>{name}</Text>
        <Text style={styles.content}
              numberOfLines={4}>
            {title}
        </Text>
    </View>
);
const styles = StyleSheet.create({
    imageFood: {
        height: dimension.getWidth() / 4,
        width: dimension.getWidth() / 3,
        position: 'absolute',
        top: -40,
        borderRadius: 10,

    },
    textFood: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        margin:5
    },
});
export default ProductImage;
