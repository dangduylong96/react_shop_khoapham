import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    FlatList
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../particle/Header.js';

var {height, width} = Dimensions.get('window');
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            list_category:[],
            top_product:[]
        }
    }
    componentDidMount(){
        fetch('http://10.0.3.2:90/react_shop_server/index.php')
        .then(res=>res.json())
        .then(resJson=>{
            this.setState({
                list_category:resJson.type,
                top_product:resJson.product
            })
        })
    }

    render(){
        const {list_category,top_product}=this.state;
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Header navigation={this.props.navigation}/>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View style={styles.spring}>
                            <Text style={styles.text_spring}>SPRING COLLECTION</Text>
                            <Image style={styles.spring_image} source={require('../../media/temp/banner.jpg')} />
                        </View>
                        <View style={styles.spring}>
                            <Text style={styles.text_spring}>LIST OF CATEGORY</Text>
                            <Swiper containerStyle={{ width: width*0.95, height: height/3.5}} autoplay={true}>
                                {
                                    list_category.map(item=>(
                                        <TouchableOpacity style={styles.slide} id_type={item.id} onPress={()=>this.props.navigation.navigate('ProductListscreen',{
                                            item:item
                                        })}>
                                            <ImageBackground style={styles.spring_image} source={{uri:'http://10.0.3.2:90/react_shop_server/images/type/'+item.image}}>
                                                <Text style={styles.text}>{item.name}</Text>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    ))
                                }
                            </Swiper>
                        </View>
                        <View style={styles.spring}>
                            <View style={{flex:1}}>
                                <Text style={styles.text_spring}>TOP PRODUCT</Text>
                            </View>
                            <View style={styles.top_pro}>
                                <FlatList 
                                    data={top_product}
                                    horizontal={false}
                                    numColumns={2}
                                    renderItem={({item})=>
                                        <TouchableOpacity style={styles.top_pro_item} onPress={()=>this.props.navigation.navigate('ProductDetailscreen',{
                                            name:item.name,
                                            images:item.images,
                                            price:item.price,
                                            color:item.color,
                                            description:item.description,
                                            material:item.material
                                        })}>
                                            <Image style={styles.top_pro_image} source={{uri:'http://10.0.3.2:90/react_shop_server/images/product/'+item.images[0]}} />
                                            <Text style={styles.top_pro_tex}>{item.name}</Text>
                                            <Text style={styles.top_pro_price}>{item.price}$</Text>
                                        </TouchableOpacity>
                                    }
                                />
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
        backgroundColor:'#ebebe0'
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
        margin:10,
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
    },
    top_pro:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'white'
    },
    top_pro_item:{
        shadowOffset:{  width: 0,  height: 3},
        shadowColor: '#2E272B',
        shadowOpacity: 0.2,
        width:(width*0.9)/2,
        alignItems: 'center',
        margin:4
    },
    top_pro_image:{
        width:'100%',
        height:height/4,
        resizeMode:'contain'
    },
    top_pro_tex:{
        color:'#D3D3CF',
        fontSize:15,
    },
    top_pro_price:{
        color:'red'
    }
})