'use strict'

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry
} from 'react-native';

import MainScene from './app/MainScene';

class StreetArtNative extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) => {
                    return <MainScene title={route.title} />
                }}/>
            )
    }
}

AppRegistry.registerComponent('StreetArtNative', () => StreetArtNative);
