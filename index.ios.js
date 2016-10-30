'use strict'

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry
} from 'react-native';

import MainScene from './app/MainScene';
import DetailArtScene from './app/DetailArtScene';

class StreetArtNative extends Component {
    renderScene(route, navigator) {
        if (route.name == "main") {
            return <MainScene
                navigator = { navigator }
                title = { route.title } />
        } else if (route.name == "detail"){
            return <DetailArtScene
                navigator = { navigator }
                data = { route.data }
                title = "DetailArtScene" />
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: "main" }}
                renderScene={ this.renderScene }/>
            )
        }
    }

AppRegistry.registerComponent('StreetArtNative', () => StreetArtNative);
