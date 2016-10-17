'use strict'

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry
} from 'react-native';

import MainScene from './app/MainScene';
import DetailArtScene from './app/DetailArtScene';

class StreetArtNative extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) => {
                    if (route.index == 0) {
                        return <MainScene
                            navigator = { navigator }
                            title={route.title} />
                    } else {
                        return <DetailArtScene
                            navigator = { navigator }
                            title = "DetailArtScene"
                            />
                    }
                }}/>
            )
        }
    }

AppRegistry.registerComponent('StreetArtNative', () => StreetArtNative);
