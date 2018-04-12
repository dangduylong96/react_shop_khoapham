import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '../particle/Header.js';

var {height, width} = Dimensions.get('window');
export default class ProductDetail extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Header navigation={this.props.navigation}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.maincontent}>
                        <View style={styles.headercontent}>
                            <Image style={styles.headerimg} source={require('../../media/appIcon/back.png')} />
                            <Image style={styles.headerimgcart} source={require('../../media/appIcon/cart.png')} />
                            
                        </View>
                        <ScrollView style={styles.detail}>
                            <View>
                                <Image style={styles.headerimg} source={require('../../media/appIcon/back.png')} />
                            </View>
                        </ScrollView>
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
        backgroundColor:'#37a060'
    },
    content:{
        flex:5,
        backgroundColor:'#ebebe0',
        alignItems: 'center',
    },
    maincontent:{
        width:width*0.95,
        backgroundColor:'white',
        marginTop: '2%'
    },
    headercontent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:height/15,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1'
    },
    headerimg:{
        width:width/20,
        height:height/20,
        marginLeft: '2%'
    },
    headerimgcart:{
        width:width/15,
        height:height/15,
        resizeMode:'stretch',
        marginRight: '2%'
    },
    list:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: '4%',
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:'#F1F1F1'
    },
})