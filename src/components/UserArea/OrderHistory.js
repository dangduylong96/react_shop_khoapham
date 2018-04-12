import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class UserInformation extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text style={{color:'white',fontSize:18}}>Order History</Text>
                    </View>
                        <Image style={styles.backIcon} source={require('../../media/appIcon/backs.png')} />
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.order}>
                            <View style={styles.row}>
                                <Text>Order id:</Text>
                                <Text style={{color:'#CEEEE7'}}>ORD15</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Order Time:</Text>
                                <Text style={{color:'#CE5591'}}>2017-15-01</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Status:</Text>
                                <Text style={{color:'#CEEEE7'}}>Pendding</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Total:</Text>
                                <Text style={{color:'#CE5591'}}>392$</Text>
                            </View>
                        </View>
                        <View style={styles.order}>
                            <View style={styles.row}>
                                <Text>Order id:</Text>
                                <Text style={{color:'#CEEEE7'}}>ORD15</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Order Time:</Text>
                                <Text style={{color:'#CE5591'}}>2017-15-01</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Status:</Text>
                                <Text style={{color:'#CEEEE7'}}>Pendding</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Total:</Text>
                                <Text style={{color:'#CE5591'}}>392$</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView> 
            </View>
        )
    }
}
var styles=StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor:'#F3F3F3'
    },
    header:{
        flex:1/12,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#2ABA99',
    },
    title:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    backIcon:{
        width:width/30,
        height:height/25,
        marginRight: 10,
    },
    content:{
        flex:11/12,
        alignItems: 'center',
        marginTop: 10
    },
    order:{
        width:'95%',
        backgroundColor:'white',
        marginTop: 10,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:5
    }
})