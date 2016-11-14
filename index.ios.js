'use strict'

import React, { Component } from 'react';
import {
    NavigatorIOS,
    AppRegistry
} from 'react-native';

import MainScene from './app/MainScene';
import DetailArtScene from './app/DetailArtScene';

class StreetArtNative extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MainScene,
                    title: 'Main Scene'
                }}
                style = {{ flex: 1}} />
            )
        }
    }

AppRegistry.registerComponent('StreetArtNative', () => StreetArtNative);
