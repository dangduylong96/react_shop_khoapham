import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {Route} from '../../route/Route.js';

var {height, width} = Dimensions.get('window');
export default class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            search:''
        }
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header1}>
                    <View style={styles.view_image}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}>
                            <Image style={styles.image_menu} source={require('../../media/appIcon/ic_menu.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.text_menu}>
                        <Text style={styles.text}>Wearing A Dress</Text>
                    </View>
                    <View style={styles.view_image}>
                        <Image style={styles.image_menu} source={require('../../media/appIcon/ic_logo.png')} />
                    </View>
                </View>
                <View style={styles.header2}>
                    <TextInput
                        style={styles.search}
                        underlineColorAndroid="transparent"                        
                        placeholder="What Do You Want To Buy?"
                        onChangeText={(search) => this.setState({search})}
                    />
                </View>
            </View>
        )
    }
}
var styles=StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    header1:{
        flex:1,
        flexDirection:'row'
    },
    view_image:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_menu:{
        width:30,
        height:30,
    },
    text_menu:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'white',
        fontSize:18
    },
    header2:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height/50
    },
    search:{
        backgroundColor:'white',
        width:'90%',
        height:height/18
    }
})