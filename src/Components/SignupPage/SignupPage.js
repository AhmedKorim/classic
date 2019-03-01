import React from 'react';
import {Button, TextInput, View, StyleSheet, ImageBackground} from "react-native";
import {Overlay, Text, Button as Rnbutton} from "react-native-elements";

class SignupPage extends React.Component {
    state = {
        inputs: [
            {name: 'user_name', value: '', title: 'E-mail or ID'},
            {name: 'password', value: '', title: 'Password', secure: true}
        ]
    }

    handleInput = (name, text) => {
        this.setState({
            ...this.state,
            inputs: this.state.inputs.map(i => i.name === name ? {...i, value: text} : i)
        })
    }
    moveTo = () => {
        console.log('sdf');
        this.props.navigate('listview', null)
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/mai.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: "contain"}}>
                <View style={styles.overLay}>
                    <View style={styles.loginHeader}>
                        <View>
                            <Text h1 style={{color: '#fff'}}>Schock</Text>
                            <Text style={{color: '#bebebe', fontSize: 14}}>lorem lorem lorem</Text>
                        </View>
                    </View>
                    <View style={styles.loginForm}>
                        {
                            this.state.inputs.map(({name, title, value, secure}) => <TextInput
                                value={value}
                                key={name}
                                onChangeText={text => this.handleInput(name, text)}
                                secureTextEntry={secure}
                                underlineColorAndroid="#1976D2"
                            />)
                        }
                        <View>
                            <View><Button title="login" onPress={_ => this.moveTo()}/></View>
                            <View style={{flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginTop: 10}}>
                                <View><Text style={{color: '#fff'}}>Don't have an account ?</Text></View>
                                <View><Rnbutton buttonStyle={{marginLeft: 10}} title="register" type="clear" onPress={_ => this.moveTo()}/></View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.loginFooter}>
                    </View>
                </View>
            </ImageBackground>)
    }
}

export default SignupPage;

const styles = StyleSheet.create({
    textInput: {
        height: 40
    }, overLay: {
        backgroundColor: 'rgba(0,0,0,.9)',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    }, loginHeader: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }, loginFooter: {
        flex: 1
    }, loginForm: {
        flex: 2,
        maxWidth: 400,
        width: '100%'
    }, loginText: {
        color: '#fff',
        fontSize: 20
    }
})
