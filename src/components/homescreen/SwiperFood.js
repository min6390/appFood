import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import abc from '../../asset/utils/abc';
// import styles from './styles';
import Swiper from 'react-native-swiper';
import dimension from '../../asset/utils/dimension';

const firstImage = require('../../asset/image/QC/QC1.png');
const secondImage = require('../../asset/image/QC/QC2.png');
const thirdImage = require('../../asset/image/QC/QC3.png');
const fourthImage = require('../../asset/image/QC/QC4.png');
const imageFood = [firstImage, secondImage, thirdImage, fourthImage];


export default () => {
    return (
        <View style={{height: dimension.getWidth() / 2}}>
            <Swiper style={styles.wrapper}
                    autoplay={true}>
                {imageFood.map((image, index) =>
                    <View
                        key={index}
                        style={styles.slideImage}>
                        {console.log(imageFood)}
                        <Image
                            resizeMode={'center'}
                            style={styles.slide}
                            source={image}/>
                    </View>,
                )}
            </Swiper>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {},

    slide: {
        alignSelf: 'center',
        borderRadius: 10,
    },
    slideImage: {
        justifyContent: 'center', flex: 1,
    },
});
