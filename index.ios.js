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
        if (route.name == "Main") {
            return <MainScene
                navigator = { navigator }
                title={route.title} />
        } else if (route.name == "Details"){
            return <DetailArtScene
                navigator = { navigator }
                data = { route.data }
                title = "DetailArtScene" />
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', name: "Main" }}
                renderScene={ this.renderScene }/>
            )
        }
    }

AppRegistry.registerComponent('StreetArtNative', () => StreetArtNative);
