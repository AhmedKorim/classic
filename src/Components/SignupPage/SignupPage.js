import React from 'react';
import {Button, TextInput, View, StyleSheet, ImageBackground} from "react-native";

class SignupPage extends React.Component {
    state = {
        inputs :[
            {name:'user_name',value:'',title:'E-mail or ID'},
            {name:'password',value:'',title:'Password',secure:true}
        ]
    }

    handleInput = (name,text)=>{
        this.setState({
            ...this.state,
            inputs:this.state.inputs.map(i => i.name ===name ? {...i,value:text}:i)
        })
    }
    render() {
        return (<ImageBackground source={require('../../../assets/images/mai.png')} style={{width:'100%',height:'100%'}} imageStyle={{ resizeMode:"contain" }}>
            <View></View>
            <View>
                {
                    this.state.inputs.map(({name,title,value,secure}) => <TextInput
                    value={value}
                    key={name}
                    onChangeText={text => this.handleInput(name,text)}
                    secureTextEntry={secure}
                    underlineColorAndroid="#ee4f94"
                    />)
                }
                <Button title="login" onPress={_ => void 0}/>
            </View>
        </ImageBackground>)
    }
}

export default SignupPage;

const styles= StyleSheet.create({
    textInput:{
        height:40
    }
})
