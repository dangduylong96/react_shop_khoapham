import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../particle/Header.js';

var {height, width} = Dimensions.get('window');
export default class Home extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Header navigation={this.props.navigation}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.spring}>
                        <Text style={styles.text_spring}>SPRING COLLECTION</Text>
                        <Image style={styles.spring_image} source={require('../../media/temp/banner.jpg')} />
                    </View>
                    <View style={styles.spring}>
                        <Text style={styles.text_spring}>LIST OF CATEGORY</Text>
                        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                            <View style={styles.slide}>
                                <ImageBackground style={styles.spring_image} source={require('../../media/temp/fit.jpg')}>
                                    <Text style={styles.text}>Fit</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.slide}>
                                <ImageBackground style={styles.spring_image} source={require('../../media/temp/little.jpg')}>
                                    <Text style={styles.text}>Little</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.slide}>
                                <ImageBackground style={styles.spring_image} source={require('../../media/temp/maxi.jpg')}>
                                        <Text style={styles.text}>Maxi</Text>
                                </ImageBackground>
                            </View>
                        </Swiper>
                    </View>
                </View>
            </View>
        )
    }
}
var styles=StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    header:{
        flex:1,
        backgroundColor:'#34B089'
    },
    content:{
        flex:5,
        backgroundColor:'#ebebe0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spring:{
        flex:1,
        width:'95%',
        backgroundColor:'white',
        margin: width/50
    },
    text_spring:{
        fontSize: 18,
        color:'#cdcdb1',
        margin:10
    },
    spring_image:{
        width:'95%',
        height:height/4,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text: {
      color:'#cdcdb1',
      fontSize: 20,
      fontWeight: 'bold',
    }
})