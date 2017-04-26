'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';


export default class ArtObjectInList extends Component {
    render() {
        return (
            <Image
                style = { styles.image }
                source = {{ uri: this.props.image }}/>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1
    }
});
