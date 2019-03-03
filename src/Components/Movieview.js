import React from 'react';
import {Image, ScrollView, View, StyleSheet, Dimensions, WebView} from "react-native";
import {Button, Text} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Movieview extends React.Component {
    viewList = () => {
        console.log('back');
        this.props.navigate('listview', null)
    }

    render() {
        let width = Dimensions.get('window').width
        let height = Dimensions.get('window').height
        const {movieData} = this.props;
        return (<View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View>
                    <Image style={{height: height, width: width, position: 'absolute', top: 0, left: 0}}
                           source={{uri: movieData.Poster}}/>
                    <Button type="clear"
                            icon={<Icon
                                name="arrow-left"
                                size={15}
                                style={{color: '#fff'}}
                                color="white"
                            />} onPress={_ => this.viewList()} buttonStyle={{position: 'absolute', zIndex: 99999, top: 10, left: 10}}/>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <Text h3 style={{textAlign: 'center', color: '#fff', marginTop: 20}}>{movieData.Title}</Text>
                        <View style={{height: 300}}/>
                        <View style={{backgroundColor: '#fff', flex: 1, padding: 20}}>
                            <Text h4 style={{textAlign: 'left', color: '#15161d'}}>About {movieData.Title}</Text>
                            <Text style={{textAlign: 'left', color: '#15161d', marginTop: 15}}>{movieData.Type}  { movieData.Year} Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Esse possimus recusandae sequi!</Text>
                            <Text style={{textAlign: 'left', color: '#15161d', marginTop: 5}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                                commodi cum, delectus doloremque dolorum, eligendi enim fuga ipsa iusto minima nihil nobis non perferendis quae quas rerum ullam
                                voluptas voluptatibus.</Text>
                            <Text h3 style={{textAlign: 'center', color: '#fff', marginTop: 20}}>{movieData.Title}</Text>
                            <Text h4 style={{textAlign: 'left', color: '#15161d'}}> {movieData.Title} trailer</Text>
                         { movieData.Video ?  <WebView
                                style={{marginTop: 20, width: '100%', height: 230}}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                source={{uri: movieData.Video}}
                            /> : <Text h4 style={{textAlign: 'center', color: '#E53935',marginTop:40}}>Sorry we couldn't find a trailer for {movieData.Title}</Text>}
                            <View style={{height: 300}}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Movieview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 19,
        marginBottom: 5,
    },
});
