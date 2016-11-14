'use strict'

import React, { Component } from 'react';
import {
    TouchableHighlight,
    Image,
    View,
    MapView,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text
} from 'react-native';

let windowWidth = Dimensions.get('window').width

export default class DetailArtScene extends Component {
    static get defaultProps() {
        return {
            title: 'Art List'
        };
    }
    render() {
        return (
            <ArtObjectDetails navigator = { this.props.navigator }
                data = { this.props.data }/>
        )
    }
}

class ArtObjectDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let artObject = this.props.data;
        let { image } = artObject.photos[0];
        let { location } = artObject;
        let artist = artObject.artists[0].name;
        let { name } = artObject;
        let { address } = location;

        let marker = [{
            latitude: location.lat,
            longitude: location.lng,
            title: location.address
        }]

        let region = {
            latitude: location.lat,
            longitude: location.lng,
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
                        <Text> { artist }</Text>
                        <Text> { name }</Text>
                        <Text> { address }</Text>
                    </View>
                    <MapView
                        style = { styles.map }
                        showUserLocation = { true }
                        scrollEnabled = { false }
                        region = { region }
                        annotations={ marker }/>
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
