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
export default class Menu extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.profile}>
                    <Image style={styles.profile_image} source={require('../../media/temp/profile.png')} />
                    <Text style={styles.name}>Đặng Duy Long</Text>
                </View>
                <View style={styles.button_option}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderHistoryComponent')}>
                        <Text style={styles.options}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInformationComponent')}>
                        <Text style={styles.options}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.options}>Sign Out</Text>
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
    name:{
        color:'white',
        fontSize: 16
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
    }
})