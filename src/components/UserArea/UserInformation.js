import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class OrderHistory extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Đặng Duy Long',
            address:'145 Lê Đức Thọ, Gò Vấp',
            phone:'0988936354'
        }
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text style={{color:'white',fontSize:18}}>User Information</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Homescreen')}}>
                        <Image style={styles.backIcon} source={require('../../media/appIcon/backs.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input_information}
                        underlineColorAndroid="transparent"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                    />
                    <TextInput
                        style={styles.input_information}
                        underlineColorAndroid="transparent"
                        onChangeText={(address) => this.setState({address})}
                        value={this.state.address}
                    />
                    <TextInput
                        style={styles.input_information}
                        underlineColorAndroid="transparent"
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                    />
                    <TouchableOpacity>
                        <Text style={styles.change}>Change Your Information</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent:'center',
    },
    input_information:{
        width:'90%',
        backgroundColor:'white',
        marginTop: height/90,
        marginBottom: height/90,
        borderWidth: 1,
        borderColor: '#2ABA99',
        borderRadius: 50
    },
    change:{
        backgroundColor:'#2ABA99',
        padding: 15,
        paddingHorizontal: 100,
        marginTop: 10,
        borderRadius: 50
    }
})