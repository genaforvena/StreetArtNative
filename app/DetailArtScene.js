'use strict'

import React, { Component } from 'react';
import {
    TouchableHighlight,
    Image,
    View,
    Text
} from 'react-native';

export default class DetailArtScene extends Component {
    static get defaultProps() {
        return {
            title: 'Art List'
        };
    }
    render() {
        return (
            <ArtObjectDetails data = { this.props.data } navigator = {this.props.navigator}/>
        )
    }
}

class ArtObjectDetails extends Component {
    constructor(props) {
        super(props);
        this.navigateBack = this.navigateBack.bind(this);
    }

    navigateBack() {
        this.props.navigator.push({
            index: 0
        })
    }

    render() {
        let artObject = this.props.data;
        let imageUrl = artObject.photos[0].image
        return (
            <View style = {{ padding: 22 }}>
                <TouchableHighlight
                    onPress = {this.navigateBack}
                    style = {{ height: 100, width: 100}} >
                    <Text>Back</Text>
                </TouchableHighlight>
                <Image style = {{ height: 200, width: 300 }} source = {{ uri : imageUrl }}/>
                <Text>Hello</Text>
            </View>
        );
    }
}
