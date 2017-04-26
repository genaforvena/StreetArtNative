'use strict'

import React, { Component } from 'react';
import {
    AsyncStorage,
    View
} from 'react-native';

import update from 'immutability-helper';
import MapView from 'react-native-maps';

import ArtObjectPreview from './ArtObjectPreview';

export default class ArtMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            markers: [],
            region: {
                latitude: 56.32,
                longitude: 44,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }
        }
    }

    componentDidMount() {
        this._loadData().done()
    }

    _loadData = async () => {
        let data = await AsyncStorage.getItem('data')
        let json = JSON.parse(data);
        if (!json) {
            return;
        }
        let markers = json.map(item => {
            return {
                artObject: item,
                latlng: { latitude: item.lat, longitude: item.lng },
                description: item.address,
                title: item.title
            }
        });
        this.setState({
            markers: markers
        })
    }

    render() {
        return (
            <View style = {{ flex : 1 }} >
                <MapView
                    zoomEnabled = { true }
                    showsUserLocation = { true }
                    region = { this.state.region }
                    style = {{ flex: 1 }}
                    onRegionChange = { (region) => {
                        let newState = update(this.state, {
                            region: { $set: region }
                        })
                        this.setState(newState);
                    }}>
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            coordinate = { marker.latlng }
                            title = { marker.title }
                            description = { marker.description }
                            onSelect = { () => {
                                let newState = update(this.state, {
                                    preview: { $set: marker.artObject }
                                })
                                this.setState(newState);
                            }}
                            onDeselect = {() => {
                                let newState = update(this.state, {
                                    preview: { $set: null }
                                })
                                this.setState(newState);
                            }}
                            />
                    ))}
                </MapView>
                <ArtObjectPreview
                    navigator = { this.props.navigator }
                    artObject = { this.state.preview } />
            </View>
        );
    }
}
