'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

export class ArtObjectInList extends Component {
    render() {
        return (
            <Image
                style = {styles.image}
                source = {{uri: this.props.image}}/>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    }
})
