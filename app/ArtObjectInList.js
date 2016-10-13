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
            <View style = {styles.container}>
                <Image
                    style = {styles.image}
                    source = {{uri: this.props.image}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 1,
        height: 122,
        width: 122
    },
    image: {
        flex: 1
    }
})
