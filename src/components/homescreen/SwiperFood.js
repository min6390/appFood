import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

// import styles from './styles';
import Swiper from 'react-native-swiper';
import dimension from '../../asset/utils/dimension';

export default () => {
    return (
        <View style={{height: dimension.getWidth()/1.8,}}>
            <Swiper style={styles.wrapper}
                    autoplay={true}>
                <View style={styles.slideImage}>
                    <Image
                        style={styles.slide}
                        source={require('../../asset/image/QC/QC1.png')}/>
                </View>
                <View style={styles.slideImage}>
                    <Image
                        style={styles.slide}
                        source={require('../../asset/image/QC/QC2.png')}/>
                </View>
                <View style={styles.slideImage}>
                    <Image
                        style={styles.slide}
                        source={require('../../asset/image/QC/QC3.png')}/>
                </View>
                <View style={styles.slideImage}>
                    <Image
                        style={styles.slide}
                        source={require('../../asset/image/QC/QC4.png')}/>
                </View>
            </Swiper>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
    },

    slide: {
        alignSelf:'center',
        borderRadius: 10,
        height: dimension.getWidth() / 2,
        width: dimension.getWidth() - 20,
    },
    slideImage:{
        justifyContent:'center',flex:1
    }
});
