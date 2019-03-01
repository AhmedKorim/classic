import React from 'react';
import {Text, View, StyleSheet, Image, DrawerLayoutAndroid, ImageBackground} from 'react-native';
import {Button, Divider} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
class DrawerContent extends React.Component {
    state = {
        buttons:[
            {title:'Movies' ,icon:'movie'},
            {title:'Tv Series' ,icon:'tv'},
            {title:'Drama' , icon:'tv'},
            // {divider:true},
            {title:'Contact Us' ,icon:'contact-phone'},
            {title:'Blogs', icon:'find-in-page'},
            {title:'Help Center' ,icon:'live-help'},
            {title:'Terms' , icon :"list"},
            ]
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.appLogo}>
                <ImageBackground imageStyle={{ resizeMode:"contain" }} source={require('../../../assets/images/mai.png')} style={{width:'100%',height:'100%'}}/>
            </View>
            <View style={styles.appMenu}>
                <Divider/>
                {this.state.buttons.map(button =>  <Button  buttonStyle={styles.buttons} title={button.title} key={button.title} ponPress={_ => void 0} type="clear"
                                                        icon={<Icon
                                                            name={button.icon}
                                                            size={20}
                                                            color="black"
                                                            style={{width:40,textAlign:'center'}}
                                                        />}
                                                            titleStyle={{paddingLeft:10,color:'#424242',textAlign:'left'}}/>)}
            </View>
        </View>
        )
    }
}

export default DrawerContent;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    appLogo:{
        flex:1,
    },
    appMenu:{
        flex:3,
    },buttons:{
        marginTop:5,
        marginBottom:5,
        width:'100%',
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'flex-start'
    }
})
