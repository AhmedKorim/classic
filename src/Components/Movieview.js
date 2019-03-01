import React from 'react';
import {Image, ScrollView, View, StyleSheet, Dimensions} from "react-native";
import {Text} from "react-native-elements";

class Movieview extends React.Component {
    render() {
        let width = Dimensions.get('window').width
        let height = Dimensions.get('window').height
        return (<View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View>
                    <Image style={{height: height, width: width, position: 'absolute', top: 0, left: 0}}
                           source={{uri: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}}/>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <Text h3 style={{textAlign: 'center', color: '#fff', marginTop: 20}}>Batman</Text>
                        <View style={{height: 300}}/>
                        <View style={{backgroundColor:'#fff' ,flex:1,padding:20}}>
                            <Text h4 style={{textAlign: 'left', color: '#15161d'}}>About Batman</Text>
                            <Text style={{textAlign:'left',color:'#15161d' ,marginTop:15}}>Movies Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse possimus recusandae sequi!</Text>
                            <Text style={{textAlign:'left',color:'#15161d' ,marginTop:5}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, commodi cum, delectus doloremque dolorum, eligendi enim fuga ipsa iusto minima nihil nobis non perferendis quae quas rerum ullam voluptas voluptatibus.</Text>
                            <View style={{height:300}}/>
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
