import React from 'react';
import {ScrollView, View, StyleSheet, Image, ImageBackground} from "react-native";
import {Button, Text} from "react-native-elements";

class Movie extends React.Component {
    render() {
        const {movieData} = this.props;
        return (movieData && <ImageBackground
           style={{ width: '100%', height: 250}}
            imageStyle={{resizeMode:"cover"}} source={{uri:movieData.Poster}}>
            <View style={styles.movieWrapper}>
                <View style={styles.moviePoster}/>
                <View style={styles.movieContent}>
                    <View style={{flex:1}}>
                        <Image style={{height:'80%'}}  resizeMode="contain" source={{uri:movieData.Poster}} />
                    </View>
                    <View style={{flex:3,height:'90%',paddingLeft:7}}>
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:17}}>{movieData.Title}</Text>
                        <Text style={{color:'#b4b4b4',marginTop:10,padding:5}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam deleniti hic incidunt minus molestias praesentium quis quisquam, rem!
                        </Text>
                <Button type="solid" title="Read More" buttonStyle={{width:100,height:30 , padding:0}} titleStyle={{fontSize:12}} onPress={_ => this.props.navigate('singleview',movieData)}/>
                    </View>
                </View>
            </View>
        </ImageBackground>)
    }
}

export default Movie;
const styles = StyleSheet.create({
    movieWrapper: {
        flex: 1,
    },moviePoster:{
        flex:3
    },movieContent:{
         flex:7,
        backgroundColor: 'rgba(0,0,0,.7)',
        paddingLeft:5,
        paddingRight:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    }
})
