'use strict'

import React, { Component } from 'react';
import {
    AsyncStorage,
    NavigatorIOS,
    AppRegistry
} from 'react-native';

import fetchArtObjects from './app/fetch';
import MainScene from './app/components/MainScene';
import DetailArtScene from './app/components/DetailArtScene';

class StreetArtNative extends Component {
    componentDidMount() {
        fetchArtObjects(async (items) => {
            await AsyncStorage.setItem("data", JSON.stringify(items));
        })
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MainScene,
                    title: 'Main Scene',
                    navigationBarHidden: true
                }}
                style = {{ flex: 1}} />
            )
        }
    }

AppRegistry.registerComponent('StreetArtNative', () => StreetArtNative);
