'use strict'

import React, { Component } from 'react';
import {
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
            <ArtObjectDetails />
        )
    }
}

class ArtObjectDetails extends Component {
  render() {
    return (
      <View style = {{ padding: 22 }}>
          <Text>Hello!</Text>
      </View>
    );
  }
}
