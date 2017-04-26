'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
    View,
    ScrollView,
    Text
} from 'react-native';

import MapView from 'react-native-maps';

let windowWidth = Dimensions.get('window').width

export default class ArtObjectDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let artObject = this.props.data;
        let { image } = artObject;

        let marker = {
            latlng: { latitude: artObject.lat, longitude: artObject.lat},
            title: artObject.address
        }

        let region = {
            latitude: artObject.lat,
            longitude: artObject.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }
        return (
            <View style = {{ flex: 1 }}>
                <ScrollView>
                    <Image
                        style = { styles.image }
                        source = {{ uri : image }}/>
                    <View>
                        <Text> { artObject.artist }</Text>
                        <Text> { artObject.title }</Text>
                        <Text> { artObject.address }</Text>
                    </View>
                    <MapView
                        style = { styles.map }
                        showUserLocation = { true }
                        scrollEnabled = { false }
                        region = { region } >
                        <MapView.Marker
                                coordinate = { marker.latlng }
                                title = { marker.title }
                                />
                    </MapView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: windowWidth,
        width: windowWidth
    },
    map: {
        height: windowWidth,
        width: windowWidth
    }
});
