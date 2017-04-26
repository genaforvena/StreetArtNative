'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import DetailArtScene from './DetailArtScene';

let windowWidth = Dimensions.get('window').width

export default class ArtObjectPreview extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        let artObject = this.props.artObject;
        this.props.navigator.push({
            component: DetailArtScene,
            title: artObject.title,
            passProps: { data: artObject }
        })
    }

    render() {
        let artObject = this.props.artObject;
        if (artObject) {
            return (
                <Animatable.View
                    animation="fadeInUpBig"
                    iterationCount= { 1 }
                    direction = "normal"
                    style = { styles.previewRoot } >
                    <TouchableHighlight
                        onPress = { () => this.onPress() } >
                        <Image
                            source = {{ uri : artObject.image }}
                            style = { styles.image } />
                    </TouchableHighlight>
                </Animatable.View>
            );
        } else {
            return null;
        }
    }

}

const styles = StyleSheet.create({
    previewRoot: {
        position: 'absolute',
        top: 400,
        left: 5,
        height: windowWidth / 2,
        width: windowWidth / 2,
    },
    image: {
        borderRadius: 2,
        borderWidth: 6,
        borderColor: 'black',
        height: windowWidth / 2,
        width: windowWidth / 2
    }
});
