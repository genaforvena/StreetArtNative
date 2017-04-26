'use strict'

import React, { Component } from 'react';
import {
    TabBarIOS
} from 'react-native';

import ArtMap from './ArtMap';
import ArtList from './ArtList';

export default class MainScene extends Component {
    static get defaultProps() {
        return {
            title: 'Main Scene'
        };
    }

    state = {
        selectedTab: 'map'
    };

    _renderContent = (name: string) => {
        if (name == 'map') {
            return (
                <ArtMap navigator = {this.props.navigator}/>
            )
        } else if (name == 'list') {
            return (
                <ArtList navigator = {this.props.navigator}/>
            )
        }
    };

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="yellow"
                tintColor="white"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Map"
                    selected={this.state.selectedTab === 'map'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'map'
                        });
                    }}>
                    {this._renderContent('map')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    selected={this.state.selectedTab === 'list'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'list'
                        });
                    }}>
                    {this._renderContent('list')}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}
