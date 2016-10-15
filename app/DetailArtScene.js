'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import ArtObjectDetails from './ArtObjectDetails';

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
