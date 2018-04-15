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
export default class ProductList extends Component{
    constructor(props){
        super(props);
        // this.state={
        // }
    }
    
    componentDidMount(){
        // fetch('http://10.0.3.2:90/react_shop_server/product_by_type.php?id_type='+this.state.id_type)
        // .then(res=>res.json())
        // .then(resJson=>{
        //     this.setState({
        //         list_category:resJson.type,
        //         top_product:resJson.product
        //     })
        // })
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Header navigation={this.props.navigation}/>
                </View>
                <View style={styles.content}>
                    <ScrollView style={styles.maincontent}>
                        <View style={styles.headercontent}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                                <Image style={styles.headerimg} source={require('../../media/appIcon/backList.png')} />
                            </TouchableOpacity>
                            <Text style={{color:'#CC4D8B',fontSize:18}}>Party Dress</Text>
                            <View style={{height:width/4}}></View>
                        </View>
                        <View style={styles.list}>
                            <TouchableOpacity style={{flex:1}}>
                                <Image style={styles.itempro} source={require('../../media/temp/sp1.jpeg')} />
                            </TouchableOpacity>
                            <View style={{flex:2,height:height/5,justifyContent:'space-between'}}>
                                <Text style={styles.title}>Lace Sleeve Si</Text>
                                <Text style={styles.price}>117$</Text>
                                <Text style={styles.category}>Material silk</Text>
                                <View style={styles.detail}>
                                    <Text>Color RoyalBlue</Text>
                                    <View style={styles.cricle}></View>
                                    <TouchableOpacity>
                                        <Text style={styles.showdetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <TouchableOpacity style={{flex:1}}>
                                <Image style={styles.itempro} source={require('../../media/temp/sp1.jpeg')} />
                            </TouchableOpacity>
                            <View style={{flex:2,height:height/5,justifyContent:'space-between'}}>
                                <Text style={styles.title}>Lace Sleeve Si</Text>
                                <Text style={styles.price}>117$</Text>
                                <Text style={styles.category}>Material silk</Text>
                                <View style={styles.detail}>
                                    <Text>Color RoyalBlue</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.showdetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <TouchableOpacity style={{flex:1}}>
                                <Image style={styles.itempro} source={require('../../media/temp/sp1.jpeg')} />
                            </TouchableOpacity>
                            <View style={{flex:2,height:height/5,justifyContent:'space-between'}}>
                                <Text style={styles.title}>Lace Sleeve Si</Text>
                                <Text style={styles.price}>117$</Text>
                                <Text style={styles.category}>Material silk</Text>
                                <View style={styles.detail}>
                                    <Text>Color RoyalBlue</Text>
                                    <View style={styles.cricle}></View>
                                    <TouchableOpacity>
                                        <Text style={styles.showdetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <TouchableOpacity style={{flex:1}}>
                                <Image style={styles.itempro} source={require('../../media/temp/sp1.jpeg')} />
                            </TouchableOpacity>
                            <View style={{flex:2,height:height/5,justifyContent:'space-between'}}>
                                <Text style={styles.title}>Lace Sleeve Si</Text>
                                <Text style={styles.price}>117$</Text>
                                <Text style={styles.category}>Material silk</Text>
                                <View style={styles.detail}>
                                    <Text>Color RoyalBlue</Text>
                                    <View style={styles.cricle}></View>
                                    <TouchableOpacity>
                                        <Text style={styles.showdetail}>SHOW DETAIL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
        marginLeft: 5,
    },
    list:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: '4%',
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:'#F1F1F1'
    },
    itempro:{
        width:width/4,
        height:height/5,
        marginRight: '4%'
    },
    title:{
        color:'#C3C3C3',
        fontSize:20
    },
    price:{
        color:'#DE8EB6',
        fontSize:15,
        fontWeight: 'bold'
    },
    category:{
        fontSize:15
    },
    detail:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    showdetail:{
        color:'#DE8EB6'
    },
    cricle:{
        backgroundColor:'#4165DF',
        borderRadius: 100,
        padding:10
    }
})