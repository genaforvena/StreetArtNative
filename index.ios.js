'use strict'

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry,
    View
} from 'react-native';

import ArtList from './app/ArtList'

class MainScene extends Component {
    static get defaultProps() {
         return {
             title: 'Art List'
         };
     }

     render() {
         return (
            <ArtList/>
         )
     }
 }

 class DetailedArtInfoScene extends Component {
     static get defaultProps() {
         return {
             title: ''
         }
     }
 }

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
