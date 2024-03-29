/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ToolbarAndroid, View} from 'react-native';
import {DrawerLayoutAndroid} from 'react-native';
import {ThemeProvider} from "react-native-elements";
import DrawerContent from "./src/Components/DrawerContent/DrawerContent";
import MoviesList from "./src/Components/ListView/List";
import Movieview from "./src/Components/Movieview";
import SignupPage from "./src/Components/SignupPage/SignupPage";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    state = {
        activePage:'signup',
        data:null
    }
    setActivePage = (page,data)=>{
        console.log(page);
        this.setState({
            activePage:page,
            data
        })
    }
    render() {
        const {activePage}= this.state;
        return (
            <ThemeProvider>
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => <DrawerContent/>}
                >
                    <ToolbarAndroid
                        style={styles.appBar}
                        title="Schock"
                        titleColor="#fff"
                    />
                    {activePage  === 'signup'&& <SignupPage navigate={this.setActivePage}/>}
                    {activePage === 'listview' && <MoviesList navigate={this.setActivePage}/>}
                    {activePage ==='singleview' && <Movieview navigate={this.setActivePage} movieData={this.state.data}/>}
                </DrawerLayoutAndroid>
            </ThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    appBar: {
        backgroundColor: '#FF6D00',
        height: 60,
    }
});
