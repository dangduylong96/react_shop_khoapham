import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput
} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            pass:'',
            repass:''
        }
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.view_image}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                            <Image style={styles.image_menu} source={require('../../media/appIcon/back_white.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.text_menu}>
                        <Text style={styles.text}>Wearing A Dress</Text>
                    </View>
                    <View style={styles.view_image}>
                        <Image style={styles.image_menu} source={require('../../media/appIcon/ic_logo.png')} />
                    </View>
                </View>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Your Email"
                        onChangeText={(name) => this.setState({name})}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Your Email"
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Your Password"
                        onChangeText={(pass) => this.setState({pass})}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Re-Enter Your Password"
                        onChangeText={(repass) => this.setState({repass})}
                    />
                    <TouchableOpacity>
                        <Text style={styles.login}>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LoginComponent')}}>
                        <Text style={styles.signin}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.signout}>SIGN UP</Text>
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
    header:{
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
    content:{
        flex:4,
        alignItems: 'center',
        marginTop: height/40,
    },
    input:{
        width:width*0.8,
        height:height/15,
        backgroundColor:'white',
        borderRadius: 20,
        marginBottom: height/60
    },
    login:{
        marginTop: height/40,
        padding: 15,
        paddingHorizontal: 100,
        color:'white',
        fontWeight: 'bold',
        borderRadius:50,
        backgroundColor:"transparent",
        borderWidth: 1,
        borderColor: 'white',
    },
    footer:{
        flex:2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signin:{
        paddingVertical: 15,
        paddingHorizontal: 50,
        color:'#E3E2E3',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        textAlign:'center',
        fontWeight: 'bold',
        backgroundColor:'white',
        marginRight: 1
    },
    signout:{
        paddingVertical: 15,
        paddingHorizontal: 50,
        color:'#34B089',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        textAlign:'center',
        fontWeight: 'bold',
        backgroundColor:'white',
        marginLeft: 1
    }
})