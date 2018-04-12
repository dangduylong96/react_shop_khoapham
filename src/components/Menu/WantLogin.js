import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';


var {height, width} = Dimensions.get('window');
export default class WantLogin extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.profile}>
                    <Image style={styles.profile_image} source={require('../../media/temp/profile.png')} />
                </View>
                <View style={styles.button_option}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginComponent')}>
                        <Text style={styles.options}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
var styles=StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor:'#37a060'
    },
    profile:{
        flex:1,
        height:height/5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height/20
    },
    profile_image:{
        width:width/3,
        height:height/4,
        resizeMode:'cover',
        borderRadius: 100,
        marginBottom: height/50
    },
    button_option:{
        flex:2,
        marginTop: height/20
    },
    options:{
        margin: 5,
        padding: 15,
        backgroundColor:'white',
        borderRadius: 80,
        textAlign:'center'
    }
})