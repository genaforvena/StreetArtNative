'use strict'

import React, { Component } from 'react';
import {
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';

import * as Animatable from 'react-native-animatable';

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
                    iterationCount={1}
                    direction = "normal"
                    style = {{
                        position: 'absolute',
                        top: 400,
                        left: 0,
                        height: 150,
                        width: 150
                    }}>
                    <TouchableHighlight
                        style = {{
                            backgroundColor: 'white',
                        }}
                        onPress = { () => this.onPress() }>
                        <View>
                            <Text> { artObject.artist } </Text>
                            <Image source = {{ uri : artObject.image }}
                                style = {{ height: 200, width: 200 }}/>
                        </View>
                    </TouchableHighlight>
                </Animatable.View>
            );
        } else {
            return null;
        }
    }

}
