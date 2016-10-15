'use strict'

import React, { Component } from 'react';

import ArtList from './ArtList'

export default class MainScene extends Component {
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
